import React from "react";
import RouterComponent from "./Router";
import GlobalStyles from "Components/GlobalStyles";
import { useMediaQuery } from "react-responsive";

function App() {
  const isMobile = useMediaQuery({
    query: "(max-width : 824px)",
  });

  return (
    <div>
      <RouterComponent isMobile={isMobile} />
      <GlobalStyles />
    </div>
  );
}

export default App;
