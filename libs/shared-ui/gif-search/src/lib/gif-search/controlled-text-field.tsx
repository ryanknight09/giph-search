import { FC, KeyboardEvent } from 'react';

import TextField from '@mui/material/TextField';
import { useFormContext, Controller } from 'react-hook-form';

interface TextFieldProps {
  label: string;
  helperText?: string;
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
}

export const ControlledTextField: FC<TextFieldProps> = ({
  onKeyDown,
  ...props
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name="searchPhrase"
      defaultValue=""
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          onKeyDown={onKeyDown}
          error={!!error}
          onChange={onChange}
          value={value}
          {...props}
        />
      )}
    />
  );
};

export default ControlledTextField;
