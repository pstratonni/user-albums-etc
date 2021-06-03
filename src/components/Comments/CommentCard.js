import React from "react";

const CommentCard = ({ personId, body, getPersonById, dateTime }) => {
  const personName = (id) => {
    const person = getPersonById(id);
    return person.lName + " " + person.fName[0];
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
      <h5 className="card-title">{personName(personId)}</h5>
      <p>{renderTime()}</p>
      <p className="card-text">{body}</p>
    </div>
  );
};
export default CommentCard;
