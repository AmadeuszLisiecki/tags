import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { SelectChangeEvent } from '@mui/material/Select';

import { Tag } from "../types/Tag";
import { getTags } from "../api/tags";
import { Title } from "./Title";
import { CheckboxWrapper } from "./wrappers/CheckboxWrapper";
import { SelectWrapper } from "./wrappers/SelectWrapper";
import { TableWrapper } from "./wrappers/TableWrapper";
import { PaginationWrapper } from "./wrappers/PaginationWrapper";

const KEYS = {
  SORT: 'sort',
  PAGES: 'pages',
  PAGE: 'page',
  TAGS: 'tags',
};
const VALUES = {
  'SORT_ASC': 'asc',
  'SORT_DESC': 'desc',
  'PAGE_1': '1',
  'PAGE_2': '2',
  'PAGE_3': '3',
};
const POSSIBLE_PAGES = [VALUES['PAGE_1'], VALUES['PAGE_2'], VALUES['PAGE_3']];

const generateUrl = (sortType: string) => 
  `https://api.stackexchange.com/2.3/tags?order=${sortType}&sort=popular&site=stackoverflow`;

export const TagsContent = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const sort = searchParams.get(KEYS.SORT) || VALUES.SORT_DESC;
  const pages = searchParams.get(KEYS.PAGES) || VALUES.PAGE_1;
  const page = searchParams.get(KEYS.PAGE) || VALUES.PAGE_1;
  const url = generateUrl(sort);

  const pagesNumber = +pages;
  const pageNumber = +page;

  const handleSortChange = (_event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    const newSort = checked ? VALUES.SORT_DESC : VALUES.SORT_ASC;
    const url = generateUrl(newSort);

    if (pageNumber > +VALUES.PAGE_1) {
      searchParams.set(KEYS.PAGE, VALUES.PAGE_1);
    }

    searchParams.set(KEYS.SORT, newSort);
    setSearchParams(searchParams);
    mutation.mutate(url);
  }

  const handlePagesChange = (event: SelectChangeEvent) => {
    const newPages = event.target.value;
    console.log(newPages);

    if (newPages === VALUES.PAGE_1) {
      if (searchParams.has(KEYS.PAGES)) {
        searchParams.delete(KEYS.PAGES);
        searchParams.delete(KEYS.PAGE);
        setSearchParams(searchParams);
      }
    } else if (+newPages > +VALUES.PAGE_1) {
      searchParams.set(KEYS.PAGES, newPages);
      searchParams.set(KEYS.PAGE, VALUES.PAGE_1);
      setSearchParams(searchParams);
    }
  };

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    searchParams.set(KEYS.PAGE, value.toString());
    setSearchParams(searchParams);
  };

  useEffect(() => {
    if (!searchParams.has(KEYS.SORT)) {
      searchParams.set(KEYS.SORT, VALUES.SORT_DESC);
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams])

  const { isPending, error, data } = useQuery({
    queryKey: [KEYS.TAGS],
    queryFn: () => getTags(url),
  });

  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: getTags,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [KEYS.TAGS] })
    },
  });

  if (isPending) {
    return <Title>Feching tags. Please wait!</Title>;
  }

  if (error) {
    return <Title>{`An error occured - ${error.message}`}</Title>;
  }

  if (pagesNumber > +VALUES.PAGE_3 || pageNumber > +VALUES.PAGE_3) {
    return <Title>Too many pages.</Title>;
  }

  if (sort && sort !== VALUES.SORT_ASC && sort !== VALUES.SORT_DESC) {
    return <Title>Bad sort value.</Title>
  }

  if (pagesNumber < pageNumber) {
    return <h1>Page number is greater than other numbers.</h1>;
  }

  let tags = data.items as Tag[];

  if (pagesNumber > 1) {
    const allTagsCount = tags.length;
    const tagsCountOnPage = allTagsCount / pagesNumber;
    const startIndex = tagsCountOnPage * (pageNumber - 1);
    const endIndex = tagsCountOnPage * pageNumber - 1;

    tags = tags.filter((_tag, index) => index >= startIndex && index <= endIndex);
  }

  return (
    <div>
      <Title>List of tags with posts from Stackoverflow</Title>

      <CheckboxWrapper
        isChecked={sort === VALUES.SORT_DESC}
        onChange={handleSortChange}
      />

      <SelectWrapper
        onChange={handlePagesChange}
        selectedPagesCount={pages}
        possiblePagesCounts={POSSIBLE_PAGES}
      />

      <div className="tags">
        <TableWrapper tags={tags} />

        {pagesNumber > 1 && (
          <PaginationWrapper
            count={pagesNumber}
            page={pageNumber}
            onChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
};
