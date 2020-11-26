import React, {useState} from 'react'

const Dice = () => {
    const dices = ['img/dice1.png', 'img/dice2.png', 'img/dice3.png', 'img/dice4.png', 'img/dice5.png', 'img/dice6.png']
    let random = Math.floor(Math.random() * dices.length)
    const [dice, setDice] = useState(dices[random])
       
    function throwDice() {
        setDice('img/dice-empty.png')
        setTimeout(() => {
            random = Math.floor(Math.random() * dices.length)
            setDice(dices[random])
        }, 1000)
}
    return (
        <div>
            <img height='100' width='100' src={dice} alt='dice-pic' onClick={throwDice} />
        </div>
    )
}

export default Dice