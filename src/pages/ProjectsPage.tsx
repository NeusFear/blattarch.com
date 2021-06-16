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
    <div className="lg:w-1/4 md:w-1/3 w-1/2 h-64 p-2">
      <div className="min-w-full h-full flex flex-col-reverse shadow-md hover:shadow-2xl hover:border-gray-400 bg-cover bg-center" style={{ backgroundImage: `url(${fam_feature})` }}>
      <div className="bg-white w-full relative">
        <p className="font-bold px-2 text-lg transform -mb-3 text-blue-800 truncate">{category}</p>
        <p className="text-xs px-2 pt-1 pb-2 text-gray-600 truncate">{desc}</p>
      </div>
      </div>
    </div>
  )
}

const ProjectList = () => {

  return(
    <div className="w-full flex-wrap flex">
      {projects.map(p => <ProjectCard name={p.name} desc={p.desc} images={p.images} />)}
    </div>
  )
}

const ProjectCard = ({name, desc, images}: {name: string, desc: string, images: any}) => {

  return(
    <div className="md:w-1/2 w-full h-1/2 p-2">
      <div className="w-full h-104 flex flex-col-reverse bg-gray-200 rounded-md shadow-lg overflow-hidden hover:shadow-xl hover:border-gray-400 border-4 bg-cover bg-center" style={{ backgroundImage: `url(${images[0]})` }}>
        <p className="w-full z-10 relative bg-white top-0 text-center pb-3 pt-1 text-xs">{desc}</p>
        <p className="h-8 w-full z-10 relative bg-white top-0 text-center pb-3 pt-1">{name}</p>
      </div>
    </div>
  )
}
  
 export default ProjectsPage;
  