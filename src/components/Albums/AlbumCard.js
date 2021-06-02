import React, { useContext } from "react";
import { GlobalContext } from "../App";
import { useHistory } from "react-router-dom";

const AlbumCard = ({ album, photo }) => {
  const { getPersonById } = useContext(GlobalContext);
  const person = getPersonById(album.personId);
  let history = useHistory();
  const clickHandle = (event) => {
    event.preventDefault();
    history.push(`/albums/${album.id}`);
  };
  return(
      <div className='col-6 col-sm-4 col-md-3'>
          <div className='card cur-pointer' onClick={clickHandle}>
              <img src={photo.src} alt={album.title}/>
              <div className='card-body'>
                  <h3 className='card-title'>{album.title}</h3>
                  <p className='card-text'>{person.lName} {person.fName[0].toUpperCase()}.</p>
              </div>
          </div>
      </div>
  )
};
export default AlbumCard;
