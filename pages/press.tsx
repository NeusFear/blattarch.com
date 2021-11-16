import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { pressItems } from "../data/PressData";

const PressPage = () => {
    return (
      <div>
        <Navbar />
        <div className="flex flex-col min-h-screen mt-16 xl:px-56 lg:px-36 px-4 mb-8">
          <BlattArchAnnoucement />
          <div className="w-full h-1 border-t border-gray-400 mb-8 mt-14"></div>
          {pressItems.map((item, itemIdx) => <PressItem key={itemIdx} publisher={item.publisher} projectName={item.projectName} author={item.author} date={item.date} previewText={item.previewText} link={item.link} />)}
        </div>
        <Footer />
      </div>
    );
};

export default PressPage;

const PressItem = ({publisher, projectName, author, date, previewText, link}: {publisher: string, projectName: string, author: string | undefined, date: string | undefined, previewText: string, link: string}) => {
  return(
    <a className="bg-gray-100 rounded-md shadow-md w-full p-4 mt-4 group cursor-pointer" href={link} target="_blank" rel="noreferrer">
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
  );
}

const BlattArchAnnoucement = () => {
  return(
    <div className="bg-gray-100 rounded-md shadow-md w-full p-4 mt-8">
      <div className="flex flex-row">
        <p className="text-xl font-semibold transition-colors duration-75">David Hornbeek Departs from Hornbeek Blatt Architects, Tony Blatt to Serve as President</p>
      </div>
      <div className="w-full h-1 border-t border-gray-400 mb-2"></div>
      <p className="text-xs text-gray-500 mb-2">Hornbeek Blatt Architects is pleased to announce that, effective July 1, 2021, Anthony Blatt assumed executive leadership as President and sole Principal for the firm, soon to be named Blatt Architects.  Founding partner, David Hornbeek has left his role as firm President and concluded his involvement in day-to-day operations of the company.  Mr. Hornbeek will remain engaged in the architecture community through participation in various professional boards and will continue to lend his expertise to various projects as a consultant.</p>
      <p className="text-xs text-gray-500 mb-2">With over 40 years of experience, David Hornbeek has been serving as President of the firm since 1999 and has been active in the Oklahoma Board of Architects, Landscape Architects and Interior Designers, various NCARB committees, visiting adjunct professor and member of the University of Oklahoma School of Architecture’s Professional Advisory Board and Board of Visitors, and the AIA Central Oklahoma chapter.  Currently, Hornbeek is serving as the the Region 5 director on the NCARB Board of Directors.</p>
      <p className="text-xs text-gray-500 mb-2">“David has made an incredible impact on the built environment on a variety of projects that span the globe with a number of prominent projects in our great state of Oklahoma,” said Tony Blatt.  “He has been a mentor to many, making an impact on numerous professionals in our field.  I thank David for all he has done for the development and progress of our firm.”</p>
      <p className="text-xs text-gray-500 mb-2">Hornbeek Blatt Architects, P.C., founded in 1999 as a partnership, has grown to become a well-respected multi-service architectural firm in Edmond, Oklahoma.  Named the 2011 AIA Central Oklahoma “Outstanding Firm of the Year,” Hornbeek Blatt has been designing award winning architecture for over 20 years through leadership, vision, and a commitment to quality design.  The firm has also been heading a team of twelve different international consultants as the Co-Prime Architect for First Americans Museum, scheduled to open September 18, 2021.</p>
    </div>
  );
}