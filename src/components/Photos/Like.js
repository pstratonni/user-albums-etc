import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Like = ({
  icons,
  classGreenRed,
  addLike,
  photoId,
  alfa,
  activePerson,
  setAlfa,
  betta,
  setBetta
}) => {
  return (
    <FontAwesomeIcon
      icon={icons}
      className={`${classGreenRed} pointer`}
      onClick={() => {
        addLike(photoId, alfa, activePerson);
        setAlfa(alfa)
        setBetta(!betta)
      }}
    />
  );
};
export default Like;
