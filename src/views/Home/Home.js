import ItemListContainer from "../../components/ItemListContainer/ItemListContainer"
import Footer from "../../components/Footer/Footer"

export default function Home () {
    return (
        <div>
            <div className="homeContainer font" >
                <h1>Bienvenidos a Nuestra Tienda</h1>
                <img src="/img/pet.png" />
                <h2>Aquí encontrarás alimentos para perros de Royal Canin y Eukanuba.</h2> 
            </div>
            <div>
                <ItemListContainer />
            </div>
            <Footer />
        </div>
    )
}