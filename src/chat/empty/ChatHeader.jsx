import { Box, Typography, styled } from '@mui/material'
import {Search , MoreVert} from '@mui/icons-material'
// import { emptyProfilePicture } from '../../constants/data'


const Header = styled(Box)`
   height: 44;
   background: #ededed;
   display: flex;
   padding : 8px 16px;
   align-items: center;
`
const Image = styled('img')({
    height: '40px',
    width: '40px',
    borderRadius: '50%'
})


const Name = styled(Typography)`
   margin-left: 12px !important;
`

const Status = styled(Typography)`
   margin-left: 12px !important;
   font-size: 12px;
   color: rgb(0,0,0,0.6)
`
const RightContainer = styled(Box)`
    margin-left: auto;
    & > svg {
        padding: 8px;
        font-size: 22px;
        color: #000;
    }
`;

const ChatHeader = ({ person }) => {
  return (
    <Header>
    {/* <Image src={emptyProfilePicture} alt="profile" /> */}
    <Image src={person.picture} alt="profile" />
      <Box>
      <Name>{person.name}</Name>
      <Status>Online</Status>
      </Box>
      <RightContainer>
        <Search/>
        <MoreVert/>
      </RightContainer>
    </Header>
  )
}

export default ChatHeader
