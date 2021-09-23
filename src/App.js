import GlobalStyle from "../src/styles/globalStyle";
import { Slides } from "./components/Slides.js";
import { About } from "./components/About";

function App() {
  return (
    <>
      <GlobalStyle />
      <main>
        <Slides />
        <About />
      </main>
    </>
  );
}

export default App;
