import { styled } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { IconButton, Toolbar, Typography } from "@mui/material";
import { CurrentContext } from "../context/Context";
import { useContext } from "react";

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const menuIcon: React.CSSProperties = { color: "white" };

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Appbar: React.FC = () => {
  const context = useContext(CurrentContext);

  return (
    <AppBar open={context.sidebar} position={"fixed"}>
      <Toolbar>
        <IconButton
          sx={{ marginRight: "20px" }}
          onClick={() => context.setSidebar(!context.sidebar)}
        >
          {context.sidebar === false ? (
            <MenuIcon style={menuIcon} />
          ) : (
            <MenuOpenIcon style={menuIcon} />
          )}
        </IconButton>
        <Typography variant="h6" component="h6">
          AppBar
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
