import { useEffect } from "react";
import { useState } from "react"

const Carousel = ({images}: {images: any}) => {

    const [position, setPosition] = useState(0);
    const [transition, setTransition] = useState(true);

    useEffect(() => {
        setTransition(true);
        if(position < 0) {
            setPosition(images.length - 1);
        }
        if(position === 0 && !transition) {
            setPosition(1);
        }
        if(position >= images.length) {
            setTransition(false);
        }
    }, [position, images.length, transition])

    useEffect(() => {
        setPosition(0);
    }, [transition])

    function advance() {
        setPosition(position + 1)
    }

    function back() {
        setPosition(position - 1);
    }

    return(
        <div className="h-full overflow-hidden bg-red-100" style={{width: (100*(images.length+1)) + "%"}}>
            <div className="absolute z-50 top-1/2 ml-4 pt-1.5 text-white hover:text-gray-200" onClick={() => back()}>
                <svg width="30" height="30"><polygon points="5, 13, 25, 25, 25, 0" fill="currentColor" /></svg>
            </div>
            <div className="absolute z-50 top-1/2 right-0 transform rotate-180 pt-1.5 mr-4 text-white hover:text-gray-200" onClick={() => advance()}>
                <svg width="30" height="30"><polygon points="5, 13, 25, 25, 25, 0" fill="currentColor" /></svg>
            </div>
            <CarouselIndicators position={position} numSlides={images.length}/>
            <div className={(transition && "ease-in-out transition-transform duration-200 ") + "h-full transform flex flex-row"} style={{width: (100*images.length) + "vw ", transform: 'translate(-' + (100/images.length) * position + '%)'}}>
                {images.map((i, id) => <CarouselItem key={id} img={i} />)}
            </div>
        </div>
    )
}

export default Carousel;

export const CarouselItem = ({img}: {img: any}) => {
    return(
        <div className="flex-grow h-full bg-cover bg-center bg-blue-100" style={{ backgroundImage: `url(${img})`, width: '100%' }}>
            
        </div>
    )
}

const CarouselIndicators = ({position, numSlides}: {position: number, numSlides: number}) => {

    //var bubbles = Element[numSlides];
    //for (let bubble = 0; bubble < numSlides; bubble++) {
    //    bubbles.push(<div className={(position === bubble ? "bg-white" : "bg-transparent") + " border-2 border-white w-8 h-8 rounded-full"}></div>)
    //}

    return(
        <div className="flex flex-row absolute bottom-10">....</div>
    )
}