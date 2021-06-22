import Carousel from '../components/ScreenCarousel'
import fam_feature from '../images/projects/temp/fam_feature.jpg'
import vc_briton from '../images/projects/temp/vc_briton.jpg'
import toc from '../images/projects/temp/21c.jpg'

const LandingPage = () => {

  const images = [
    {name: "fam", image: fam_feature},
    {name: "vb", image: vc_briton},
    {name: "21c", image: toc}
  ]

  return (
    <>
      <Carousel images={images} />
    </>
  );
};

export default LandingPage;
