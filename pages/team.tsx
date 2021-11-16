import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { TeamMember, teamMembers } from '../data/TeamData';

const TeamCard = ({person}: {person: TeamMember}) => {

  return (
    <div className="relative inline-block lg:w-1/3 md:w-1/2 w-full">
      <div style={{marginTop: "100%"}}></div>
      <div className="absolute top-0 bottom-0 left-0 right-0">
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
      </div>
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
        <Navbar />
        <TeamCards />
        <Footer />
      </>
    );
  };
  
  export default TeamPage;
  