import Select, { SelectChangeEvent } from "@mui/material/Select"
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

type SelectWrapperProps = {
  /**
   * Selected count of pages.
   */
  selectedPagesCount: string,

  /**
   * Handle chenge select value.
   */
  onChange: (event: SelectChangeEvent) => void,

  /**
   * Array of all possible pages.
   */
  possiblePagesCounts: string[],
};

/**
 * Wrapper to MUI Select.
 */
export const SelectWrapper = ({ 
  onChange, 
  selectedPagesCount, 
  possiblePagesCounts,
}: SelectWrapperProps) => (
  <FormControl variant="filled" sx={{ m: 1, minWidth: 100 }}>
    <InputLabel id="demo-simple-select-filled-label">Pages</InputLabel>
    <Select
      labelId="demo-simple-select-filled-label"
      id="demo-simple-select-filled"
      onChange={onChange}
      value={selectedPagesCount}
    >
      {possiblePagesCounts.map(pagesCount => (
        <MenuItem key={pagesCount} value={pagesCount}>{pagesCount}</MenuItem>
      ))}
    </Select>
  </FormControl>
);
