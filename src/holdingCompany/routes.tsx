import HomePage from "./HomePage";
import BlankLayout from "./shared/BlankLayout";

const routes = [
  {
    path: "/",
    element: <BlankLayout />,
    children: [{ path: "/", element: <HomePage /> }],
  },
];

export default routes;
