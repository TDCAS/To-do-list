import React from "react";
import { FaEdit, FaWindowClose } from "react-icons/fa"

import "./tarefas.css"

export default function Tarefas({tarefas,handleEdit,handleDelete}:any) {
    return (
        <ul className="tarefas">
        {tarefas.map((tarefa:string,index:string) => (
            <li key={tarefa}>{tarefa}<span>
                <FaEdit onClick={(e:any)=> handleEdit(e,index)} className="edit"/>
                <FaWindowClose onClick={(e:any)=> handleDelete(e,index)} className="delete"/>
                </span></li>
        ))}
    </ul>
    )
}