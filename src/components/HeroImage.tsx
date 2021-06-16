const HeroImage = ({img, altText}: {img: any, altText: string}) => {
    return(
        <div className="h-200 w-full bg-white bg-center" style={{ backgroundImage: `url(${img})` }}></div>
    )
}


export default HeroImage;