import React from 'react'

const NumbersTable = ({limit}) => {
    let squares = []
    for(let i=0; i<limit; i++) {
        if (i%2 === 0) {
        squares.push({val: i + 1, color:'white'})
    } else {
        squares.push({val: i + 1, color:'red'})
    }
    }
    return squares.map(n => <div style={{
        height: 50,
        width: 50,
        backgroundColor: n.color
    }}>{n.val}</div>)
}

export default NumbersTable