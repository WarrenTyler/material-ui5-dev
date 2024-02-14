import { Link, Outlet } from "react-router-dom";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import { CssBaseline } from "@mui/material";

const Root = () => {
  return (
    <>
      <CssBaseline />
      <ResponsiveAppBar />
      {/* <div>
        <Link to="/">Home</Link>
        <Link to="data">Data</Link>
        <Link to="contact">Contact</Link>
      </div> */}
      <div>
        <Outlet />
      </div>
      
    </>
  );
};
export default Root;
