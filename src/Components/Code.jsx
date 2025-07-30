import Editor from "./Editor";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { useContext } from 'react';
import { DataContext } from '../contexts/DataProvider';

const Container=styled(Box)`
display:flex;
background-color:#060606;
`;
const Code=()=>{
    const{html,setHtml,css,setCss,js,setJs}=useContext(DataContext);
    return(
        <Container>
        <Editor heading="HTML" 
        sign="/"
        bg="red" 
        value={html}
        onChange={setHtml}/>
        <Editor 
        heading="CSS"
        sign="*"
        bg="blue"
         value={css} 
        onChange={setCss}
        />
        <Editor heading="JS" sign="<>" bg="yellow"
        value={js}
        onChange={setJs}/>
        </Container>
    );
}
export default Code;