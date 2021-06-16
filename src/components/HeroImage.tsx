const HeroImage = ({img, altText}: {img: any, altText: string}) => {
    return(
        <div className="h-screen w-full bg-gray-500 overflow-hidden">
            <img className="relative bottom-0" src={img} alt={altText} />
        </div>
    )
}


export default HeroImage;