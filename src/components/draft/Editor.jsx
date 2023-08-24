import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export const Draft = () => {
  return (
    <CKEditor
      editor={ClassicEditor}
      data="<p>Hello welcome start to chat now</p>"
      onReady={(editor) => {
        console.log("Editor is ready to use!", editor);
      }}
      onChange={(e, editor) => {
        const data = editor.getData();
        console.log({ e, editor, data });
      }}
      onBlur={(e, editor) => {
        console.log("Blur.", editor);
      }}
      onFocus={(e, editor) => {
        console.log("Focus.", editor);
      }}
    />
  );
};
