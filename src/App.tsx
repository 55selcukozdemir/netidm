import { useState } from "react";
import {SidebarProvider } from "./context/Context";
import Content from "./general/Content";
import Sidebar from "./general/Sidebar";
import Appbar from "./general/Appbar"

const App = () => {
  return (
    <>
      <SidebarProvider>
        <Appbar/>
        <Sidebar />
        <Content>
          <div>Content</div>
        </Content>
      </SidebarProvider>
    </>
  );
};

export default App;
