import { ChevronLeft } from "@mui/icons-material";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { styled, useTheme } from "@mui/material/styles";
import React from "react";
import { useContext } from "react";
import { CurrentContext } from "../context/Context";


const DrawerHeader = styled('div')(({theme}) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end'
}))


const Sidebar = () => {
  const context = useContext(CurrentContext);

  const theme = useTheme()


  return (
    <React.Fragment>
      <Drawer>
        <DrawerHeader>
          <IconButton>
            {theme.direction === 'ltr'  }
          </IconButton>
        </DrawerHeader>
      </Drawer>
    </React.Fragment>
  )
};

export default Sidebar;
