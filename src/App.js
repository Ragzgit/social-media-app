import Login from './Routes/Login/login'
import Register from './Routes/Registration/register';
import Navbar from './Components/Navbar/navbar';
import Leftbar from './Components/Leftside/leftbar';
import Rightbar from './Components/Rightside/rightbar';
import Home from './Routes/Home/home';
import Profile from './Routes/UserProfile/profile';
import "./style.scss";

import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";

const Layout = () => (
  <div className='theme-light'>
    <Navbar />
    <div style={{display: "flex"}}>
      <Leftbar />
      <Outlet />
      <Rightbar />
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

function App() {
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
