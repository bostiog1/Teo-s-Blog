import { RouterProvider } from "react-router-dom";
// import PostProvider from "./context/PostProvider";
import { router } from "./routing/router";
import { Provider, useSelector } from "react-redux";
import { store } from "./redux/store";
import ErrorPage from "./error handler/ErrorPage";
import ErrorHandler from "./error handler/ErrorHandler";

function App() {
  return (
    <Provider store={store}>
      <ErrorHandler>
        <RouterProvider router={router} />
      </ErrorHandler>
    </Provider>
  );
}

export default App;
