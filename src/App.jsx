import React from 'react';
import Root from './routes/root.jsx';
import ErrorPage from './error-page.jsx';
import LiveRates from './routes/liveRates';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";

const App = () => {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Root />,
          errorElement: <ErrorPage />,
        },
        {
          path: '/liveRates',
          element: <LiveRates />
        }
      ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App