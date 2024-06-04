import { Box, Typography, styled, InputBase } from '@mui/material';
import { useContext, useState } from 'react';
import { AccountContext } from '../../context/AccountProvider';
import CreateIcon from '@mui/icons-material/Create';
import CheckIcon from '@mui/icons-material/Check';

const Image = styled('img')({
  height: 180,
  width: 180,
  borderRadius: '50%',
  padding: '30px 0',
});

const ImageContainer = styled(Box)`
  display: flex;
  justify-content: center;
`;

const DescriptionContainer = styled(Box)`
  padding: 15px 20px 26px 28px;
   font-size:13px;
  color:#8696a0;
`;

const Container = styled(Box)`
  background: #fff;
  padding: 12px 30px 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  & :first-child {
    font-size: 13px;
    color: #009688;
    font-weight: 300;
    padding: 2px;
  }
`;

const InputChange = styled(Box)`
  display: flex;
  align-items: center;
  & :first-child {
    font-size: 16px;
    color: #4a4a4a;
    font-weight: 400;
    margin: 14px 0;
  }
  & :last-child {
    font-size: 18px;
    color: #4a4a4a;
    margin-left: auto;
  }
`;

const Profile = () => {
  const { account } = useContext(AccountContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(account.name);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleNameChange = (e) => {
    setEditedName(e.currentTarget.value);
  };

  return (
    <>
      <ImageContainer>
        <Image src={account.picture} alt="profile" />
      </ImageContainer>
      <Container>
        <Typography>Your Name</Typography>
        <InputChange>
          {isEditing ? (
            <>
              <InputBase
                value={editedName}
                onChange={handleNameChange}
                autoFocus
              />
              <CheckIcon onClick={handleSaveClick}/>
            </>
          ) : (
            <>
              <Typography>{editedName}</Typography>
              <CreateIcon onClick={handleEditClick} />
            </>
          )}
        </InputChange>
      </Container>
      <DescriptionContainer>
        <Typography>
        This is not your username or pin. This name will be visible to your WhatsApp contacts.
        </Typography>
      </DescriptionContainer>
      <Container>
      <Typography>About</Typography>
      <InputChange>
          {isEditing ? (
            <>
              <InputBase
                value="Online"
                onChange={handleNameChange}
                autoFocus
              />
              <CheckIcon onClick={handleSaveClick}/>
            </>
          ) : (
            <>
              <Typography>Online</Typography>
              <CreateIcon onClick={handleEditClick} />
            </>
          )}
        </InputChange>

      {/* <Typography>Hey! There i am using whatsapp</Typography> */}
      </Container>
    </>
  );
};

export default Profile;

