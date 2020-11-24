import React from 'react';

function DriverCard(props) {
  return (
    <div>
      <div>
        <div className="name">{props.name}</div>
        <div className="rating">{props.rating}</div>
        <div className="car">{props.car.model} {props.car.licensePlate}</div>
      </div>
    </div>
  )
}

export default DriverCard