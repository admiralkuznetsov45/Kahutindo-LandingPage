import React, { useState } from 'react'; // Import useState
import RevoLogo from '../../../assets/revo-logo.png';

// --- Image Imports (Ensure paths are correct) ---
import AgusSalimImg from '../Experts/components/AgusSalim.png';
import SukarjoImg from '../Experts/components/Sukarjo.png';
import WahyuRamdhaniImg from '../Experts/components/WahyuRamdhani.png';
import RulitaWijayaningdyahImg from '../Experts/components/RulitaWijayaningdyah.png';
import JayadiMuhThahaImg from '../Experts/components/JayadiMuhTaha.png'; // Corrected typo? Taha vs Thaha
import NoerTjahjonoImg from '../Experts/components/NoerTjahjono.png';
import RirinRinawatiImg from '../Experts/components/RirinRinawati.png';
import IlmaAlyaniImg from '../Experts/components/IlmaAlyani.png';
import PikiranDaeliImg from '../Experts/components/PikiranDaeli.png';
// --- End Image Imports ---

// --- Import the Modal Component ---
import ProfileModal from '../Experts/ProfileModal'; // Adjust path as needed
// ----------------------------------


function Experts() {
    // --- State for Modal ---
    const [selectedMember, setSelectedMember] = useState(null); // null when closed, member object when open
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (member) => {
        setSelectedMember(member);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        // Optional: Delay clearing selectedMember for smoother transition
        setTimeout(() => setSelectedMember(null), 300); // Match transition duration
    };
    // -----------------------


    // Data profil (sekarang 9 orang) - Keep descriptions here
    const teamMembers = [
         {
            name: 'Agus Salim', imageUrl: AgusSalimImg,
            description: `Agus has worked...` // Full description
        },
        {
            name: 'Sukarjo', imageUrl: SukarjoImg,
            description: `Sukarjo is a certified...` // Full description
        },
         {
            name: 'Wahyu Ramdhani', imageUrl: WahyuRamdhaniImg,
            description: `Wahyu is a Program Manager...` // Full description
        },
        {
            name: 'Rulita Wijayaningdyah', imageUrl: RulitaWijayaningdyahImg,
            description: `Rulita has over 25 years...` // Full description
        },
        {
            name: 'Jayadi Muh Thaha', imageUrl: JayadiMuhThahaImg,
            description: `Jayadi is a union trainer...` // Full description
        },
        {
            name: 'Noer Tjahjono', imageUrl: NoerTjahjonoImg,
            description: `Tjahjo is a grassroot organizer...` // Full description
        },
        {
            name: 'Ririn Rinawati', imageUrl: RirinRinawatiImg,
            description: `Rina administers the day-to-day...` // Full description
        },
        {
            name: 'Ilma Alyani', imageUrl: IlmaAlyaniImg,
            description: `Ilma is a project manager...` // Full description
        },
        {
            name: 'Pikiran Daeli', imageUrl: PikiranDaeliImg,
            description: `Pikiran had an extensive 31 years...` // Full description
        }
    ];

    return (
        <>
            {/* Bagian Header Awal (No changes needed here) */}
            <div className='pt-32 md:pt-40 text-center px-6 sm:px-12 md:px-24 lg:px-32 xl:px-48 pb-16 bg-gradient-to-b from-[#C4C466] to-[#fcfaf5] text-gray-700'>
                {/* <img className='h-48 sm:h-56 md:h-64 inline-block mb-8' src={RevoLogo} alt="Revo Logo" /> */}
                <h1 className='text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-900 to-red-800 bg-clip-text text-transparent mt-10 mb-6'>
                    Meet Our Experts and Team
                </h1>
                <p className='mt-4 text-base md:text-lg lg:text-xl max-w-3xl mx-auto'>
                We are a team of dedicated professionals, social workers, and experts united by a clear purpose: driving social change towards a sustainable, empowered, equitable, and inclusive welfare society. Established by the Indonesian Forestry and Allied Workers Union (Kahutindo Union), our non-profit organization focuses on improving the welfare of workers and communities impacted by industries through targeted capacity building, alternative dispute resolution, local economic development, and related empowerment programs.                </p>
            </div>

            {/* Bagian Profil Tim */}
            <div className="px-6 sm:px-12 md:px-16 lg:px-24 py-16 lg:py-24 bg-gray-50">
                {/* Container untuk card profile */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8"> {/* Adjusted grid for potentially more items & smaller cards */}

                    {teamMembers.map((member, index) => (
                        // Simplified Card - Click to open modal
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center p-4 sm:p-6 text-center transform transition duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer group" // Added cursor-pointer and group for potential hover effects on children
                            onClick={() => openModal(member)} // Trigger modal on click
                        >
                            {/* Gambar Profil */}
                            <div className="flex-shrink-0 mb-3">
                                <img
                                    className="h-28 w-28 sm:h-32 sm:w-32 rounded-full object-cover border-4 border-green-200 shadow-md" // Slightly smaller image maybe
                                    src={member.imageUrl}
                                    alt={`Profile of ${member.name}`}
                                />
                            </div>
                             {/* Nama Saja */}
                            <div>
                                <h4 className="text-lg md:text-xl font-semibold text-gray-800 group-hover:text-green-700 transition-colors"> {/* Added hover effect */}
                                    {member.name}
                                </h4>
                                {/* Description is removed from here */}
                            </div>
                        </div>
                    ))}

                </div>
            </div>

             {/* Modal Rendering */}
            <ProfileModal
                isOpen={isModalOpen}
                onClose={closeModal}
                member={selectedMember}
            />
        </>
    )
}

export default Experts;