
import './App.css'
import {Bkground} from "./components/Bkground/Bkground";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <Bkground/>
      <NavBar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
