import { Box, InputBase ,styled } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const Component = styled(Box)`
 height : 45px;
 background:#fff;
 border-bottom: 1px solid #f2f2f2;
 display:flex;
 align-items:center;
`

const Wrapper = styled(Box)`
background-color:#ededed;
position:relative;
margin:0 13px;
width: 100%;
border-radius:10px;
`
const Icon = styled(Box)`
 position:absolute;
 height:100%;
 padding:6px;
 color: #716868;
`
const InputField = styled(InputBase)`
 width: 100%;
 padding:16px;
 height:16px;
 padding-left:65px;
 font-size: 14px;
`

const Search = ({ setText }) => {
  return (
    <Component>
     <Wrapper>
        <Icon>
     <SearchIcon fontSize='small'/>
        </Icon>
        <InputField placeholder='Search or start new chat'
          onChange={(e) => setText(e.target.value)}
        />
     </Wrapper>
    </Component>
  )
}

export default Search
