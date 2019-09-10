import React from "react";
import AceEditor from "react-ace";
import brace from "brace";
import "brace/mode/javascript";
import "brace/theme/monokai";
class Editor extends React.Component {
  render() {
    return (
      <AceEditor
        mode="javascript"
        theme="monokai"
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
        height="90%"
        width="100%"
      />
    );
  }
}

export default Editor;
