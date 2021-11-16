import { useRouter } from "next/router";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { pressItems } from "../../data/PressData";
import { projectList } from "../../data/ProjectData";

const ProjectInfoPage = () => {

  const router = useRouter();
  const projectName = router.query.projectName;

  return (
    <div>
      <Navbar />
      <ProjectItem project={projectName} />
      <Footer />
    </div>
  );
}

export default ProjectInfoPage;

const ProjectItem = ({ project }: { project: any }) => {

  const projectData = projectList.find(x => x.route === project);

  if (projectData === undefined) {
    return <div>Loading...</div>
  }

  const pressItemsForProject = pressItems.filter(x => x?.projectRoute === projectData.route);

  console.log(pressItemsForProject);

  return (
    <div className="overflow-x-hidden">
      <div className="h-screen mb-10">
        <Carousel autoAdvance={false} images={projectData?.images} />
      </div>
      <p className="xl:ml-96 md:ml-24 font-semibold text-3xl ml-12">About {projectData?.name}</p>
      <p className="xl:ml-96 md:ml-24 font-semibold ml-12">{projectData?.date}</p>
      <div className="xl:mx-96 md:mx-24 mb-10 mt-5 mx-10">
        {projectData?.desc}
      </div>
      <p className="xl:ml-96 md:mx-24 font-semibold text-3xl mx-10">Articles on {projectData?.name}</p>
      <div className="xl:mx-96 md:mx-24 mx-10 mb-10">
        {pressItemsForProject.map((item, itemIdx) => <PressItem key={itemIdx} publisher={item.publisher} projectName={item.projectName} author={item.author} date={item.date} previewText={item.previewText} link={item.link} />)}
      </div>
    </div>
  );
}

const PressItem = ({ publisher, projectName, author, date, previewText, link }: { publisher: string, projectName: string, author: string | undefined, date: string | undefined, previewText: string, link: string }) => {
  return (
    <div className="shadow-sm bg-gray-50 my-2 rounded-md p-4 hover:shadow-md transition-shadow duration-100">
      <a className="h-full w-full group cursor-pointer" href={link} target="_blank" rel="noreferrer">
        <div className="flex flex-row">
          <p className="text-xl font-semibold group-hover:text-teal-600 transition-colors duration-75">{publisher}</p>
          <p className="mt-2.5 text-gray-600 mx-1 text-xs">on</p>
          <p className="mt-1 group-hover:text-teal-800 duration-75">{projectName}</p>
        </div>
        <div className="w-full h-1 border-t border-gray-400"></div>
        <p className="text-xs text-gray-500">{previewText}</p>
        <div className="flex flex-row">
          {(author !== undefined && author !== "") &&
            <div className="flex flex-row mr-1">
              <p className="mt-1.5 text-gray-600 mr-1 text-xs">by</p>
              <p>{author}</p>
            </div>
          }
          {(date !== undefined && date !== "") &&
            <div className="flex flex-row">
              <p className="mt-1.5 text-gray-600 mr-1 text-xs">on</p>
              <p>{date}</p>
            </div>
          }
        </div>
      </a>
    </div>

  );
}