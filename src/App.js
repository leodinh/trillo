import React from "react";
import "./App.css";
import Layout from "./hoc/Layout/Layout";
import HotelView from "./component/HotelView/HotelView";
function App() {
  return (
    <Layout>
      <HotelView />
    </Layout>
  );
}

export default App;
