import FreshIdea from '../../../../assets/undraw_lightbulb_moment_re_ulyo.svg'
import CuttingEdge from '../../../../assets/undraw_programmer_re_owql.svg'
import SeriousGroup from '../../../../assets/undraw_solution_mindset_re_57bf.svg'
import CustomerReview from '../../../../assets/undraw_reviews_lp8w.svg'
import DreamerPerson from '../../../../assets/undraw_dreamer_re_9tua.svg'
import SaveMoney from '../../../../assets/undraw_savings_re_eq4w.svg'
import BeneficiariesIcon from '../../../../assets/undraw_savings_re_eq4w.svg' // Ganti dengan ikon yang sesuai
import WorkersIcon from '../../../../assets/pekerja.jpg'
import LocalIcon from '../../../../assets/sukuadat.jpg'
import StakeHolderIcon from '../../../../assets/stakeholders.jpg'
import GovernmentIcon from '../../../../assets/government.jpg'

function HomeWhyUs() {
    return (
        <>
            <div id="HomeWhyUs" className='max-w-[1440px] mx-auto px-12 2xl:px-0 py-10'>
                <h2 className="drop-shadow-md text-center text-2xl md:text-3xl lg:text-4xl font-semibold text-indigo-950 py-12">Beneficiaries</h2>
                <div className="flex flex-wrap justify-center">
                    <div className="w-full md:w-1/2 lg:w-1/3 p-4 my-8 md:my-10 lg:my-12">
                        <div className="flex flex-col items-center">
                            <img className="h-32 mb-8 md:mb-10 lg:mb-12" src={WorkersIcon} alt="Workers Icon" />
                            <h3 className="text-lg lg:text-xl text-center font-bold text-indigo-950 mb-4">Workers & Families</h3>
                            <p className="text-sm lg:text-base text-center text-gray-600">Workers, union members and their families</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 p-4 my-8 md:my-10 lg:my-12">
                        <div className="flex flex-col items-center">
                            <img className="h-32 mb-8 md:mb-10 lg:mb-12" src={LocalIcon} alt="Local Communities Icon" />
                            <h3 className="text-lg lg:text-xl text-center font-bold text-indigo-950 mb-4">Local Communities</h3>
                            <p className="text-sm lg:text-base text-center text-gray-600">Local communities</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 p-4 my-8 md:my-10 lg:my-12">
                        <div className="flex flex-col items-center">
                            <img className="h-32 mb-8 md:mb-10 lg:mb-12" src={LocalIcon} alt="Indigenous Peoples Icon" />
                            <h3 className="text-lg lg:text-xl text-center font-bold text-indigo-950 mb-4">Indigenous Peoples</h3>
                            <p className="text-sm lg:text-base text-center text-gray-600">Indigenous peoples’ groups</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 p-4 my-8 md:my-10 lg:my-12">
                        <div className="flex flex-col items-center">
                            <img className="h-32 mb-8 md:mb-10 lg:mb-12" src={StakeHolderIcon} alt="Industry Players Icon" />
                            <h3 className="text-lg lg:text-xl text-center font-bold text-indigo-950 mb-4">Industry Players</h3>
                            <p className="text-sm lg:text-base text-center text-gray-600">Industry players and stakeholders</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 p-4 my-8 md:my-10 lg:my-12">
                        <div className="flex flex-col items-center">
                            <img className="h-32 mb-8 md:mb-10 lg:mb-12" src={GovernmentIcon} alt="Government Icon" />
                            <h3 className="text-lg lg:text-xl text-center font-bold text-indigo-950 mb-4">Government</h3>
                            <p className="text-sm lg:text-base text-center text-gray-600">Government</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeWhyUs