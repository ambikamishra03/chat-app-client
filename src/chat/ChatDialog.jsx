
import { Box, Dialog, styled } from '@mui/material'
import React from 'react'
import Menu from './menu/Menu'
import EmptyChat from './empty/EmptyChat'
import ChatBox from './empty/ChatBox'
import { useContext } from 'react';

import { AccountContext } from '../context/AccountProvider';


const Component = styled(Box)`
 display : flex;
`

const LeftComponent = styled(Box)`
 min-width : 451px;
`

const RightComponent = styled(Box)`
 width : 73%;
 min-width: 300px;
 height:100%;
 border-left:1px solid rgba(0,0,0,0.15);
`
const dialogStyle = {
  height:'97%',
  margin: '20px',
  width:'100%',
  borderRadius:0,
  maxWidth:'100%',
  maxHeight:'100%',
  boxShadow:'none',
  overflow:'hidden'
}

const ChatDialog = () => {

  const { person } = useContext(AccountContext);

  return (
    <>
      <Dialog open={true}
      PaperProps={{sx:dialogStyle}}
      hideBackdrop={true}
      maxWidth={'md'}
      >
      <Component>
        <LeftComponent>
        <Menu/>
        </LeftComponent>
        <RightComponent>
        {
          Object.keys(person).length  ? <ChatBox/> : <EmptyChat />
          }
        </RightComponent>
      </Component>
      </Dialog>
      </>
  )
}

export default ChatDialog
