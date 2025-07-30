import Editor from "./Editor";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { useContext } from 'react';
import { DataContext } from '../contexts/DataProvider';

const Container = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  background-color: #060606;
  gap: 8px; /* optional: adds spacing between wrapped items */
`;
const EditorWrapper = styled(Box)`
  flex: 1 1 300px; /* allow to grow/shrink but not below 300px */
  min-width: 300px;
`;


const Code=()=>{
    const{html,setHtml,css,setCss,js,setJs}=useContext(DataContext);
    return(
        <Container>
  <EditorWrapper>
    <Editor
      heading="HTML"
      sign="/"
      bg="red"
      value={html}
      onChange={setHtml}
    />
  </EditorWrapper>
  <EditorWrapper>
    <Editor
      heading="CSS"
      sign="*"
      bg="blue"
      value={css}
      onChange={setCss}
    />
  </EditorWrapper>
  <EditorWrapper>
    <Editor
      heading="JS"
      sign="<>"
      bg="yellow"
      value={js}
      onChange={setJs}
    />
  </EditorWrapper>
</Container>

    );
}
export default Code;