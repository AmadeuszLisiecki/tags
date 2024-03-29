import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import FormControlLabel from '@mui/material/FormControlLabel';
import { Checkbox, Pagination } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { Tag } from "../types/Tag";
import { TagsList } from "./TagsList";
import { getTags } from "../api/tags"; 

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

const generateUrl = (sortType: string) => `tags/${sortType}.json`;

export const TagsContent = () => {
  // const url = 'https://api.stackexchange.com/2.3/tags?order=desc&sort=activity&site=stackoverflow';
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
    return <h1>Feching tags. Please wait!</h1>;
  }

  if (error) {
    return <h1>{`An error occured ${error.message}`}</h1>;
  }

  if (pagesNumber < pageNumber) {
    return <h1>Page number is greater than other numbers</h1>;
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
      <h1>List of tags with comments</h1>

      <div>
        <FormControlLabel 
          sx={{ m: 2 }} 
          control={(
            <Checkbox 
              checked={sort === VALUES.SORT_DESC}
              onChange={handleSortChange}
            />
          )} 
          label="Sort DESC" 
        />

        <FormControl variant="filled" sx={{ m: 1, minWidth: 100 }}>
          <InputLabel id="demo-simple-select-filled-label">Pages</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            onChange={handlePagesChange}
            value={pages}
          >
            <MenuItem value={VALUES.PAGE_1}>
              <em>1</em>
            </MenuItem>
            <MenuItem value={VALUES.PAGE_2}>2</MenuItem>
            <MenuItem value={VALUES.PAGE_3}>3</MenuItem>
          </Select>
        </FormControl>
      </div>

      <TagsList tags={tags} />

      {pagesNumber > 1 && (
        <Pagination 
          count={pagesNumber} 
          page={pageNumber} 
          onChange={handlePageChange} 
        />
      )}
    </div>
  );
};
