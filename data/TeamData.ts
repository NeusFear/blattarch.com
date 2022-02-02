const billie = '/images/staff/billie.jpg';
const brandon = '/images/staff/brandon.jpg';
const carlie = '/images/staff/carlie.jpg';
const jim = '/images/staff/jim.jpg';
const julie = '/images/staff/julie.jpg';
const rainey = '/images/staff/rainey.jpg';
const tony = '/images/staff/tony.jpg';
const veronica = '/images/staff/veronica.jpg';
const yara = '/images/staff/yara.jpg';

export type TeamMember = { name: string, nickname: string, email: string, title: string, image: string };

export const teamMembers = [
  { name: "Anthony Blatt", nickname: "Tony", email: "ablatt@blattarch.com", title: "President / CEO", image: tony},
  { name: "Julie Blatt", nickname: "Julie", email: "jblatt@blattarch.com", title: "COO / Managing Principal", image: julie},
  { name: "Jim Maggio", nickname: "Jim", email: "jmaggio@blattarch.com", title: "Project Manager", image: jim},
  { name: "Carlie Gruel", nickname: "Carlie", email: "cgruel@blattarch.com", title: "Project Architect", image: carlie},
  { name: "Veronica Secculini", nickname: "Veronica", email: "vseculini@blattarch.com", title: "Intern Architect", image: veronica },
  { name: "Yara Albotros", nickname: "Yara", email: "yalbotros@blattarch.com", title: "Intern Architect", image: yara },
  { name: "Rainey High", nickname: "Rainey", email: "rhigh@blattarch.com", title: "Architect/Specification Writer", image: rainey },
  { name: "Billie Baker", nickname: "Billie", email: "billie@blattarch.com", title: "Financial Officer", image: billie},
  { name: "Brandon Davis", nickname: "Brandon", email: "bdavis@blattarch.com", title: "Student Intern Architect", image: brandon},
  //{ name: "Chloe Sweet", nickname: "Chloe", email: "csweet@blattarch.com", title: "Receptionist / Student Intern", image: undefined}
]