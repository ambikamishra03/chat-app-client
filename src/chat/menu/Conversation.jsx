// import React, { useEffect , useState , useContext} from 'react'
// import { getUsers } from '../../service/api'
// import { Box , Divider, styled} from '@mui/material';
// import Convers from './Convers';
// import {AccountContext } from '../../context/AccountProvider';

// const Component = styled(Box)`
//     overflow: overlay;
//     height: 81vh;
// `;

// const StyledDivider = styled(Divider)`
//     margin: 0 0 0 70px;
//     background-color: #e9edef;
//     opacity: .6;
// `;

// const Conversation = () => {

//     const [users, setUsers] = useState([]);
//     const { account } = useContext(AccountContext);

//     useEffect(()=>{
//         const fetctData = async () =>{
//      const response = await getUsers();
//      setUsers(response);
//         }
//         fetctData();
//     })

//   return ( 
//     <Component>
//       {
//         users.map(user => (
//           user.sub !== account.sub && 
//           <>
//             <Convers user={user} />
//             <StyledDivider />
 
//               {/* {
//                 users.length !== (index + 1)  &&   <StyledDivider />
//               } */}
//             </>
//         ))
//       }
//     </Component>
//   )
// }

// export default Conversation




import React, { useEffect, useState, useContext } from 'react';
import { getUsers } from '../../service/api';
import { Box, Divider, styled } from '@mui/material';
import Convers from './Convers';
import { AccountContext } from '../../context/AccountProvider';

const Component = styled(Box)`
  overflow: overlay;
  height: 81vh;
`;

const StyledDivider = styled(Divider)`
  margin: 0 0 0 70px;
  background-color: #e9edef;
  opacity: 0.6;
`;

const Conversation = ({ text }) => {
  const [users, setUsers] = useState([]);
  const { account, socket, setActiveUsers} = useContext(AccountContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUsers();
        const filterData = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
        setUsers(filterData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchData();
  }, [text]);

  useEffect(()=>{
   socket.current.emit('addUser', account)
   socket.current.on('getUsers', users => {
    setActiveUsers(users);
   })
  },[account])

  return (
    <Component>
      {Array.isArray(users) &&
        users.map((user) => (
          user.sub !== account.sub && (
            <React.Fragment key={user.id}>
              <Convers user={user} />
              <StyledDivider />
            </React.Fragment>
          )
        ))}
    </Component>
  );
};

export default Conversation;
