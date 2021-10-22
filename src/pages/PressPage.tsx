import Footer from "../components/Footer";

const pressItems = [
  {publisher: "Smithsoniam Magazine", projectName: "First American's Museum", author: "Jennifer Billock", date: "September 27, 2021", previewText: "A Brand-New Museum in Oklahoma Honors Indigenous People at Every Turn The team behind the First Americans Museum in Oklahoma City incorporated the traditions and spiritual beliefs of 39 tribal nations into its design", link: "https://www.smithsonianmag.com/travel/brand-new-museum-oklahoma-city-honors-indigenous-people-at-every-turn-180978742/"},
  {publisher: "American Institute of Architects", projectName: "First American's Museum", author: "Andrew Hallmark", previewText: "As the sun rises over the native-inspired earthen mound and glistens on the glass panes of the Hall of The People, you can almost hear ancient voices speaking through the unique architecture of the First Americans Museum near Oklahoma City. The 175,000-square-foot structure, which recently opened to the public, expounds on the rich history and challenging journey for the 39 tribes that call Oklahoma home today", link: "https://www.aia.org/articles/6440076-first-americans-museum-honors-tribal-tradi?utm_source=RealMagnet&utm_medium=email&utm_term=30087394--17573e9f-c7b9-4b08-b6a0-de266147f6aa&utm_content=AIA%20Architect--AIA%20Architect%20Email%20%2D%2010%2F08%2F21&utm_campaign=What%E2%80%99s%20driving%20supply%20chain%20issues%3F"}
];

const PressPage = () => {
    return (
      <div>
        <div className="flex flex-col h-screen mt-16 px-36">
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