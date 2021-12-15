import { Fragment } from "react";
import Slider from "../shared/Slider";

import TextContent from "./components/TextContent";

const HomePage = () => {
  return (
    <Fragment>
      <Slider />
      <TextContent />
    </Fragment>
  );
};

export default HomePage;
