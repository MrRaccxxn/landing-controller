import MisionVision from "./aboutUs/MisionVision";
import HomePage from "./HomePage";
import BlankLayout from "./shared/BlankLayout";
import OrganizationStructure from "./aboutUs/OrganizationStructure";
import FinancialStatements from "./aboutUs/FinancialStatements";

const routes = [
  {
    path: "/",
    element: <BlankLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/mision-vision-y-valores", element: <MisionVision /> },
      { path: "/estructura-de-scfg", element: <OrganizationStructure /> },
      { path: "/estados-financieros", element: <FinancialStatements /> },

      { path: "/  banco-fassil", element: <FinancialStatements /> },
    
    ],
  },
];

export default routes;
