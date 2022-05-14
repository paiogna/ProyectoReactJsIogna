import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  

  return (
    <div className="App">
      <NavBar />
      {/* <ItemListContainer greetings1={"PERROS"} greetings2={"GATOS"} greetings3={"OTRAS MASCOTAS"}/> */}
      <ItemDetailContainer />
      <Footer />
    </div>
  );
}

export default App;
