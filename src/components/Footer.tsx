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
                    <p>405.340.8552</p>
                </div>
                <div className="flex-grow border-r border-gray-400 p-2">
                    <h3 className="font-bold">Sitemap</h3>
                    <a href="/" className="no-underline hover:underline block">Home</a>
                    <a href="/projects" className="no-underline hover:underline block">Projects</a>
                    <a href="/about" className="no-underline hover:underline block">About</a>
                    <a href="/press" className="no-underline hover:underline block">Press</a>
                    <a href="/contact" className="no-underline hover:underline block">Contact</a>
                </div>
                <div className="flex-grow p-2">
                    <h3 className="font-bold">Social Media</h3>
                    <a href="https://www.facebook.com/Hornbeek-Blatt-Architects-103985636299558/" className="no-underline hover:underline block">Facebook</a>
                    <a href="https://www.instagram.com/hornbeekblatt/" className="no-underline hover:underline block">Instagram</a>
                </div>
            </div>
            <div className="border-t border-gray-400 flex flex-row text-sm">
                <p className="border-r border-gray-400 px-8 py-4">"Blatt Architects" was renamed in 2021 from it's previous name "Hornbeek Blatt Architects" when David Hornbeek Retired as a partner and Anthony Blatt aquired sole ownership of the company.</p>
                <p className="mx-8 py-4">We are a multi-faceted Architecture firm who has had their feet in many types of projects. Feel free to call and ask any questions if you have a project you'd like our help bringing to life.</p>
            </div>
        </div>
    )
}

export default Footer;