import { createBrowserRouter } from "react-router-dom";
import Blog from "./Blog";
import Details from "./Details";
import Form from "./Form";
import PageNotFound from "./PageNotFound";
import ErrorPage from "./ErrorPage";

export const router = createBrowserRouter([
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
