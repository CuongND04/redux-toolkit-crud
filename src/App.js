import "./App.css";
import Create from "./components/Create";
import Nav from "./components/Nav";
import Read from "./components/Read";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    { path: "/create", element: <Create /> },
    { path: "/", element: <Read /> },
  ]);
  return (
    <div className="App">
      <Nav />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
