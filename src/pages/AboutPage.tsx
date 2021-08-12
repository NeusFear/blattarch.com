import fam_entrance from '../images/projects/government/fam/entrance.jpg'
import nbroad_umbrellas from '../images/projects/commercial/1007nbroadway/roof_umbrellas.jpg'

const AboutPage = () => {
    return (
      <div className="w-full mt-16">
        <AboutSection 
          title="Firm History" 
          text="After resigning as a partner at Loftis Bell Downing and Partners in 1981, David Hornbeek practiced as a sole practitioner for two years. In 1983-89 Hornbeek became a partner of Blair Hornbeek Architects; from 1989-96, he was principal of Blair Hornbeek Larsson Architects; from 1996-98, he was principal of Hornbeek Larsson Hinchey Architects; in 1998 he began his professional relationship with his current business partner, Tony Blatt and from 1998-2002, David and Tony were principals in Hornbeek Larsson Blatt Architects; and from 2002 to the present they have been partners/principals in Hornbeek Blatt Architects." 
          image={fam_entrance}
          flipped={false} />
        <AboutSection
          title="Firm Philosophy" 
          text="Hornbeek Blatt Architects is a multi-faceted Architectural Firm that specializes in providing high quality designs tailored to the time, budget, and sustainability needs of each individual project.  HB offers a wide range of complementary professional services to the benefit of each Client and respective project.  The core business of our Firm is based in the field of Architectural Design, but is balanced by services that support the Design initiative. " 
          image={nbroad_umbrellas}
          flipped={true} />
        <AboutSection 
          title="Quality Commitments" 
          text="Hornbeek Blatt Architects is proud to provide for our clients high quality buildings that are tailored to the specific requirements for time, budget and energy efficiency. Our team understands that Time, Budget, Quality and Efficiency are elements that must be carefully balanced in order to create a successful project.  We also recognize that the correct approach might require additional effort on the part of the Design Team.  Hornbeek Blatt Architects is willing to provide the extra effort required to develop the proper scheme that each and every Owner deserves. " 
          image={fam_entrance}
          flipped={false} />
        <AboutSection
          title="LEED & Sustainable Design" 
          text="One of our inherent responsibilities as planners and designers is to carefully examine the environmental impacts of all building design, construction, and long term successful operation.  Our priority in preliminary discussions with all of our clients is to establish client and end-user goals in order to have a clear understanding of what essential “green” elements may be required
                <br /> In any project, we will investigate every opportunity to reduce negative effects on the natural environment and enhance the working environment through design techniques.  As standard practices of considerate design we will implement “green / sustainable” ideals with, or without parameters, of an industry rating system.  Programming, planning and design components available to the design team will be fully explored and evaluated as required to provide a cost effective and successfully accredited project, based on design and budget requirements of the client." 
          image={nbroad_umbrellas}
          flipped={true} />
        <AboutSection 
          title="Services" 
          text="
          Hornbeek Blatt has a firmly established reputation for design excellence, built on our partners’ multifarious expertise and enhanced by our incorporation of innovative technologies. Our firm’s principals are licensed architects with a combined fifty years of experience in this field. 
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
          image={fam_entrance}
          flipped={false} />
      </div>
    );
  };

const AboutSection = ({title, text, image, flipped}: {title: String, text: String, image: any, flipped: boolean}) => {
  return(
    <div className={(flipped ? "lg:flex-row-reverse" : "flex-row") + " lg:flex w-full lg:h-half max-h-screen"}>
      <div className="w-full lg:w-1/2 h-half lg:h-full bg-cover" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="w-full lg:w-1/2 lg:h-full flex flex-col">
        <span className="flex-grow"></span>
        <p className=" text-2xl text-center m-2">{title}</p>
        {text.split("<br />").map((element, id) => (<p className="mx-8 my-4" key={id}>{
          element.split("<nl />").map((line, id) => (<p className="mx-8" key={id}>{line}</p>))
        }</p>))}
        <span className="flex-grow"></span>
      </div>
    </div>
  )
}
  
  export default AboutPage;
  