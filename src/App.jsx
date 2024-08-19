import { RouterProvider } from "react-router-dom";
// import PostProvider from "./context/PostProvider";
import { router } from "./routing/router";
import { Provider } from "react-redux";
import { store } from './redux/store';

function App() {
  return (
    <main>
      {/* <PostProvider> */}
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
      {/* </PostProvider> */}
    </main>
  );
}

export default App;
