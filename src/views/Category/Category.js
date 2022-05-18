import ItemListContainer from "../../components/ItemListContainer/ItemListContainer"
import Footer from "../../components/Footer/Footer"
import { useParams } from "react-router-dom"

export default function Products () {
    const {categoryId} = useParams ();
    return (
        <div>
            <ItemListContainer categoryId={categoryId} />
            <Footer />
        </div>
    )
}