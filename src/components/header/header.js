import { Row, Col } from "antd";
import React from "react";
import styles from "./header.module.css";
export const Header = props => {
  return (
    <div className={styles.codeHeader}>
      <Row type="flex" align="middle">
        <Col span={12}>
          <h2>Code Ed</h2>
        </Col>
      </Row>
    </div>
  );
};
