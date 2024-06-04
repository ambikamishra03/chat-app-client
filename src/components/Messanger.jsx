import React from 'react'
import LoginDialog from './accounts/LoginDialog'
import { useContext } from 'react';
import { AccountContext } from '../context/AccountProvider'

import { AppBar, Toolbar, styled, Box } from '@mui/material'
import ChatDialog from '../chat/ChatDialog'


const HeaderBox = styled(Box)`
height: 100vh;
background-color: #dcdcdc;
box-shadow:none;
`

const LoginHeader = styled(AppBar)`
height: 210px;
background-color: #00bb82;
box-shadow:none;
`

const ChatHeader = styled(AppBar)`
height: 125px;
background-color: #00ab82;
box-shadow:none;
`


const Messanger = () => {
  const { account } = useContext(AccountContext);

  return (
    <HeaderBox>
    {
      account ? 
      <>
    <ChatHeader>
        <Toolbar>
        </Toolbar>
     </ChatHeader>  
     <ChatDialog/> 
      </>   
      :
      <>
    <LoginHeader>
        <Toolbar>
        </Toolbar>
     </LoginHeader>  
      <LoginDialog/>
   
      </>
    }
    </HeaderBox>
    
  )
}

export default Messanger
