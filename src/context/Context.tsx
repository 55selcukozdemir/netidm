import { createContext, useState } from "react";


interface userContextValue {
  sidebar: boolean;
  setSidebar: (status: boolean) => void;
}
const CurrentContext = createContext<userContextValue>({
  sidebar: true,
  setSidebar: ()=>{}
});

const SidebarProvider: React.FC<{children: any}> = ({children})=>{
  const [sidebar, setSidebar] = useState<boolean> (true);

  const value = {
    sidebar,
    setSidebar
  }

  return <CurrentContext.Provider value={value}> {children}</CurrentContext.Provider>
}







export {CurrentContext, SidebarProvider}