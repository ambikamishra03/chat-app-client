
import ChatIcon from '@mui/icons-material/Chat';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';

import { useContext, useState } from 'react';
import { AccountContext } from '../../context/AccountProvider';
import { Box , styled} from '@mui/material';
import HeaderMenu from './HeaderMenu';
import InfoDrawer from '../../components/drawer/InfoDrawer'

const Component = styled(Box)`
 height : 45px;
 background-color:#ededed;
 padding: 8px 15px;
 display: flex;
 align-items: center;
`

const Wrapper = styled(Box)`
 margin-left : auto;
 & > * {
    margin-left:3px;
    padding: 8px;
    color: #716868;
 };
 & :first-child{
   font-size: 22px;
 }
`

const Image = styled('img')({
    height : 45,
    width: 45,
    borderRadius: '50%'
})

const Header = () => {

    const { account } = useContext(AccountContext);
    const [openDrawer , setOpenDrawer] = useState(false);
    const toggleDrawer = () =>{
      setOpenDrawer(true);
    }
  return (
    <>
      <Component>
        <Image src={account.picture} alt="profile" onClick={() => toggleDrawer()}/>
        <Wrapper>
        <HistoryToggleOffIcon/>
        <ChatIcon/>
      <HeaderMenu  setOpenDrawer={setOpenDrawer}/>
        </Wrapper>
      </Component>
      <InfoDrawer open = {openDrawer} setOpen={setOpenDrawer}/>
    </>
  )
}

export default Header
