import { useState } from "react"

const Carousel = ({images}: {images: any}) => {

    const [position, setPosition] = useState(0);

    return(
        <div className="h-200 overflow-hidden bg-red-100" style={{width: (100*images.length) + "vw"}}>
            <div className="h-full transform flex flex-row" style={{width: (100*images.length) + "vw ", transform: 'translate(-0%)'}}>
                {images.map(i => <CarouselItem img={i} />)}
            </div>
        </div>
    )
}

export default Carousel;

export const CarouselItem = ({img}: {img: any}) => {
    return(
        <div className="flex-grow h-full bg-cover bg-center bg-blue-100" style={{ backgroundImage: `url(${img})`, width: '100vw' }}>
            
        </div>
    )
}

const CarouselIndicators = ({position, numSlides}: {position: number, numSlides: number}) => {

    var bubbles = Element[numSlides];
    for (let bubble = 0; bubble < numSlides; bubble++) {
        bubbles.push(<div className={(position === bubble ? "bg-white" : "bg-transparent") + " border-2 border-white w-8 h-8 rounded-full"}></div>)
    }

    return(
        <div className="flex flex-row">{bubbles}</div>
    )
}