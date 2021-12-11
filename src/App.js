import "./App.css";
import GridLayout2 from "./components/GridLayout2";
import ParticleBackground from "./components/ParticleBackground";
import { Reacteroids } from "./components/Reacteroids/Reacteroids";

function App() {
  return (
    <div className="App">
      <ParticleBackground />
      <GridLayout2 />
      <Reacteroids />
    </div>
  );
}

export default App;
