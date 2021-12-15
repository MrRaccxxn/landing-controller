import "./App.css";
import routes from "./holdingCompany/routes";
import { useRoutes } from "react-router-dom";

function App() {
  const routing = useRoutes(routes);

  return <> {routing}</>;
}

export default App;
