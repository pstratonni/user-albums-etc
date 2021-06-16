import React from "react";
import { useSelector } from "react-redux";

const CommentCard = ({ personId, body, dateTime }) => {
const person=useSelector(state=>{
  const idx=state.persons.list.findIndex(p=>p.id===personId)
  if(idx===-1)return null
  return state.persons.list[idx]
})
  const personName = () => {
    if(person)return person.lName + " " + person.fName[0];
    return 'Deleted Person'
  };
  const renderTime = () => {
    const datePart = new Date(dateTime);
    const date = `${datePart.toLocaleDateString("en-DE", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })}`;
    return date;
  };

  return (
    <div className="card-body">
      <h5 className="card-title">{personName()}</h5>
      <p>{renderTime()}</p>
      <p className="card-text">{body}</p>
    </div>
  );
};
export default CommentCard;
