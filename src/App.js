import Login from './Routes/Login/login'
import Register from './Routes/Registration/register';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



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
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
