import Carousel, {CarouselItem} from '../components/ScreenCarousel'
import fam_feature from '../images/projects/temp/fam_feature.jpg'

const LandingPage = () => {

  const images = [
    fam_feature,
    fam_feature
  ]

  return (
    <>
      <Carousel images={images} />
    </>
  );
};

export default LandingPage;
