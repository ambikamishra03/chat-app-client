import MoreVertIcon from "@mui/icons-material/MoreVert";
import { styled } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

const MenuOption = styled(MenuItem)`
 font-size: 15px;
 padding:15px 65px 8px 30px;
 color:#4a4a4a;
`
const HeaderMenu = ({ setOpenDrawer }) => {

    const [open, setOpen] = useState(null);

    const handleClose = () =>{
        setOpen(null);
    }
    const handleClick = (e) =>{
        setOpen(e.currentTarget);
    }
  return (
    <>
      <MoreVertIcon  onClick={handleClick}/>
      <Menu
        anchorEl={open}
        open={open}
        keepMounted
        onClose={handleClose}
        getContentAnchorE1={null}
        anchorOrigin={{
            vertical:'bottom',
            horizontal:'center'
        }}
        transformOrigin={{
            vertical:'top',
            horizontal:'right'
        }}
      >
        <MenuOption onClick={() => { handleClose(); setOpenDrawer(true); }}>Profile</MenuOption>
        <MenuOption onClick={handleClose}>New Chat</MenuOption>
        <MenuOption onClick={handleClose}>Starred Massages</MenuOption>
        <MenuOption onClick={handleClose}>Settings</MenuOption>
        <MenuOption onClick={handleClose}>Select Chats</MenuOption>
        <MenuOption onClick={handleClose}>Logout</MenuOption>
      </Menu>
    </>
  );
};

export default HeaderMenu;
