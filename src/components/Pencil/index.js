import React from 'react'
import edit from '../../assets/edit-24.png';

const Pencil = ({handleClick}) => {
  return (
    <div className="app__h1-wrapper">
      <img className="app__edit active" src={edit} onClick={handleClick} />
    </div>
  )
}

export default Pencil