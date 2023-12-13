import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
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
