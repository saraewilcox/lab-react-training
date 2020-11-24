import React from 'react';

function IdCard(props) {
  return (
    <div className="IdCard">
      <img src={props.picture} alt=""/>
      <div>
        <strong>First Name</strong>: {props.firstName} <br/>
        <strong>Last Name</strong>: {props.lastName} <br/>
        <strong>Gender</strong>: {props.gender} <br/>
        <strong>Height</strong>: {props.height}cm <br/>
        <strong>Birth</strong>: {props.birth.toDateString()} <br/>
      </div>
    </div>
  )
}

export default IdCard