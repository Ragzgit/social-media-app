import Login from './Routes/Login/login'
import Register from './Routes/Registration/register';
import Navbar from './Components/Navbar/navbar';
import Leftbar from './Components/Leftside/leftbar';
import Rightbar from './Components/Rightside/rightbar';
import Home from './Routes/Home/home';
import Profile from './Routes/UserProfile/profile';
import "./style.scss";
import { DarkModeContext } from "./context/viewModeContext";

import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import { useContext } from 'react';


function App() {
  const { darkMode } = useContext(DarkModeContext);

  const Layout = () => (
    <div className={`theme-${darkMode ? "dark" : "light"}`}>
      <Navbar />
      <div style={{display: "flex"}}>
        {/* <Leftbar /> */}
        <Outlet />
        {/* <Rightbar /> */}
      </div>
    </div>
  )

  const userLoggedIn = true;

  const ProtectedLogin = ({children}) => {
    if(!userLoggedIn){
      return <Navigate to="/login" />;
    }
    return children;
  }

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/",
      element: <ProtectedLogin><Layout /> </ProtectedLogin>,
      children: [{
        path: "/",
        element: <Home />
      }, 
      {
        path: "/profile:id",
        element: <Profile />
      }]

    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
