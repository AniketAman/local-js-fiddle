import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "antd/es/button";
import { Header } from "./components/header/header";
import CodingArea from "./container/CodingArea/codingArea";
import OutPutArea from "./container/OutPutArea/OutPutArea";
import { Row, Col, Layout } from "antd";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Layout className="fill-height">
        <Row className="fill-height">
          <Col className="fill-height" span={12}>
            <CodingArea></CodingArea>
          </Col>
          <Col span={12} className="fill-height">
            <OutPutArea></OutPutArea>
          </Col>
        </Row>
      </Layout>
    </div>
  );
}

export default App;
