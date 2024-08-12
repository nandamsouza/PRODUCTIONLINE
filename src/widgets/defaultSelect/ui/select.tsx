/* eslint-disable @typescript-eslint/no-explicit-any */
import { Autocomplete, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import { useEffect, useState } from "react";
import { styledInput } from "../../defaultInput/styles";

interface selectProps {
  minWidth?: string;
  label: string | undefined;
  options: { description: string | number; value: string | number }[];
  register: any;
  errors: boolean;
  valueData?: any | null;
  size?: "small" | "medium";
}

export function BasicSelect(props: selectProps) {
  const [inputValue, setInputValue] = useState<any>(null);

  useEffect(() => {
    if (!props.valueData) {
      setInputValue(null);
      return;
    }
    const result = props.options.filter(
      (element) => element.description === props.valueData
    );
    
    const Newdata = result.filter(Boolean)[0];
    setInputValue(Newdata);
  }, [props.valueData, props.options]);

  return (
    <Box sx={{ minWidth: props.minWidth ? props.minWidth : 120 }}>
      <FormControl fullWidth error={props.errors} size={props.size ?? "medium"}>
        <Autocomplete
          size={props.size ?? "medium"}
          disablePortal
          value={inputValue ?? ""}
          autoHighlight
          getOptionLabel={(option) => option.description || ''}
          id="combo-box-demo"
          options={props.options}
          noOptionsText={"Sem opções"}
          sx={{ width: "100%" }}
          isOptionEqualToValue={(option, value) =>
            option.description === value.description
          }
          ListboxProps={{
            style: {
              maxHeight: "140px",
            },
          }}
          onChange={(_event, newValue) => {
            setInputValue(newValue);
          }}
          renderInput={(params) => (
            <TextField
            {...params}
            {...props.register}
              error={props.errors}
              label={props.label}
              sx={styledInput}
              />
          )}
        />
      </FormControl>
    </Box>
  );
}
