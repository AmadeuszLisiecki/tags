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
import { generateUrl } from "../helpers/functions";
import { 
  KEYS, 
  POSSIBLE_PAGES, 
  TITLES, 
  VALUES 
} from "../helpers/constants";

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

  const { isPending, error, data } = useQuery({
    queryKey: [KEYS.TAGS],
    queryFn: () => getTags(url),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: getTags,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [KEYS.TAGS] })
    },
  });

  useEffect(() => {
    if (!searchParams.has(KEYS.SORT)) {
      searchParams.set(KEYS.SORT, VALUES.SORT_DESC);
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams]);

  if (isPending) {
    return <Title>{TITLES.FETCHING}</Title>;
  }

  if (error) {
    return <Title>{`${TITLES.ERROR} - ${error.message}`}</Title>;
  }

  if (pagesNumber > +VALUES.PAGE_3 || pageNumber > +VALUES.PAGE_3) {
    return <Title>{TITLES.TOO_MANY_PAGES}</Title>;
  }

  if (sort && sort !== VALUES.SORT_ASC && sort !== VALUES.SORT_DESC) {
    return <Title>{TITLES.BAD_SORT}</Title>;
  }

  if (pagesNumber < pageNumber) {
    return <Title>{TITLES.INCORRECT_PAGE}</Title>;
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
      <Title>{TITLES.LOADED}</Title>

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
