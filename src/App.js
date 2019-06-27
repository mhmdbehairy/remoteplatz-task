import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

class App extends React.Component {
  handleEditorChange = (e) => {
    console.log('Content was updated:', e.target.getContent());
  }

  render() {
    return (
      <Editor
        apiKey='ig7dylw49uiphxdccqt3h7gifwrbkuckffqdhg6wby9kqux8'
        initialValue="<p>This is the initial content of the editor</p>"
        init={{
          plugins: 'link image code textpattern lists advlist',
          textpattern_patterns: [
            { start: '- ', cmd: 'InsertUnorderedList', value: { 'list-style-type': 'circle' } },
            { start: '* ', cmd: 'InsertUnorderedList', value: { 'list-style-type': 'disc' } },
            { start: '# ', cmd: 'InsertUnorderedList', value: { 'list-style-type': 'square' } },
          ],
          setup: function (editor) {
            editor.addShortcut('ctrl+r', 'UnorderedList', function () {
              editor.execCommand('InsertUnorderedList');
            });
          },
          toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code | bullist'
        }}
        onChange={this.handleEditorChange}
      />
    );
  }
}

export default App;