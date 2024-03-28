import { useEffect, useState } from "react";
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

export const TagsContent = () => {
  // const url = 'https://api.stackexchange.com/2.3/tags?order=desc&sort=activity&site=stackoverflow';
  const [searchParams, setSearchParams] = useSearchParams();

  const url = `tags/${searchParams.get('sort')}.json`;

  const [pages, setPages] = useState('1');
  const [page, setPage] = useState('1');

  const pagesNumber = +pages;
  const pageNumber = +page;

  const handleSortChange = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    console.log(event, checked);
    searchParams.set('sort', checked ? 'desc' : 'asc');
    setSearchParams(searchParams);

    const url = `tags/${searchParams.get('sort')}.json`;

    mutation.mutate(url);
  }

  const handlePagesChange = (event: SelectChangeEvent) => {
    const newPages = event.target.value;
    console.log(newPages);
    setPages(newPages);

    if (newPages === '1') {
      if (searchParams.has('pages')) {
        searchParams.delete('pages');
        searchParams.delete('page');
        setSearchParams(searchParams);
        setPage('1');
      }
    } else if (newPages === '2' || newPages === '3') {
      searchParams.set('pages', newPages);
      searchParams.set('page', '1');
      setSearchParams(searchParams);
      setPage('1');
    }
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    console.log(event, value);
    setPage(value.toString());
    
    searchParams.set('page', value.toString());
    setSearchParams(searchParams);
  };

  useEffect(() => {
    if (!searchParams.has('sort')) {
      searchParams.set('sort', 'desc');
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams])

  const { isPending, error, data } = useQuery({
    queryKey: ['tags'],
    queryFn: () => getTags(url),
  });

  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: getTags,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tags'] })
    },
  })

  if (isPending) {
    return <h1>{'Is pending'}</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
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
          control={<Checkbox defaultChecked onChange={handleSortChange} />} 
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
            <MenuItem value="1">
              <em>1</em>
            </MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
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
