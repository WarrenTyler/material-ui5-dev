import { Button, styled, Typography } from "@mui/material";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Data from "./pages/Data";
import Contact from "./pages/Contact";

function App() {
  const BlueButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.otherColor.main,
    color: "white",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    "&:hover": {
      backgroundColor: "lightblue",
    },
    "&:disabled": {
      backgroundColor: "grey",
      color: "white",
    },
  }));

  const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="/data" element={<Data />} />
      <Route path="/contact" element={<Contact />} />
    </Route>)
  );

  const router2 = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "data",
          element: <Data />,
        },
      ],
    },
  ]);

  return (
    <div>
      {/* <RouterProvider router={router2} /> */}
      <Typography>App</Typography>
      <BlueButton>Blue Button</BlueButton>
      <BlueButton disabled>Blue Button disabled</BlueButton>
    </div>
  );
}
export default App;
