import React from "react";
import { useContext } from "react";
import { CurrentContext } from "../context/Context";
import {
  Box,
  CssBaseline,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

//metarial
import Drawer from "@mui/material/Drawer";
import { styled, useTheme } from "@mui/material/styles";

//icon
import NotesIcon from "@mui/icons-material/Notes";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import HomeIcon from "@mui/icons-material/Home";
import FolderSpecial from "@mui/icons-material/FolderSpecial";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Sidebar = () => {
  const context = useContext(CurrentContext);

  const theme = useTheme();

  return (
    <React.Fragment>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={context.sidebar}
      >
        <DrawerHeader>
          <Box sx={{ display: "flex", alignItems: "stretch", width: " 100%" }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: "bold",
                color: "#1976d2",
                flexGrow: 1,
              }}
            >
              ERP
            </Typography>
            <Typography
              display={"flex"}
              variant="subtitle1"
              component="h2"
              sx={{
                fontWeight: "bold",
                flexGrow: 2,
                marginLeft: "-5px",
                alignItems: "flex-end",
              }}
            >
              prefabrik
            </Typography>
          </Box>
        </DrawerHeader>
        <Divider />
        <Box>
          <img src="" alt="" />
        </Box>
        <Divider />
        <List>
          <a href="/kalıp" style={{ textDecoration: "none", color: "black" }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Ana Ekran" />
              </ListItemButton>
            </ListItem>
          </a>

          <a href="/product" style={{textDecoration: "none", color: "black" }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <FolderSpecialIcon />
                </ListItemIcon>
                <ListItemText primary="Günlük imalat" />
              </ListItemButton>
            </ListItem>
          </a>
        </List>
      </Drawer>
    </React.Fragment>
  );
};

export default Sidebar;
