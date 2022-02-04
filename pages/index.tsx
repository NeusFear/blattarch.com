import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
const nbroad_umbrellas = '/images/projects/commercial/1007-n-broadway/roof_umbrellas.jpg';
const cbl_offices = '/images/projects/commercial/citizens-bank-lobby/offices.jpg';
const uco_wantland_exterior = '/images/projects/educational/uco-chad-richison-stadium/southwest.jpg';
const edmondpw_front = '/images/projects/government/edmond-public-works/front.jpg';
const fam_touch = '/images/projects/government/fam/touch.jpg';
const famvc_morning = '/images/projects/government/fam-visitor-center/morning.jpg';
const guymon_fd_front = '/images/projects/government/guymon-fire-dept/front.jpg';
const vc_admin_fly = '/images/projects/health_care/variety-care-admin/fly.jpg';
const toc_exterior = '/images/projects/hospitality/21c/exterior_dusk.jpg';
const corbett_cover2 = '/images/projects/residential/private-residence-1/cover_2.jpg';
const french_day = '/images/projects/residential/private-residence-2/day.jpg';
const evoke_exterior = '/images/projects/restaurant/evoke/exterior.jpg';

const HomePage = () => {

  const images = [fam_touch, nbroad_umbrellas, cbl_offices, edmondpw_front, famvc_morning, guymon_fd_front, toc_exterior, uco_wantland_exterior, vc_admin_fly, evoke_exterior, corbett_cover2, french_day]

  return (
    <>
      <Navbar />
      <div className="h-screen w-full overflow-x-hidden">
        <Carousel images={images} autoAdvance={true} />
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
