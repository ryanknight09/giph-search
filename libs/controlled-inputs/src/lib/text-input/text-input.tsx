import { FC } from 'react';

import TextField, { TextFieldProps } from '@mui/material/TextField';

export const TextInput: FC<TextFieldProps> = ({ ...props }) => {
  return (
    <TextField
      {...props}
      // id="outlined-helperText"
      // label="Search..."
      // defaultValue=""
      // helperText="Some important text"
    />
  );
};

export default TextInput;
