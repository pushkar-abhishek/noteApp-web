import React from "react";
import "./App.css";
import HeaderArea from "./components/common/HeaderArea";
import ContainerArea from "./components/common/ContainerArea";
import SidebarArea from "./components/common/SidebarArea";
import ContentArea from "./components/common/ContentArea";

function App() {
  return (
    <div className="container-fluid">
      <HeaderArea />
      <ContainerArea>
        <SidebarArea />
        <ContentArea />
      </ContainerArea>
    </div>
  );
}

export default App;
