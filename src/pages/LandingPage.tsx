import Carousel from '../components/ScreenCarousel'

import fam_touch from '../images/projects/government/fam/touch.jpg'
import nbroad_umbrellas from '../images/projects/commercial/1007nbroadway/roof_umbrellas.jpg'
import cbl_offices from '../images/projects/commercial/citizensbank_lobby/offices.jpg'
import edmondpw_front from '../images/projects/government/edmond_publicworks/front.jpg'
import famvc_morning from '../images/projects/government/fam_visitorcenter/morning.jpg'
import guymon_fd_front from '../images/projects/government/guymon_firedept/front.jpg'
import toc_exterior from '../images/projects/hospitality/21c/exterior_dusk.jpg'
import uco_wantland_exterior from '../images/projects/educational/uco_wantlandstadium/southwest.jpg'
import vc_admin_fly from '../images/projects/health_care/varietycare_admin/fly.jpg'
import evoke_exterior from '../images/projects/restaurant/evoke/exterior.jpg'
import corbett_cover2 from '../images/projects/residential/corbett_residence/cover_2.jpg'
import french_day from '../images/projects/residential/french_residence/day.jpg'

const LandingPage = () => {

  const images = [
    {name: "fam", image: fam_touch},
    {name: "umbrellas", image: nbroad_umbrellas},
    {name: "cbl", image: cbl_offices},
    {name: "edmondpublicworks", image: edmondpw_front},
    {name: "famvc", image: famvc_morning},
    {name: "guymonfd", image: guymon_fd_front},
    {name: "21c", image: toc_exterior},
    {name: "uco", image: uco_wantland_exterior},
    {name: "vcadmin", image: vc_admin_fly},
    {name: "evoke", image: evoke_exterior},
    {name: "corbet", image: corbett_cover2},
    {name: "french", image: french_day}
  ]

  return (
    <>
      <Carousel images={images} />
    </>
  );
};

export default LandingPage;
