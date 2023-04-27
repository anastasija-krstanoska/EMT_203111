import React from 'react'
import { Link } from 'react-router-dom'

const bookTerm = (props) => {
    return(
        <tr>
            <td>{props.term.name}</td>
            <td>{props.term.category}</td>
            <td>{props.term.author.name + " " + props.term.author.surname}</td>
            <td>{props.term.availableCopies}</td>
            <td className={"text-right"}>
                <Link className={"btn btn-warning m-1"} onClick={()=>props.onMark(props.term.id)}>Mark as Taken</Link>
                <a title={"Delete"} className={"btn btn-danger m-1"} onClick={() => props.onDelete(props.term.id) }>Delete</a>
                <Link className={"btn btn-info m-1"}
                      onClick={() => props.onEdit(props.term.id)}
                      to={`/books/edit/${props.term.id}`}>Edit</Link>

            </td>
        </tr>
    )
}

export default bookTerm;