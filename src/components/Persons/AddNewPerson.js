import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import {ADD_NEW_PERSON} from "../../store/typesList";


const AddNewPerson=({addNewPerson})=>{
const [formData, setFormData]=useState({
    fName: '',
    lName: '',
    age: '',
    email: '',
    phone: '',
    avatar: ''
})


let history=useHistory()

const changeFieldHandle=event=>{
    setFormData({...formData, [event.target.name]:event.target.value})
}

const submitHandle=event=>{
    event.preventDefault();
    if( !formData.fName.trim()||!formData.lName.trim())return 
    addNewPerson(formData)
    history.push('/persons')
}

return (
    <div className="container">
        <div className="w-50 mx-auto">
            <form onSubmit={submitHandle}>
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" className="form-control" name="fName" onChange={changeFieldHandle}/>
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" className="form-control" name="lName" onChange={changeFieldHandle}/>
                </div>
                <div className="form-group">
                    <label>Age</label>
                    <input type="text" className="form-control" name="age" onChange={changeFieldHandle}/>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" name="email" onChange={changeFieldHandle}/>
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input type="text" className="form-control" name="phone" onChange={changeFieldHandle}/>
                </div>
                <div className="form-group mb-2">
                    <label>Avatar</label>
                    <input type="text" className="form-control" name="avatar" onChange={changeFieldHandle}/>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary w-100">Add</button>
                </div>
            </form>
        </div>
    </div>
)

}
const mapDipatchToProps=dispatch=>{
    return{
        addNewPerson:person=>dispatch({type:ADD_NEW_PERSON, payload:person})
    }
}
export default connect(null,mapDipatchToProps)(AddNewPerson)