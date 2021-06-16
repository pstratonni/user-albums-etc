import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const AlbumCard = ({ album, photo }) => {

 const person=useSelector((state)=>{
   const idx=state.persons.list.findIndex(p=>p.id===album.personId)
   if(idx===-1)return{
     lName:'Deleted person',
     fName:''
   }
   return state.persons.list[idx]
 })
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
