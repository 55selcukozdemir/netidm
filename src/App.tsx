import { useState } from "react";
import { SidebarProvider } from "./context/Context";
import Content from "./general/Content";
import Sidebar from "./general/Sidebar";
import Appbar from "./general/AppBar";
import { Box } from "@mui/material";
import { BrowserRouter as Router, createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import Products from "./pages/products/Products";
import EditAndUpdateAndAddProduct from "./pages/products/EditAndUpdateAndAddProduct";


const router = createBrowserRouter([
{
  path: "/",
  element: <Content><div>ana dizin</div></Content>
},
{
  path: "/product",
  element: <Content><Products/></Content>,
  children: [
    {
      path: "add",
      element: <div style={{width: "500px", height: "500px", backgroundColor: "red"}}>add</div>
    },
  ],
},
{
  path: "/germe",
  element: <Content><div>germe ekle</div></Content>
}
])

const App = () => {
  const style: React.CSSProperties = {
    flexBasis: "200px",
    backgroundColor: "#fff",
    margin: 20,
  };
  

  
  return (
    <>
      <SidebarProvider>
        <Box sx={{ display: "flex" }}>
          <Appbar />
          <Sidebar />
          <RouterProvider  router={router}/>

          
        </Box>
      </SidebarProvider>
    </>
  );
};

export default App;
