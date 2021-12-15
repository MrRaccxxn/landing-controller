import MisionVision from "./aboutUs/MisionVision";
import HomePage from "./HomePage";
import BlankLayout from "./shared/BlankLayout";
import OrganizationStructure from "./aboutUs/OrganizationStructure";
import FinancialStatements from "./aboutUs/FinancialStatements";
import BancoFassil from "./companies/BancoFassil";
import ScInvesments from "./companies/ScInvesments";
import ScSecurities from "./companies/ScSecurities";
import ScLifeInsurance from "./companies/ScLifeInsurance";
import Contact from "./Contact";

const routes = [
  {
    path: "/",
    element: <BlankLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/mision-vision-y-valores", element: <MisionVision /> },
      { path: "/estructura-de-scfg", element: <OrganizationStructure /> },
      { path: "/estados-financieros", element: <FinancialStatements /> },

      { path: "/banco-fassil", element: <BancoFassil /> },
      { path: "/santa-cruz-investments-safi", element: <ScInvesments /> },
      { path: "/santa-cruz-securities", element: <ScSecurities /> },
      { path: "/santa-cruz-seguros-vida-y-salud", element: <ScLifeInsurance /> },

      { path: "/contacto", element: <Contact /> },
    ],
  },
];

export default routes;
