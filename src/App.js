import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greetings1={"PERROS"} greetings2={"GATOS"} greetings3={"OTRAS MASCOTAS"}/>
    </div>
  );
}

export default App;
