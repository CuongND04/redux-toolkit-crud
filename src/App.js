import "./App.css";
import Create from "./components/Create";
import Nav from "./components/Nav";
import Read from "./components/Read";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Update from "./components/Update";
function App() {
  const router = createBrowserRouter([
    { path: "/create", element: <Create /> },
    { path: "/", element: <Read /> },
    { path: "/edit/:id", element: <Update /> },
  ]);
  return (
    <div className="App">
      <Nav />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
