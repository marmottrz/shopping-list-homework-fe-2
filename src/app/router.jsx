import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";

import ListsPage from "../routes/Lists/index.jsx";
import ListDetailPage from "../routes/ListDetail/index.jsx";
import ArchivedPage from "../routes/Archived/index.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <ListsPage /> },
      { path: "lists", element: <ListsPage /> },
      { path: "list/:id", element: <ListDetailPage /> },
      { path: "archived", element: <ArchivedPage /> },
    ],
  },
]);

