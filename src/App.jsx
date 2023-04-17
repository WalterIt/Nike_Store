import Hero from "./components/Hero";
import { heroapi } from "./data/data.js";

const App = () => {
  return (
    <>
      <main>
        <Hero heroapi={heroapi} />
      </main>
    </>
  );
};

export default App;
