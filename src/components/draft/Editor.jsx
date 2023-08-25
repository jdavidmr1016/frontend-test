import { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export const Draft = () => {
  const [editorData, setEditorData] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form method="post" onSubmit={handleSubmit}>
      <CKEditor
        editor={ClassicEditor}
        data={editorData}
        onReady={(editor) => {
          console.log("Editor is ready to use!");
        }}
        onChange={(e, editor) => {
          const data = editor.getData();
          setEditorData(data);
        }}
        /* onBlur={(e, editor) => {
        console.log("Blur.", editor);
      }}
      onFocus={(e, editor) => {
        console.log("Focus.", editor);
      }} */
      />
    </form>
  );
};
