import { useContext, useEffect, useState } from 'react';

import { styled, Box, Typography } from "@mui/material";

import { AccountContext } from '../../context/AccountProvider';

import { setConversation } from '../../service/api'

const Component = styled(Box)`
    height: 45px;
    display: flex;
    padding: 13px 0;
    cursor: pointer;
`;
const Image = styled('img') ({
  width: 50,
  height: 50,
  objectFit: 'cover',
  borderRadius: '50%',
  padding: '0 14px'
});


const Convers = ({ user }) => {

  const { setPerson, account } = useContext(AccountContext);

  const getUser = async () => {
    setPerson(user);
    await setConversation({ senderId: account.sub, receiverId : user.sub});
}

  return (
    <Component onClick={() => getUser()}>
      <Box>
        <Image src={user.picture} alt='profile' />
      </Box> 
      <Box>
        <Typography>{user.name}</Typography>
      </Box> 
    </Component>
  )
}

export default Convers
