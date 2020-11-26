import React from 'react';

// function Rating(props) {
//     return (
//         <div className="Rating">
//           {Rating} {props.children}
//         </div>
//       )
// }

const Rating = props => {
  const number = Math.round(Number(props.children));
  return <div className="ratings">{'★'.repeat(number) + '☆'.repeat(5 - number)}</div>;
};

export default Rating