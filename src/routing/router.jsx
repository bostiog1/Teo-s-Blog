import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import Details from "../components/Details";
import Form from "../components/Form";
import ErrorPage from "../components/ErrorPage";
import PageNotFound from "../components/PageNotFound";
import Home from "../components/Home";
import UpdatePost from "../components/UpdatePost";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, // Homepage displaying blogs with navbar
  },
  // {
  //   path: "/",
  //   element: <Blog />,
  // },
  {
    path: "/details/:id",
    element: <Details />,
  },
  {
    path: "/update/:id",
    element: <UpdatePost />,
  },
  {
    path: "/form",
    element: <Form />,
  },
  {
    path: "/error",
    element: <ErrorPage />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);
