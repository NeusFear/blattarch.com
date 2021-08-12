import Footer from "../components/Footer"
import fam_entrance from '../images/office/front.jpg'

const ContactPage = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-grow bg-cover bg-center" style={{ backgroundImage: `url(${fam_entrance})` }}></div>
      <Footer />
    </div>
  );
};

export default ContactPage;
