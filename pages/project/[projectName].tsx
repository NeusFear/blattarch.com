import { useRouter } from "next/router";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
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

    return (
        <div className="overflow-x-hidden">
            <div className="h-screen mb-10">
                <Carousel autoAdvance={false} images={projectData?.images} />
            </div>
            <p className="lg:ml-96 font-semibold text-3xl">{projectData?.name}</p>
            <p className="lg:ml-96 font-semibold">{projectData?.date}</p>
            <div className=" lg:mx-96 mb-10 mt-5">
                {projectData?.desc}
            </div>
        </div>
    );
}