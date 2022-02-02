import Link from 'next/link';

const Footer = () => {
    return(
        <div>
            <div className="bg-gray-100 h-8 py-1 px-2 border-t border-gray-400">
                <p>Blatt Architects</p>
            </div>
            <div className="w-full border-t border-gray-400 flex flex-row">
                <div className="flex-grow border-r border-gray-400 p-2">
                    <h3 className="font-bold">Location</h3>
                    <p>101 S Broadway</p>
                    <p>Suite: #200</p>
                    <p>Edmond, OK 73034</p>
                </div>
                <div className="flex-grow border-r border-gray-400 p-2">
                    <h3 className="font-bold">Contact</h3>
                    <p>405.340.8552 phone</p>
                    <p>405.340.5707 fax</p>
                </div>
                <div className="flex-grow border-r border-gray-400 p-2">
                    <h3 className="font-bold">Sitemap</h3>
                    <LinkItem location="/" text="Home" />
                    <LinkItem location="/projects" text="Projects" />
                    <LinkItem location="/about" text="About" />
                    <LinkItem location="/press" text="Press" />
                    <LinkItem location="/team" text="Team" />
                    <LinkItem location="/contact" text="Contact" />
                </div>
                <div className="flex-grow p-2">
                    <h3 className="font-bold">Social Media</h3>
                    <a href="https://www.facebook.com/Hornbeek-Blatt-Architects-103985636299558/" className="no-underline hover:underline block">Facebook</a>
                    <a href="https://www.instagram.com/blattarch/" className="no-underline hover:underline block">Instagram</a>
                </div>
            </div>
        </div>
    )
}

const LinkItem = ({location, text}: {location: string, text: string}) => {
    return (
        <Link href={location} passHref>
            <p className="no-underline hover:underline block">{text}</p>
        </Link>
    );
}

export default Footer;
