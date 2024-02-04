// import { Box, Divider, Stack } from "@mui/material";
import { Box, Stack } from "@mui/material";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Box>
    <Navbar />
      <Stack
        direction="row"
        // divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        // justifyContent="space-between"
        sx={{ backgroundColor: "#ddd" }}
      >
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
};
export default App;
