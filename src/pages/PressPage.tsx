import Footer from "../components/Footer";

const pressItems = [
  {publisher: "Smithsonian Magazine", projectName: "First American's Museum", author: "Jennifer Billock", date: "September 27, 2021", previewText: "A Brand-New Museum in Oklahoma Honors Indigenous People at Every Turn The team behind the First Americans Museum in Oklahoma City incorporated the traditions and spiritual beliefs of 39 tribal nations into its design", link: "https://www.smithsonianmag.com/travel/brand-new-museum-oklahoma-city-honors-indigenous-people-at-every-turn-180978742/"},
  { publisher: "American Institute of Architects", projectName: "First American's Museum", author: "Andrew Hallmark", previewText: "As the sun rises over the native-inspired earthen mound and glistens on the glass panes of the Hall of The People, you can almost hear ancient voices speaking through the unique architecture of the First Americans Museum near Oklahoma City. The 175,000-square-foot structure, which recently opened to the public, expounds on the rich history and challenging journey for the 39 tribes that call Oklahoma home today", link: "https://www.aia.org/articles/6440076-first-americans-museum-honors-tribal-tradi?utm_source=RealMagnet&utm_medium=email&utm_term=30087394--17573e9f-c7b9-4b08-b6a0-de266147f6aa&utm_content=AIA%20Architect--AIA%20Architect%20Email%20%2D%2010%2F08%2F21&utm_campaign=What%E2%80%99s%20driving%20supply%20chain%20issues%3F" },
  { publisher: "OKC Talk", projectName: "21C", date: "October 28, 2021", previewText: "Mary Eddy’s Dining Room at 21c Museum Hotel, which has been closed for renovation since July, will reopen for dinner service this Thursday, October 28 at 5:00 pm. Diners will find a completely reimagined restaurant inspired by its vibrant namesake, Mary Eddy Jones, and a new menu of elevated American classics by executive chef Jeff Patton. 21c partnered with Duro Hospitality, led by Oklahoma City natives Corbin and Ross See and Benji Homsey, to transfo...", link: "https://www.okctalk.com/content.php?r=757-Mary-Eddy-s-reopens-in-the-21c&fbclid=IwAR0ZVGkaSFUV7vtaLKiTxlphC7sX1Nkk37TBZn8O_3j-VPjddRU8HIDTTA8" },
  {publisher: "The Oklahoman", projectName: "Variety Care Sequoyah", author: "Dana Branham", date: "October 28, 2021", previewText: "Primary care services are coming soon inside what was once an elementary school in northwest Oklahoma City, the latest development in the transformation of the building into a community health and wellness center. The former Sequoyah Elementary School...", link: "https://www.oklahoman.com/story/news/2021/10/28/new-health-center-occhd-variety-care-inside-former-sequoyah-elementary/6122555001/?fbclid=IwAR0nPCtncA3Ukgtde9TuNWKFEiSbohCShbyx7Xdsi1j-u7ehQviJ1q2WOWw"},
];

const PressPage = () => {
    return (
      <div>
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
