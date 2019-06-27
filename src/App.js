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
            { start: '1. ', cmd: 'InsertOrderedList', value: { 'list-style-type': 'decimal' } },
            { start: 'a. ', cmd: 'InsertOrderedList', value: { 'list-style-type': 'lower-alpha' } },
            { start: 'i. ', cmd: 'InsertOrderedList', value: { 'list-style-type': 'lower-roman' } },
          ],
          setup: function (editor) {
            editor.addShortcut('ctrl+r', 'UnorderedList', function () {
              editor.execCommand('InsertUnorderedList');
            });
            editor.addShortcut('ctrl+e', 'UnorderedList', function () {
              editor.execCommand('InsertOrderedList');
            });
          },
          toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code | bullist numlist'
        }}
        onChange={this.handleEditorChange}
      />
    );
  }
}

export default App;