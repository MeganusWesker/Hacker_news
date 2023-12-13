import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import Loader from "./components/Loader";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/loader",
    element: <Loader/>
  },
  {
    path: "/postDetail/:id",
    element: <PostDetail/>
  },
]);


function App() {
 
  return (
    <RouterProvider router={router} />
  )
}

export default App
