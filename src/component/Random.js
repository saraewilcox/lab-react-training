import React from 'react'

function Random(props) {
  let random = Math.floor(Math.random()*(props.max-props.min))
  return (
    <div>
      Random value between {random}
    </div>
  )
}

export default Random