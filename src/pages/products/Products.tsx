import React, { useMemo } from "react";

import MaterialReactTable, { MRT_ColumnDef } from "material-react-table";
import { Delete, Edit } from "@mui/icons-material";
import { Box, IconButton } from '@mui/material';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Email as EmailIcon,
} from '@mui/icons-material';

type Person = {
  id: string;
  name: string;
  count: string;
  block: string;
  edit: string;
};

const data = [
  {
    id: "1",
    name: "009_457_PDK1",
    count: "3",
    block: "M",
    edit: "",
  },
  {
    id: "1",
    name: "009_457_PDK1",
    count: "3",
    block: "M",
    edit: "",
  },
  {
    id: "1",
    name: "009_457_PDK1",
    count: "3",
    block: "M",
    edit: "",
  },
  {
    id: "1",
    name: "009_457_PDK1",
    count: "3",
    block: "M",
    edit: "",
  },
  {
    id: "1",
    name: "009_457_PDK1",
    count: "3",
    block: "M",
    edit: "",
  },
  {
    id: "1",
    name: "009_457_PDK1",
    count: "3",
    block: "M",
    edit: "",
  },
  {
    id: "1",
    name: "009_457_PDK1",
    count: "3",
    block: "M",
    edit: "",
  },
  {
    id: "1",
    name: "009_457_PDK1",
    count: "3",
    block: "M",
    edit: "",
  },
  {
    id: "1",
    name: "009_457_PDK1",
    count: "3",
    block: "M",
    edit: "",
  },
  {
    id: "1",
    name: "009_457_PDK1",
    count: "3",
    block: "M",
    edit: "",
  },
  {
    id: "1",
    name: "009_457_PDK1",
    count: "3",
    block: "M",
    edit: "",
  },
  {
    id: "1",
    name: "009_457_PDK1",
    count: "3",
    block: "M",
    edit: "",
  },
  {
    id: "1",
    name: "009_457_PDK1",
    count: "3",
    block: "M",
    edit: "",
  },
  {
    id: "1",
    name: "009_457_PDK1",
    count: "3",
    block: "M",
    edit: "",
  },
  {
    id: "1",
    name: "009_457_PDK1",
    count: "3",
    block: "M",
    edit: "",
  },
  {
    id: "1",
    name: "009_457_PDK1",
    count: "3",
    block: "M",
    edit: "",
  },
  {
    id: "1",
    name: "009_457_PDK1",
    count: "3",
    block: "M",
    edit: "",
  },
  {
    id: "1",
    name: "008_457_PDK1",
    count: "3",
    block: "M",
    edit: "",
  },
  {
    id: "1",
    name: "009_457_PDK1",
    count: "3",
    block: "M",
    edit: "",
  },
];

const Products: React.FunctionComponent = () => {
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      { accessorKey: "id", header: "id" },
      {
        accessorKey: "name",
        header: "Adı",
      },
      {
        accessorKey: "count", //normal accessorKey
        header: "Adet",
      },
      {
        accessorKey: "block",
        header: "Blok",
      },
    ],
    []
  );

  return (
    <React.Fragment>
      <MaterialReactTable
        data={data}
        enableEditing
        enableStickyHeader
        enableStickyFooter
        columns={columns}
        renderRowActions={({ row, table }) => (
          <Box sx={{ display: "flex", flexWrap: "nowrap", gap: "8px" }}>
            <IconButton
              color="primary"
              onClick={() =>
                window.open(
                  `mailto:kevinvandy@mailinator.com?subject=Hello !`
                )
              }
            >
              <EmailIcon />
            </IconButton>
            <IconButton
            >
              <a href="/"><EditIcon /></a>
            </IconButton>
            <IconButton
              color="error"
              onClick={() => {
                data.splice(row.index, 1); //assuming simple data table
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        )}
        enableRowNumbers
      />
    </React.Fragment>
  );
};

export default Products;
