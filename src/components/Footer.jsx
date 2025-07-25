import { communityLinks, platformLinks, resourcesLinks } from "../constants";

const Footer = () => {
    return(
        <>
            <footer className = "mt-20 border-t py-10 border-neutral-700">
                <div className = "grid gird-cols-2 lg:gird-cols-3 gap-4">
                    <div>
                        <h3 className="text-md font-semibold mb-4">Resources</h3>
                    </div>
                </div>
            </footer>
        </>
    )  
}

export default Footer;