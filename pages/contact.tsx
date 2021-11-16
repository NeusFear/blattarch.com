import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const office_front = '/images/office/front.jpg'

const ContactPage = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow bg-cover bg-center" style={{ backgroundImage: `url("${office_front}")` }}></div>
      <Footer />
    </div>
  );
};

export default ContactPage;
