import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";

export const route = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <div>Home</div>
      },
      {
        path: 'blog',
        element: <div>Blog</div>
      },
      {
        path: '*',
        element: <div>404 ERROR</div>
      }
    ]
  }
]);