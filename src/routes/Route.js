import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import Error from "../components/Error";
import Home from "../components/Home";
import Quiz from "../components/Quiz";
import Statistics from "../components/Statistics";
import Topics from "../components/Topics";
import Main from "../layouts/Main";
import { getQuiz } from "../loader/getQuiz";
import { getQuizTopic } from "../loader/getQuizTopic";

export const route = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => getQuizTopic()
      },
      {
        path: 'topics',
        element: <Topics></Topics>,
        loader: () => getQuizTopic()
      },
      {
        path: 'quiz/:id',
        element: <Quiz></Quiz>,
        loader: ({ params }) => getQuiz(params.id)
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>,
        loader: () => getQuizTopic()
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: '/*',
        element: <Error></Error>
      }
    ]
  }
]);