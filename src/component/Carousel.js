import React, {useState} from 'react'

const Carousel = ({imgs}) => {
    const [image, setImage] = useState(imgs[0])

    function left() {
        const now = imgs.indexOf(image)
        if (now == 0) {
            setImage(imgs[imgs.length - 1])
        } else {
            setImage(imgs[now - 1])
    }
    }

    function right() {
        const now = imgs.indexOf(image)
        if (now == imgs.length - 1) {
            setImage(imgs[0])
        } else {
            setImage(imgs[now + 1])
    }
    }

    return (
        <div>
            <img src={image} alt='carousel-pic' />
            <button onClick={left}>Left</button>
            <button onClick={right}>Right</button>
        </div>
    )
}

export default Carousel