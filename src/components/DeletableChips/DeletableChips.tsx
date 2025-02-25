import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { FC } from "react";
import type { Filters } from "../../Entities/Filters";

interface DeletableChipsProps {
  appliedFilters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

const DeletableChips: FC<DeletableChipsProps> = ({
  appliedFilters,
  setFilters,
}) => {
  const handleDelete = (key: string) => {
    setFilters((prev) => ({ ...prev, [key]: "", isSearch: !prev.isSearch }));
  };

  return (
    <Stack direction="row" spacing={1} sx={{ width: "fit-content", margin: 0 }}>
      {Object.entries(appliedFilters)
        .filter(([key, value]) => key !== "isSearch" && value !== "")
        .map(([key, value]) => (
          <Chip
            key={key}
            label={value}
            variant="outlined"
            onDelete={() => handleDelete(key)}
          />
        ))}
    </Stack>
  );
};

export default DeletableChips;
