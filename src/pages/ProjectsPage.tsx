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
        <div className="flex-wrap flex flex-shrink align-items-center mx-0 lg:mx-60 md:mx-20 my-16">
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
        </div>
        <ProjectList />
      </div>
    )
};

const SmallCard = () => {

  return(
    <div className="w-1/3 h-64 p-2">
      <div className="min-w-full h-full flex flex-col-reverse bg-gray-200 rounded-md shadow-lg overflow-hidden hover:shadow-xl hover:border-gray-400 border-4">
        <p className="h-8 w-full z-10 relative bg-white top-0 text-center pb-3 pt-1">Some Category</p>
        <div className="justify-content-center">
          <img className="min-h-64 min-w-full" src={fam_feature} alt="test" />
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
    <div className="w-1/2 h-1/2 p-2">
      <div className="w-full h-full flex flex-col-reverse bg-gray-200 rounded-md shadow-lg overflow-hidden hover:shadow-xl hover:border-gray-400 border-4">
        <p className="h-8 w-full z-10 relative bg-white top-0 text-center pb-3 pt-1 text-xs">{desc}</p>
        <p className="h-8 w-full z-10 relative bg-white top-0 text-center pb-3 pt-1">{name}</p>
        <div className="justify-content-center">
          <img className="w-full" src={images[0]} alt={name} />
        </div>
      </div>
    </div>
  )
}
  
 export default ProjectsPage;
  