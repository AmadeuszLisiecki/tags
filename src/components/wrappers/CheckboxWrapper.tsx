import { Checkbox, FormControlLabel } from "@mui/material";

type CheckboxWrapperProps = {
  /**
   * Is checkbox checked?
   */
  isChecked: boolean,

  /**
   * Change handler.
   */
  onChange: (
    _event: React.ChangeEvent<HTMLInputElement>, 
    checked: boolean
  ) => void,
};

/**
 * Wrapper to MUI Checkbox.
 */
export const CheckboxWrapper = ({ 
  isChecked, 
  onChange, 
}: CheckboxWrapperProps) => (
  <FormControlLabel
    sx={{ m: 2 }}
    control={(
      <Checkbox
        checked={isChecked}
        onChange={onChange}
      />
    )}
    label="Sort DESC"
  />
);
