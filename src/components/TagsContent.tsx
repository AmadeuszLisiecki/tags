import { useQuery } from "@tanstack/react-query";
import FormControlLabel from '@mui/material/FormControlLabel';
import { Checkbox } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { Tag } from "../types/Tag";
import { TagsList } from "./TagsList";
import { useState } from "react";

export const TagsContent = () => {
  // const url = 'https://api.stackexchange.com/2.3/tags?order=desc&sort=activity&site=stackoverflow';
  const url = 'tags/desc.json';

  const [pages, setPages] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    console.log(event.target.value);
    setPages(event.target.value);
  };

  const { isPending, error, data } = useQuery({
    queryKey: ['tags'],
    queryFn: () =>
      fetch(url).then((res) =>
        res.json(),
      ),
  });

  if (isPending) {
    return <h1>{'Is pending'}</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  const tags = data.items as Tag[];

  return (
    <div>
      <h1>List of tags with comments</h1>

      <div>
        <FormControlLabel 
          sx={{ m: 2 }} 
          control={<Checkbox defaultChecked />} 
          label="Sort DESC" 
        />

        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-filled-label">Pages</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            onChange={handleChange}
            value={pages}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
          </Select>
        </FormControl>
      </div>

      <TagsList tags={tags} />
    </div>
  );
};
