import { FC } from 'react';

import TextField, { TextFieldProps } from '@mui/material/TextField';

const TextInput: FC<TextFieldProps> = ({ ...props }) => (
  <TextField
    sx={{
      marginBottom: 2,
      marginRight: 2,
      '& .MuiFormLabel-root': {
        color: '#B9BBBE',
      },
      '& .MuiInputBase-root': {
        color: 'white',
        backgroundColor: '#303030',
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: '#B9BBBE',
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#303030',
      },
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#303030',
      },
      '& .MuiFormHelperText-root': {
        color: '#B9BBBE',
      },
    }}
    {...props}
  />
);

export default TextInput;
