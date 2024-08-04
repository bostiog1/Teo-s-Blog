import { RouterProvider } from "react-router-dom";
import { router } from "./router"; // Adjust the import path as needed

function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
