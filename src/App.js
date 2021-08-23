import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Switcher from "./components/Switcher";

function App() {
  return (
    <BrowserRouter>
      <section className="App">
        <Switcher />
      </section>
    </BrowserRouter>
  );
}

export default App;
