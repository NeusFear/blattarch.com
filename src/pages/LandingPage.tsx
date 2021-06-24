import Carousel from '../components/Carousel'
import Footer from '../components/Footer'

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

  const images = [fam_touch, nbroad_umbrellas, cbl_offices, edmondpw_front, famvc_morning, guymon_fd_front, toc_exterior,
    uco_wantland_exterior, vc_admin_fly, evoke_exterior, corbett_cover2, french_day]

  return (
    <div>
      <div className="h-screen w-full">
        <Carousel images={images} />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
