import { Box, Drawer, Typography ,styled } from '@mui/material'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Profile from './Profile';

const Header = styled(Box)`
 color: #fff;
 height: 110px;
 background:#008069;
 display: flex;
 & > svg, & > p{
  margin-top: auto;
  padding : 15px;
  font-weight: 600;
  ${'' /* font-family: Times New Roman; */}
 }
`

const Component = styled(Box)`
  background: #ededed;
  height: 85%;

`

const drawerStyle = {
  left:14,
  top:14,
  height: '98%',
  boxShadow: 'none',
  width: '30%'
}
const InfoDrawer = ({ open,setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  }
  return (
    <Drawer
     open={open}
     onClose={handleClose}
     PaperProps={{sx:drawerStyle}}
     style={{ zIndex: 1600}}
    >
   <Header> 
   <ArrowBackIcon onClick={() =>setOpen(false)}/>
   <Typography style={{fontSize: '18px'}}>Profile</Typography>
   </Header>
   <Component>
    <Profile/>
   </Component>
    </Drawer>
  )
}

export default InfoDrawer
