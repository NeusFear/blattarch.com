const fam_entrance = '/images/projects/government/fam/entrance.jpg'
const nbroad_umbrellas = '/images/projects/commercial/1007-n-broadway/roof_umbrellas.jpg'
const tennbroad_lobby = '/images/projects/commercial/1015-n-broadway/lobby_desk.jpg'
const cbl_wide = '/images/projects/commercial/citizens-bank-lobby/wide.jpg'
const edmondpw_front = '/images/projects/government/edmond-public-works/front.jpg'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const AboutPage = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="mt-16"></div>
        <AboutSection 
          title="Firm History" 
          text="Celebrating 20+ years, Blatt Architects, previously Hornbeek Blatt Architects, is a professional architectural firm headquartered in Edmond, Oklahoma.  Blatt Architects has developed long-term client partnerships across the State of Oklahoma through their collaborative approach and focus on sustainable, timeless solutions for all to enjoy.  Providing professional services for a wide range of projects that include cultural centers, corporate, hospitality, educational, government, medical and residential, our work is site-specific, detail-oriented and client-centric.  Blatt Architects has been designing award winning architecture for over twenty years and, as Hornbeek Blatt, was named the 2011 AIA Central Oklahoma &quot;Outstanding Firm of the Year.&quot; Blatt Architects has achieved this distinction through leadership, vision, and a commitment to quality design." 
          image={fam_entrance}
          flipped={false} />
        <AboutSection
          title="Firm Philosophy" 
          text="Blatt Architects is a multi-faceted Architectural Firm that specializes in providing high quality designs tailored to the time, budget, and sustainability needs of each individual project.  Blatt Architects offers a wide range of complementary professional services to the benefit of each Client and respective project.  The core business of our Firm is based in the field of Architectural Design, but is balanced by services that support the Design initiative. " 
          image={nbroad_umbrellas}
          flipped={true} />
        <AboutSection 
          title="Quality Commitments" 
          text="Blatt Architects is proud to provide for our clients high quality buildings that are tailored to the specific requirements for time, budget and energy efficiency. Our team understands that Time, Budget, Quality and Efficiency are elements that must be carefully balanced in order to create a successful project.  We also recognize that the correct approach might require additional effort on the part of the Design Team.  Blatt Architects is willing to provide the extra effort required to develop the proper scheme that each and every Owner deserves. " 
          image={tennbroad_lobby}
          flipped={false} />
        <AboutSection
          title="LEED & Sustainable Design" 
          text="One of our inherent responsibilities as planners and designers is to carefully examine the environmental impacts of all building design, construction, and long term successful operation.  Our priority in preliminary discussions with all of our clients is to establish client and end-user goals in order to have a clear understanding of what essential “green” elements may be required
                <br /> In any project, we will investigate every opportunity to reduce negative effects on the natural environment and enhance the working environment through design techniques.  As standard practices of considerate design we will implement “green / sustainable” ideals with, or without parameters, of an industry rating system.  Programming, planning and design components available to the design team will be fully explored and evaluated as required to provide a cost effective and successfully accredited project, based on design and budget requirements of the client." 
          image={cbl_wide}
          flipped={true} />
        <AboutSection 
          title="Services" 
          text="
          Blatt has a firmly established reputation for design excellence, built on our partners’ multifarious expertise and enhanced by our incorporation of innovative technologies. Our firm’s principals are licensed architects and engineers with a combined fifty years of experience in this field. 
          Specializations provided by the Firm for this project include, but are not limited to: 
          <br />
          <nl />•  Program Analysis and Programming
          <nl />•  Architectural Design
          <nl />•  Architectural Delineation
          <nl />•  Development and Documentation
          <nl />•  Specification Writing
          <nl />•  Interior Design and Furniture Selection
          <nl />•  Negotiation with the General Contractor
          <nl />•  Construction Observation
      " 
          image={edmondpw_front}
          flipped={false} />
          <Footer />
      </div>
    );
  };

const AboutSection = ({title, text, image, flipped}: {title: String, text: String, image: any, flipped: boolean}) => {
  return(
    <div className={(flipped ? "lg:flex-row-reverse" : "flex-row") + " lg:flex w-full h-auto lg:h-half"}>
      <div className="w-full lg:w-1/2 h-[50vh] lg:min-h-[50vh] bg-cover" style={{ backgroundImage: `url("${image}")` }}></div>
      <div className="w-full lg:w-1/2 flex flex-col">
        <span className="flex-grow"></span>
          <p className=" text-2xl text-center m-2">{title}</p>
          {text.split("<br />").map((element, id) => (<div className="mx-8 my-4" key={id}>{
            element.split("<nl />").map((line, id) => (<p className="mx-8" key={id}>{line}</p>))
          }</div>))}
        <span className="flex-grow"></span>
      </div>
    </div>
  )
}
  
  export default AboutPage;
  
