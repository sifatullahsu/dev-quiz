import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Topics from "../components/Topics";
import Main from "../layouts/Main";
import { QuizTopic } from "../loader/QuizTopic";

export const route = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: QuizTopic
      },
      {
        path: 'topics',
        element: <div>Topics</div>,
      },
      {
        path: 'topics/:id',
        element: <div>Singe Topic</div>,
        loader: ({ params }) => console.log(params)
      },
      {
        path: 'blog',
        element: <Topics></Topics>
      },
      {
        path: '*',
        element: <div>404 ERROR</div>
      }
    ]
  }
]);