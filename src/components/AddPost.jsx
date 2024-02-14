import {
  Add,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";

const btnWidth = "50";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  marginBottom: "20px",
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

const AddPost = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    width: "400px",
    height: "310px",
    backgroundColor: "background.paper",
    color: "text.primary",
    p: 3,
    borderRadius: 2,
  };

  return (
    <>
      <Tooltip title="Add Post" onClick={handleOpen}>
        <Fab
          color="primary"
          aria-label="add"
          sx={{
            position: "fixed",
            bottom: 30,
            left: { xs: `calc(50% - ${btnWidth / 2}px)`, md: 30 },
            width: `${btnWidth}px`,
            height: `${btnWidth}px`,
          }}
        >
          <Add
            sx={{
              width: "60%",
              height: "60%",
            }}
          />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            color={"gray"}
            textAlign={"center"}
          >
            Create post
          </Typography>
          <UserBox>
            {/* <Avatar
            alt="Cindy Baker"
            src="https://mui.com/static/images/avatar/3.jpg"
            sx={{ width: 32, height: 32 }}
            onClick={handleClick}
          /> */}
            <UserAvatar />
            <Typography variant="span" fontWeight={500}>
              Cindy Baker
            </Typography>
          </UserBox>
          <TextField
            id="standard-multiline-static"
            multiline
            rows={3}
            // defaultValue="Default Value"
            placeholder="What's on your mind."
            variant="standard"
            fullWidth
            // sx={{ width: "100%" }}
          />
          <Stack direction={"row"} gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="Basic button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};
export default AddPost;
