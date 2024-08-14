import { RouterProvider } from "react-router-dom";
import PostProvider from "./context/PostProvider"; 
import { router } from "./routing/router";

function App() {
  return (
    <main>
      <PostProvider>
        <RouterProvider router={router} />
      </PostProvider>
    </main>
  );
}

export default App;
