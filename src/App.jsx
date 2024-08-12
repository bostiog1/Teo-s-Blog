import { RouterProvider } from "react-router-dom";
import { router } from "./router"; // Adjust the import path as needed
import { PostContext } from "./context/PostContext";

function App() {
  return (
    <main>
      <PostContext.Provider>
        <RouterProvider router={router} />
      </PostContext.Provider>
    </main>
  );
}

export default App;
