import { Mail, Notifications, SmartToy } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  color: "black",
  padding: "0 10px",
  width: "40%",
  borderRadius: theme.shape.borderRadius,
}));

const Icons = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
  display: "none",
  gap: "20px",
  alignItems: "center",
}));

const UserBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
  display: "flex",
  gap: "10px",
  alignItems: "center",
}));

const UserAvatar = styled(Avatar)(({ theme }) => ({
  width: "32px",
  height: "32px",
  cursor: "pointer",
}));

UserAvatar.defaultProps = {
  alt: "Cindy Baker",
  src: "https://mui.com/static/images/avatar/3.jpg",
};

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <SmartToy sx={{ display: { xs: "block", sm: "none" } }} />
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          LOGO
        </Typography>
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          {/* <Avatar
            alt="Cindy Baker"
            src="https://mui.com/static/images/avatar/3.jpg"
            sx={{ width: 32, height: 32 }}
            onClick={handleClick}
          /> */}
          <UserAvatar onClick={handleClick} />
        </Icons>
        <UserBox>
          <Typography variant="span">Cindy Baker</Typography>
          {/* <Avatar
            alt="Cindy Baker"
            src="https://mui.com/static/images/avatar/3.jpg"
            sx={{ width: 32, height: 32 }}
            onClick={handleClick}
          /> */}
          <UserAvatar onClick={handleClick} />
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        // anchorOrigin={{
        //   vertical: "bottom",
        //   horizontal: "right",
        // }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
        {/* <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem> */}
      </Menu>
    </AppBar>
  );
};
export default Navbar;
