import React, { useState } from "react"
import {toast} from "react-toastify"

export default function AddButton() {
    const [count, setCount] = useState (1)
    const stock = 3

    const OnAdd = () => {
        if (count < stock) {
            setCount(count + 1)
        }
        
    }

    const OnDecrease = () => {
            if (count > 1) {
                setCount(count - 1)
            }
        }
    
    const onSubmit = () => {
        toast.success(`Se agregaron ${count} unidades al carrito`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    const AddButton = ({handleOnSubmit}) => {
        return (
            <button className="addButton" onClick={handleOnSubmit}>Agregar al carrito</button>
        );
    };

    const DecreaseButton = ({handleOnClick}) => {
        return (
        <button className="decreaseButton" onClick={handleOnClick}>-</button>
        );
    };

    const IncreaseButton = ({handleOnClick}) => {
        return (
        <button className="increaseButton" onClick={handleOnClick}>+</button>
        );
    };
    
    return (
        <div className="addButtonContainer">
            <IncreaseButton handleOnClick={OnAdd}/>
            <span className="count">{count}</span>
            <DecreaseButton handleOnClick={OnDecrease}/>
            <AddButton  handleOnSubmit={onSubmit}/>
        </div>
        
    );
}