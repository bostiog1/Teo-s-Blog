import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import Details from "../components/Details";
import Form from "../components/Form";
import ErrorPage from "../components/ErrorPage";
import PageNotFound from "../components/PageNotFound";

export const  router = createBrowserRouter([
  {
    path: "/",
    element: <Blog />,
  },
  {
    path: "/details/:id",
    element: <Details />,
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
