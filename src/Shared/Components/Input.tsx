import styled from "styled-components";
import { styled as muiStyle } from "@mui/material/styles";
import { TextField } from "@mui/material";

const CssTextField = muiStyle(TextField)({
  "& label.Mui-focused": {
    color: "#A0AAB4",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6F7E8C",
    },
  },
});

interface InputProps {
  value?: unknown;
  handleChange?: (event: any) => void;
  label: string;
  placeholder: string;
  required?: boolean;
  rows?: number;
}

export const Input = ({
  value,
  handleChange,
  required,
  label,
  placeholder,
  rows,
}: InputProps) => {
  return (
    <StyledInput
      id="outlined-basic"
      label={label}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={(e) => handleChange?.(e)}
      error={required ? value === "" : false}
      size="small"
      multiline={rows && rows > 1 ? true : false}
      rows={rows}
    />
  );
};

const StyledInput = styled(CssTextField)`
  flex-grow: 1;

  label,
  input,
  textarea {
    color: #fff;
  }
`;
