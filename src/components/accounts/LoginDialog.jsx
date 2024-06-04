import { Box, Dialog, List, ListItem, Typography, styled } from '@mui/material'
import { qrCodeImage } from '../../constants/data.js'
import { useContext } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode'
import { AccountContext } from '../../context/AccountProvider'
import { addUser } from '../../service/api.js';

const dialogStyle = {
   height:'90%',
   marginTop: '10%',
   width:'65%',
   maxWidth:'100%',
   maxHeight:'100%',
   boxShadow:'none',
   overflow:'hidden'
}

const Component = styled(Box)`
display: flex;
`

const Container = styled(Box)`
padding: 56px 0px 56px 56px;
`
const QrImg = styled('img')`
height:260px;
width:260px;
margin:50px 0 0 50px;
`

const ListsStyle = styled(ListItem)`
    padding: 0;
    margin: 15px;
    font-size:18px;
    line-height: 30px;
    color: #4a4a4a;
`
const Title = styled(Typography)`
font-size: 26px;
color: #525252;
font-wight: 300;
font-family: inherit; 
margin-bottom: 26px;
`
const LoginDialog = () => {

  const { setAccount } = useContext(AccountContext);

  const onLoginSuccess = async (res) =>{
    const decoded = jwt_decode(res.credential);
    setAccount(decoded); 
    await addUser(decoded);
    // console.log(decoded);
  }
  const onLoginError = (res) =>{
    console.log("login failed" ,res)
  }
  return (
    <>
      <Dialog open={true}
      PaperProps={{sx:dialogStyle}}
      hideBackdrop={true}
      >
          <Component>
            <Container>
              <Title>Use WhatsApp On Your Computer</Title>
              <List>
                <ListsStyle>1. Open WhatsApp on your phone</ListsStyle>
                <ListsStyle>2. Tap Menu or Settings and select Linked Device</ListsStyle>
                <ListsStyle>3. Tap on Link a device</ListsStyle>
                <ListsStyle>4. Point your phone to this screen to capture the QR code</ListsStyle>
              </List>
            </Container>
            <Box style={{position:'relative'}}>
              <QrImg src={qrCodeImage} alt='qr-code'/>
              <Box style={{position:'absolute',top:'40%', transform: 'translate(40%)'}}>
              <GoogleLogin
                onSuccess={onLoginSuccess}
                onError={onLoginError}
              /></Box>
            </Box>
          </Component>
      </Dialog>
    </>
  )
}

export default LoginDialog
