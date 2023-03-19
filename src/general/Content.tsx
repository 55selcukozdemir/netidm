import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material";
import React, { useContext } from "react";
import { CurrentContext } from "../context/Context";

const drawerWidth = 240;



const Main = styled("main", {shouldForwardProp: (prop) => prop !== 'open'})
<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}`,
  ...(open && {
    backgroundColor: "red",
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
  }),
}));

const Content: React.FunctionComponent<{children: any}> = ({children}) => {

  const context = useContext(CurrentContext);



  return (
    <React.Fragment>
      
      <Main open={context.sidebar} onClick={()=> context.setSidebar(!context.sidebar)}>
        {children}
      </Main>
    </React.Fragment>
  );
};

export default Content;
