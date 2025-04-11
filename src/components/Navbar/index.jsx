import { useState, useEffect } from 'react';
import RevoImg from "../../assets/logo_perusahaan_2.png";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { blue , red } from '@mui/material/colors';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'; // Optional: Add arrow icon
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';   // Optional: Add arrow icon

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isAboutUsSubmenuOpen, setIsAboutUsSubmenuOpen] = useState(false); // Desktop submenu state

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };


        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // const scrollToSection = (sectionId) => {
    //     const section = document.getElementById(sectionId);
    //     if (section) {
    //         section.scrollIntoView({ behavior: 'smooth' });
    //     }
    // };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Function to close desktop submenu (can be used onClick of submenu items if needed)
    const closeDesktopSubmenu = () => {
        setIsAboutUsSubmenuOpen(false);
   }

   // Function to close mobile menu AND desktop submenu (used for mobile links)
   const handleMobileLinkClick = () => {
       setIsOpen(false);
       closeDesktopSubmenu(); // Also close desktop if somehow open
   }


    const navLinkClasses = "my-auto mx-1 py-4 px-4 transition-colors duration-300 text-black hover:text-gray-300 flex items-center"; // Adjusted padding/margin slightly
    const mobileNavLinkClasses = "block py-2 transition-colors duration-300 text-black hover:text-gray-300";


    return (
        <>
            {/* Navbar Background */}
            <div className={`fixed z-20 w-full transition-colors duration-300 ${isScrolled || isOpen ? 'bg-[#C4C466] shadow-md' : 'bg-[transparent]'}`}>
                {/* Navbar Container */}
                <div className="flex justify-between items-center px-6 md:px-12 2xl:px-0 max-w-[1440px] mx-auto h-16"> {/* Added items-center and consistent height */}

                    {/* Logo */}
                    <div className="flex-shrink-0"> {/* Prevents shrinking */}
                        <Link to={"/"} onClick={() => { setIsOpen(false); closeDesktopSubmenu(); }}>
                            <img className="h-12 md:h-14 p-1" src={RevoImg} alt="Revo Creative Company Logo" /> {/* Adjusted size/padding */}
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button onClick={toggleMenu} className="flex items-center px-3 py-2 text-white hover:text-gray-300"> {/* White icon for better contrast on bg */}
                            <MenuIcon />
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <div className={`hidden lg:flex items-center space-x-2`}> {/* Added spacing */}
                        <Link to={"/"} className={navLinkClasses} onClick={closeDesktopSubmenu}>
                           Home
                        </Link>
                        <Link to={"/portfolio"} className={navLinkClasses} onClick={closeDesktopSubmenu}>
                            Portfolio
                        </Link>
                        <Link to={"/contact-us"} className={navLinkClasses} onClick={closeDesktopSubmenu}>
                           Contact Us
                        </Link>

                        {/* About Us Desktop Dropdown */}
                        <div
                            className="relative my-auto" // Container for hover detection
                            onMouseEnter={() => setIsAboutUsSubmenuOpen(true)}
                            onMouseLeave={() => setIsAboutUsSubmenuOpen(false)}
                        >
                            <Link
                                to="/about-us" // Main link still navigates
                                className={navLinkClasses}
                                // Optional: prevent default if you only want hover dropdown
                                // onClick={(e) => e.preventDefault()}
                            >
                                About Us
                                {/* Optional: Add dropdown arrow */}
                                {isAboutUsSubmenuOpen
                                    ? <KeyboardArrowUpIcon fontSize="small" className="ml-1" />
                                    : <KeyboardArrowDownIcon fontSize="small" className="ml-1" />
                                }
                            </Link>

                            {/* Desktop Submenu Panel */}
                            {isAboutUsSubmenuOpen && (
                                <div
                                    className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg py-1 z-30" // Positioned below, white background
                                    onMouseEnter={() => setIsAboutUsSubmenuOpen(true)} // Keep open when hovering submenu
                                    onMouseLeave={() => setIsAboutUsSubmenuOpen(false)} // Close when leaving submenu
                                >
                                    <Link
                                        to="/about-us/experts" // Define your route
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#e4e4b8] hover:text-black" // Match colors
                                        onClick={closeDesktopSubmenu} // Close submenu on click
                                    >
                                        Experts and Teams
                                    </Link>
                                    <Link
                                        to="/about-us/governance" // Define your route
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#e4e4b8] hover:text-black" // Match colors
                                        onClick={closeDesktopSubmenu} // Close submenu on click
                                    >
                                        Governance
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Panel */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                     {/* Added background to mobile dropdown for consistency */}
                    <div className="bg-[#transparent] px-6 md:px-12 py-2">
                        <Link to={"/"} className={mobileNavLinkClasses} onClick={handleMobileLinkClick}>
                           Home
                        </Link>
                        <Link to={"/portfolio"} className={mobileNavLinkClasses} onClick={handleMobileLinkClick}>
                            Portfolio
                        </Link>
                        <Link to={"/contact-us"} className={mobileNavLinkClasses} onClick={handleMobileLinkClick}>
                            Contact Us
                        </Link>
                        {/* About Us Section in Mobile */}
                        <Link to={"/about-us"} className={mobileNavLinkClasses} onClick={handleMobileLinkClick}>
                            About Us (Main)
                        </Link>
                         {/* Indented Submenu Items */}
                        <div className="pl-4">
                             <Link to={"/about-us/experts"} className={mobileNavLinkClasses} onClick={handleMobileLinkClick}>
                                Experts and Teams
                            </Link>
                            <Link to={"/about-us/governance"} className={mobileNavLinkClasses} onClick={handleMobileLinkClick}>
                                Governance
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button - Placed outside the main navbar div */}
            {isScrolled && ( // Only show when scrolled
                 <div
                    onClick={scrollToTop}
                    className='cursor-pointer fixed z-10 text-right right-8 bottom-8 lg:right-16 lg:bottom-16 inline-block bg-[#C4C466] rounded-full p-3 shadow-lg hover:bg-[#b8b85e] transition-colors' // Adjusted position/size/color
                 >
                    <ArrowUpwardIcon sx={{ color: red[50] }} />
                </div>
            )}
        </>
    );
}

export default Navbar;
