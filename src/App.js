import './App.css';
import Main from './Pages/Main/Main';
import Home from './Pages/Home/Home';
import AOS from 'aos';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProjectDetails from './Pages/ProjectDetails/ProjectDetails';
// import Blogs from './Pages/Blogs/Blogs';
import Broken from './Pages/Broken/Broken';
import Payoneer from './Pages/Payoneer';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/project-details/:id",
          element: <ProjectDetails></ProjectDetails>
        },
        {
          path: "/payoneer",
          element: <Payoneer></Payoneer>
        },
        {
          path: "*",
          element: <Broken></Broken>
        }
      ]
    }
  ]);
  AOS.init();
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
