import React, { Component } from "react";
import Pane from "../../components/pane/pane";
import Editor from "../../components/editor/Editor";
import { Select } from "antd";
import styles from "./codingArea.module.css";
const { Option } = Select;

export default class codingArea extends Component {
  render() {
    return (
      <Pane>
        <Select
          className={styles.dropDown}
          defaultValue="JavaScript"
          style={{ width: 120 }}
        >
          <Option value="JavaScript">JavaScript</Option>
          <Option value="CSS">CSS</Option>
          <Option value="HTML">HTML</Option>
        </Select>
        <Editor></Editor>
      </Pane>
    );
  }
}
