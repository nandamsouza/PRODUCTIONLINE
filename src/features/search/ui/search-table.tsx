/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { useStyles } from "./styles";

interface SearchProps {
  size?: "small" | "medium";
  width?: string;
  data: any[];
  onFilter: (filteredData: any[]) => void; // Callback to send the filtered data back
}

export function SearchTable(props: SearchProps) {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const trimmedSearchText = searchText.trim();
    if (trimmedSearchText === "") {
      props.onFilter(props.data);
    } else {
      const lowercasedFilter = trimmedSearchText.toLowerCase();
      const newFilteredData = props.data.filter((item) =>
        Object.keys(item).some(
          (key) =>
            item[key] !== null &&
            item[key].toString().toLowerCase().includes(lowercasedFilter)
        )
      );
      props.onFilter(newFilteredData);
    }
  }, [searchText, props.data]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  return (
    <Box sx={useStyles.container}>
      <TextField
        size={props.size}
        sx={
          props.width
            ? { ...useStyles.input, width: props.width }
            : useStyles.input
        }
        id="input-with-icon-textfield"
        placeholder="Pesquisar..."
        value={searchText}
        onChange={handleSearchChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
    </Box>
  );
}
