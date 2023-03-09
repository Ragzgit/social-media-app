import Login from './Routes/Login/login'
import Register from './Routes/Registration/register';
import Navbar from './Components/Navbar/navbar';
import Leftbar from './Components/Leftside/leftbar';
import Rightbar from './Components/Rightside/rightbar';
import Home from './Routes/Home/home';
import Profile from './Routes/UserProfile/profile';
import "./style.scss";
import { DarkModeContext } from "./context/viewModeContext";
import { AuthContext } from './context/authContext';
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import { useContext } from 'react';


function App() {
  const { darkMode } = useContext(DarkModeContext);
  const {currentUser} = useContext(AuthContext);
  const Layout = () => (
    <div className={`theme-${darkMode ? "dark" : "light"}`}>
      <Navbar />
      <div style={{display: "flex"}}>
        <Leftbar />
        <div style={{ flex: 6 }}>
            <Outlet />
        </div>
        <Rightbar />
      </div>
    </div>
  )

  const ProtectedLogin = ({children}) => {
    if(!currentUser){
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
      element: <ProtectedLogin> <Layout /> </ProtectedLogin>,
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
