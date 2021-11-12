import LazyLoad from 'react-lazy-load';
import Footer from '../components/Footer';
import billie from '../images/staff/billie.jpg';
import brandon from '../images/staff/brandon.jpg';
import carlie from '../images/staff/carlie.jpg';
import jim from '../images/staff/jim.jpg';
import julie from '../images/staff/julie.jpg';
import rainey from '../images/staff/rainey.jpg';
import tony from '../images/staff/tony.jpg';
import veronica from '../images/staff/veronica.jpg';
import yara from '../images/staff/yara.jpg';

const teamMembers = [
  { name: "Anthony Blatt", nickname: "Tony", email: "ablatt@blattarch.com", title: "Principal", image: tony},
  { name: "Julie Blatt", nickname: "Julie", email: "jblatt@blattarch.com", title: "Sr. Project Manager", image: julie},
  { name: "James Maggio", nickname: "Jim", email: "jmaggio@blattarch.com", title: "Project Architect", image: jim},
  { name: "Carlie Gruel", nickname: "Carlie", email: "cgruel@blattarch.com", title: "Project Architect", image: carlie},
  { name: "Veronica Secculini", nickname: "Veronica", email: "vseculini@blattarch.com", title: "Intern Architect", image: veronica },
  { name: "Yara Albotros", nickname: "Yara", email: "yalbotros@blattarch.com", title: "Intern Architect", image: yara },
  { name: "Rainey High", nickname: "Rainey", email: "rhigh@blattarch.com", title: "Intern Architect", image: rainey },
  { name: "Billie Baker", nickname: "Billie", email: "billie@blattarch.com", title: "Financial Officer", image: billie},
  { name: "Brandon Davis", nickname: "Brandon", email: "bdavis@blattarch.com", title: "Student Intern Architect", image: brandon},
  { name: "Chloe Sweet", nickname: "Chloe", email: "csweet@blattarch.com", title: "Receptionist / Student Intern", image: undefined}
]

const TeamCard = ({person}, {person: any}) => {

  return (
    <div className="relative inline-block lg:w-1/3 md:w-1/2 w-full">
      <div style={{marginTop: "100%"}}></div>
      <LazyLoad offsetVertical={600} className="absolute top-0 bottom-0 left-0 right-0">
        <div className="w-full h-full group bg-cover bg-center" 
          style={{ backgroundImage: `url(${person.image})` }}>
          <div className="group-hover:opacity-100 bg-opacity-60 transition-opacity ease-in-out opacity-0 w-full h-full z-10 text-black text-center bg-white">
              <div className="top-1/3 relative pt-8">
                <p className="pt-1 font-bold text-4xl">{person.nickname}</p>
                <p className="pb-1 pt-1 text-xs">{person.name}</p>
                <p className="pb-1 pt-1 text-xs">{person.email}</p>
                <p className="pb-1 pt-1 text-xs">{person.title}</p>
              </div>
          </div>
        </div>
      </LazyLoad>
    </div>
  )
}

const TeamCards = () => {
  return(
    <div className="flex-wrap flex self-center w-screen min-h-screen mt-3">
      {teamMembers.map((d, dIdx) => <TeamCard key={dIdx} person={d} />)}
    </div>
  )
}

const TeamPage = () => {
    return (
      <>
        <br/><br/>
        <TeamCards />
        <Footer />
      </>
    );
  };
  
  export default TeamPage;
  
