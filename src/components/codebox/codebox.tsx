import Editor from 'react-simple-code-editor';
import { useState } from 'react';
import { highlight, languages } from 'prismjs';
import styles from './codebox.module.scss';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-jsx';
import './prism-okaidia.css';

type CodeBoxProps = {
  code: string;
  fontSize?: number;
};

const CodeBox: React.FC<CodeBoxProps> = ({ code, fontSize = 12 }) => {
  const [codeState, setCodeState] = useState(code);

  return (
    <Editor
      className={styles['editor']}
      onValueChange={(codeState) => setCodeState(codeState)}
      value={codeState}
      highlight={(codeState) => highlight(codeState, languages.jsx, 'jsx')}
      padding={20}
      style={{ fontSize: fontSize + 'px' }}
      readOnly
    />
  );
};

export default CodeBox;
