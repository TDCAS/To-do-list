import React from "react";
import {FaPlus} from "react-icons/fa"
import "./Form.css"

export default function Form({handleSubmit,handleChange,novaTarefa}:any) {
    return (
        
        <form action="#" onSubmit={handleSubmit} className="form">
            <div className="">
            <input type="text"
                onChange={handleChange}
                value={novaTarefa}
            />
 

            </div>

            <button type="submit">
                <FaPlus /></button>
        </form>
    )
}
