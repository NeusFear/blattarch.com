import Head from 'next/head';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
const nbroad_umbrellas = '/images/projects/commercial/1007nbroadway/roof_umbrellas.jpg';
const cbl_offices = '/images/projects/commercial/citizensbank_lobby/offices.jpg';
const uco_wantland_exterior = '/images/projects/educational/uco_wantlandstadium/southwest.jpg';
const edmondpw_front = '/images/projects/government/edmond_publicworks/front.jpg';
const fam_touch = '/images/projects/government/fam/touch.jpg';
const famvc_morning = '/images/projects/government/fam_visitorcenter/morning.jpg';
const guymon_fd_front = '/images/projects/government/guymon_firedept/front.jpg';
const vc_admin_fly = '/images/projects/health_care/varietycare_admin/fly.jpg';
const toc_exterior = '/images/projects/hospitality/21c/exterior_dusk.jpg';
const corbett_cover2 = '/images/projects/residential/corbett_residence/cover_2.jpg';
const french_day = '/images/projects/residential/french_residence/day.jpg';
const evoke_exterior = '/images/projects/restaurant/evoke/exterior.jpg';

const HomePage = () => {

    const images = [fam_touch, nbroad_umbrellas, cbl_offices, edmondpw_front, famvc_morning, guymon_fd_front, toc_exterior,
        uco_wantland_exterior, vc_admin_fly, evoke_exterior, corbett_cover2, french_day]

    return (
        <>
            <Head>
                <title>Blatt Architects</title>

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Local to Edmond Architecture Firm" />
                <meta name="keywords" content="blatt, architecture, architects, buildings, construction, renderings" />
                <meta name="author" content="Brandon Davis" />

                <meta property="og:title" content="Blatt Architects"/>

                <meta http-equiv='cache-control' content='no-cache' />
                <meta http-equiv='expires' content='0' />
                <meta http-equiv='pragma' content='no-cache' />
            </Head>
            <Navbar />
            <div className="h-screen w-full overflow-x-hidden">
                <Carousel images={images} autoAdvance={true} />
            </div>
            <Footer />
        </>
    );
}

export default HomePage;
