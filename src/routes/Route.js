import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Quiz from "../components/Quiz";
import SingleTopic from "../components/Quiz";
import Topics from "../components/Topics";
import Main from "../layouts/Main";
import { getQuiz } from "../loader/getQuiz";
import { getQuizTopic } from "../loader/getQuizTopic";

export const route = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => getQuizTopic()
      },
      {
        path: 'topics',
        element: <div>Topics</div>,
      },
      {
        path: 'quiz/:id',
        element: <Quiz></Quiz>,
        loader: ({ params }) => getQuiz(params.id)
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