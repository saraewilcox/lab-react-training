import React from 'react';

function CreditCard(props) {
  return (
    <div>
      <div>
        <div className="type">{props.type}</div>
        <div className="number">{props.number}</div>
        <div className="expire">{props.expirationMonth}/{props.expirationYear} {props.bank}</div>
        <div className="owner">{props.owner}</div>
      </div>
    </div>
  )
}

export default CreditCard