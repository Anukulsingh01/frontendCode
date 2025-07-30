import Editor from "./Editor";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { useContext } from 'react';
import { DataContext } from '../contexts/DataProvider';

const Container=styled(Box)`
display:flex;
flex-wrap:wrap;
background-color:#060606;
 `;
// const Container = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   backgroundColor: '#060606',

//   // Custom media query for width < 800px
//   [`@media (max-width:800px)`]: {
//     flexDirection: 'column',
//   },
// }));
const CoderWrapper = styled(Box)`
  min-width: 250px;
  flex: 1; /* optional: allows it to grow */
`;

const Code=()=>{
    const{html,setHtml,css,setCss,js,setJs}=useContext(DataContext);
    return(
        <Container>
  <CoderWrapper>
    <Editor
      heading="HTML"
      sign="/"
      bg="red"
      value={html}
      onChange={setHtml}
    />
  </CoderWrapper>
  <CoderWrapper>
    <Editor
      heading="CSS"
      sign="*"
      bg="blue"
      value={css}
      onChange={setCss}
    />
  </CoderWrapper>
  <CoderWrapper>
    <Editor
      heading="JS"
      sign="<>"
      bg="yellow"
      value={js}
      onChange={setJs}
    />
  </CoderWrapper>
</Container>

    );
}
export default Code;