import Item from "../Item/Item"

export default function ItemList ({data =[] }) {
    return (
        <div className="item-list font">
            {data.map((product, index) =>(
                <Item key={index} productId={product.id} productImage={product.image} productTitle={product.title} productPrice={product.price} productStock={product.stock}/>
            ))}
        </div>
    )
}




