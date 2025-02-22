import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

const FlightSelect = () => {
  const [filter, setFilter] = useState<string>("");
  const fromValues: { id: string; title: string }[] = [
    { id: "price", title: "the Cheapest" },
    { id: "duration", title: "the shortest flight duration" },
  ];

  const handleChange = (event: SelectChangeEvent) => {
    const { value } = event.target;
    setFilter(value);
    console.log(value);
  };

  return (
    <FormControl sx={{ width: 300 }}>
      <Select
        displayEmpty
        value={filter}
        onChange={handleChange}
        input={<OutlinedInput />}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return <em>Filter</em>;
          }
          return selected;
        }}
      >
        <MenuItem disabled value="">
          <em>Filter</em>
        </MenuItem>
        {fromValues.map((value) => (
          <MenuItem key={value.id} value={value.title}>
            {value.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FlightSelect;
