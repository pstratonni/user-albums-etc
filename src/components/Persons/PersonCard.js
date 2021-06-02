import React from 'react'
import {useHistory} from 'react-router-dom'

const PersonCard=({person})=>{
    let history=useHistory()
    const clickHandle=event=>{
        event.preventDefault()
        history.push(`/persons/${person.id}`)
    }
    return(
        <div className="col-6 col-sm-4 col-md-3">
            <div className="card">
                <img src={person.avatar} className="card-img-top" alt="{person.fName} {person.lName}" />
                    <div className="card-body">
                        <h5 className="card-title">{person.fName} {person.lName}</h5>
                        <a href="#" onClick={clickHandle} className="btn btn-primary">Open profile</a>
                    </div>
            </div>
        </div>
    )
}
export default PersonCard