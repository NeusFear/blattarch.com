import fam_feature from '../images/projects/temp/fam_feature.jpg'
import HeroImage from '../components/HeroImage'

const projects = [
  {name: "First Americans Museum 1", desc: "The Museum about the First Americans. This should be a nicer description than the one that I'm giving it but I'm lazy or something idk", images: [fam_feature, fam_feature, fam_feature]},
  {name: "First Americans Museum 2", desc: "The Museum about the First Americans. This should be a nicer description than the one that I'm giving it but I'm lazy or something idk", images: [fam_feature, fam_feature, fam_feature]},
  {name: "First Americans Museum 3", desc: "The Museum about the First Americans. This should be a nicer description than the one that I'm giving it but I'm lazy or something idk", images: [fam_feature, fam_feature, fam_feature]},
  {name: "First Americans Museum 4", desc: "The Museum about the First Americans. This should be a nicer description than the one that I'm giving it but I'm lazy or something idk", images: [fam_feature, fam_feature, fam_feature]},
  {name: "First Americans Museum 5", desc: "The Museum about the First Americans. This should be a nicer description than the one that I'm giving it but I'm lazy or something idk", images: [fam_feature, fam_feature, fam_feature]}
]

const ProjectsPage = () => {

    return (
      <div className="width-full flex flex-col">
        <HeroImage img={fam_feature} altText="FAM Featured Image" />
        <div className="flex-wrap flex flex-shrink align-items-center mx-0 xl:mx-60 md:mx-20 my-16">
          <CategoryCard category="Commercial" desc="Projects owned by larger companies" />
          <CategoryCard category="Corperate" desc="Projects owned by corperations" />
          <CategoryCard category="Government" desc="Government Level Projects" />
          <CategoryCard category="Educatoinal" desc="Projects for schools or Universities" />
          <CategoryCard category="Recreational" desc="Projects for recreational use" />
          <CategoryCard category="Hospitality & Restaurant" desc="Places to eat and sleep" />
          <CategoryCard category="Residential" desc="Private homes" />
          <CategoryCard category="Healthcare and Dental" desc="Hospitals, clinics, and health care offices." />
          <CategoryCard category="Community and Faith Based" desc="Churches and other failth based projects." />
          <CategoryCard category="In the Works" desc="Projects we're working on now." />
        </div>
        <ProjectList />
      </div>
    )
};

const CategoryCard = ({category, desc}: {category: string, desc: string}) => {

  return(
    <div className="lg:w-1/4 md:w-1/3 w-1/2 p-2">
      <div className="bg-gray-100 rounded-md px-4 w-full relative">
        <p className="px-2 text-lg transform -mb-3 truncate">{category}</p>
        <p className="text-xs px-2 pt-1 pb-2 text-gray-600 truncate">{desc}</p>
      </div>
    </div>
  )
}

const ProjectList = () => {

  return(
    <div className="w-5/6 flex-wrap flex self-center">
      {projects.map(p => <ProjectCard name={p.name} desc={p.desc} images={p.images} />)}
    </div>
  )
}

const ProjectCard = ({name, desc, images}: {name: string, desc: string, images: any}) => {

  return(
    <div className="lg:w-1/2 w-full p-2">
      <div className="w-full h-104 flex flex-col-reverse overflow-hidden bg-cover bg-center group" style={{ backgroundImage: `url(${images[0]})` }}>
      </div>
      <div className="w-full z-10 relative border-gray-300 border-l border-b border-r bg-white text-center">
          <p className="pt-1">{name}</p>
          <p className="pb-3 pt-1 text-xs">{desc}</p>
        </div>
    </div>
  )
}
  
 export default ProjectsPage;
  