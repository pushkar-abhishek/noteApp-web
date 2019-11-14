import React from "react";
// import "./App.css";
import { Provider } from 'react-redux';
import { store } from '../src/store/store';
import HeaderArea from "./components/common/HeaderArea";
import ContainerArea from "./components/common/ContainerArea";
import SidebarArea from "./components/common/SidebarArea";
import ContentArea from "./components/common/ContentArea";

function App() {
  return (
    <Provider store={store}>
      <div className="container-fluid">
        <HeaderArea />
        <ContainerArea>
          <SidebarArea />
          <ContentArea />
        </ContainerArea>
      </div>
    </Provider>
  );
}

export default App;
