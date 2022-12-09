import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { HomePage } from './pages/home';
import { LoginPage } from './pages/login';
import { Forgot } from './pages/forgot/forgot';
import { ForgotPassword } from './pages/forgot/forgotpassword';
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/forgot",
    element: <Forgot/>,
  }, {
    path: "/forgotpassword",
    element: <ForgotPassword/>,
  },
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
