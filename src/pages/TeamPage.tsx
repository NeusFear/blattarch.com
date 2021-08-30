import { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import Footer from '../components/Footer'

import brandon_serious from '../images/staff/brandon_serious.jpg'
import brandon_silly from '../images/staff/brandon_silly.jpg'

const teamMembers = [
  {name: "Anthony Blatt", nickname: "Tony", email: "ablatt@blattarch.com", cellphone: "405.833.7441", titles: "Principal Architect <br /> NCARB, AIA", serious: brandon_serious, silly: brandon_silly},
  {name: "Julie Blatt", nickname: "Julie", email: "jblatt@blattarch.com", cellphone: "405.642.9892", titles: "Project Manager", serious: brandon_serious, silly: brandon_silly},
  {name: "James Maggio", nickname: "Jim", email: "PLACEHOLDER", cellphone: "405.xxx.xxxx", titles: "Project Architect", serious: brandon_serious, silly: brandon_silly},
  {name: "Carlie Gruel", nickname: "Carlie", email: "PLACEHOLDER", cellphone: "405.xxx.xxxx", titles: "Project Architect", serious: brandon_serious, silly: brandon_silly},
  {name: "Veronica Secculini", nickname: "Veronica", email: "PLACEHOLDER", cellphone: "405.xxx.xxxx", titles: "Intern Architect", serious: brandon_serious, silly: brandon_silly},
  {name: "Brandon Davis", nickname: "Brandon", email: "intern@blattarch.com", cellphone: "405.496.8884", titles: "Student Intern Architect", serious: brandon_serious, silly: brandon_silly}
]

const TeamCard = ({person}, {person: any}) => {

  const [hover, setHover] = useState(false);
  const [selected, setSlected] = useState(false);

  return(
    <div className="lg:w-1/3 md:w-1/2 w-full h-half">
      <ReactCardFlip isFlipped={selected}>
        <div className="bg-cover filter group grayscale hover:grayscale-0 w-full h-half" 
          style={{backgroundImage: `url(${hover ? person.silly : person.serious})`, backgroundPosition: 'center'}}
          onMouseLeave={() => setHover(false)}
          onMouseOver={() => setHover(true)}
          onClick={() => setSlected(!selected)}>
        </div>
        <div className="text-center w-full h-half pt-8 bg-gray-100 flex flex-col" onClick={() => setSlected(!selected)}>
          <div className="flex-grow"></div>
          <p className="text-6xl font-bold">{person.nickname.toUpperCase()}</p>
          <p className="text-xl">{person.name}</p>
          <div className="px-14 py-4 text-center mb-2">{person.titles.split("<br />").map((element, id) => (<div className="mx-8" key={id}>{
            <p>{element}</p>
          }</div>))}</div>
          <p className="text-center">101 S BROADWAY SUITE 200</p>
          <p className="text-center mb-1">EDMOND OKLAHOMA 73034</p>
          <p className="text-center">405.340.8552 o</p>
          <p className="text-center">405.340.5707 f</p>
          <p className="text-center mb-1">{person.cellphone} c</p>
          <p className="text-center">{person.email}</p>
          <div className="flex-grow"></div>
        </div>
      </ReactCardFlip>
    </div>
  )
}

const TeamCards = () => {
  return(
    <div className="flex-wrap flex self-center w-screen min-h-screen">
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
  