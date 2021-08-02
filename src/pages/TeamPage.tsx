import { useState } from 'react'
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

  if (selected) {
    return(
      <div className="lg:w-1/3 md:w-1/2 w-full h-1/2 text-center" onClick={() => setSlected(!selected)}>
        <p className="text-6xl font-bold mt-8">{person.nickname.toUpperCase()}</p>
        <p>{person.name}</p>
        <p className="px-14 py-4 text-justify">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis.</p>
      </div>
    )
  } else {
    return(
      <div className="lg:w-1/3 md:w-1/2 w-full h-1/2 bg-cover filter grayscale hover:grayscale-0" 
        style={{backgroundImage: `url(${hover ? person.silly : person.serious})`}} 
        onMouseLeave={() => setHover(false)} 
        onMouseOver={() => setHover(true)}
        onClick={() => setSlected(!selected)}>
      </div>
    )
  }
}

const TeamCards = () => {
  return(
    <div className="flex-wrap flex self-center w-full h-screen">
      {teamMembers.map((d, dIdx) => <TeamCard key={dIdx} person={d} />)}
    </div>
  )
}

const TeamPage = () => {
    return (
      <>
        <br/><br/><br/>
        <TeamCards />
      </>
    );
  };
  
  export default TeamPage;
  