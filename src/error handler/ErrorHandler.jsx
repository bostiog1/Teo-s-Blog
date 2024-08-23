import { useSelector } from "react-redux";
import ErrorPage from "./ErrorPage";

const ErrorHandler = ({ children }) => {
  const error = useSelector((state) => state.posts.error);

  if (error) {
    return <ErrorPage error={error} />;
  }

  return children;
};

export default ErrorHandler;
