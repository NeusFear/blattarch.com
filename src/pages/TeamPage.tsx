import { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import Footer from '../components/Footer'

import brandon_serious from '../images/staff/brandon_serious.jpg'
import brandon_silly from '../images/staff/brandon_silly.jpg'

const teamMembers = [
  {name: "Anthony Blatt", nickname: "Tony", serious: brandon_serious, silly: brandon_silly},
  {name: "Julie Blatt", nickname: "Julie", serious: brandon_serious, silly: brandon_silly},
  {name: "James Maggio", nickname: "Jim", serious: brandon_serious, silly: brandon_silly},
  {name: "Carlie Gruel", nickname: "Carlie", serious: brandon_serious, silly: brandon_silly},
  {name: "Veronica Secculini", nickname: "Veronica", serious: brandon_serious, silly: brandon_silly},
  {name: "Brandon Davis", nickname: "Brandon", serious: brandon_serious, silly: brandon_silly}
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
        <div className="text-center w-full h-half pt-8" onClick={() => setSlected(!selected)}>
          <p className="text-6xl font-bold">{person.nickname.toUpperCase()}</p>
          <p>{person.name}</p>
          <p className="px-14 py-4 text-justify">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
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
  