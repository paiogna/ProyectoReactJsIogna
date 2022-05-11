import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer"
//import {products} from "./data/productos.js"

function App() {
  

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greetings1={"PERROS"} greetings2={"GATOS"} greetings3={"OTRAS MASCOTAS"}/>
      <Footer />
    </div>
  );
}

export default App;
