  import { createBrowserRouter,RouterProvider } from "react-router-dom";
  import Home from "./pages/home";
  import Page404 from "./components/page404";
  import Header from "./components/header";
  import Content from "./components/content";
  import Footer from "./components/footer";

  const routes=createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/home',
      element: <Home/>
    },
    {
      path:'*',
      element:<Page404/>
    }
  ])


  export default function App() {
    return (
      <RouterProvider router={routes}/>
    );
  }
