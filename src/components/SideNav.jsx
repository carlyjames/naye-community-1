import PersonIcon from '@mui/icons-material/Person';
import PeopleIcon from '@mui/icons-material/People';
import { IconButton } from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import DevicesIcon from '@mui/icons-material/Devices';
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import LaptopIcon from "@mui/icons-material/Laptop";
import HandymanIcon from "@mui/icons-material/Handyman";



const SideNav = () => {
    return (
        <div className="text-gray-700">
            <div className="sideNav   lg:col-span-3 col-span-4 shadow-xl px-2 rounded-lg flex flex-col items-center h-max">
                <div
                    className="usercard shadow flex flex-col items-center rounded-lg w-[100%] pb-3  bg-white dark:bg-[#00CDB0]">
                    <div
                        className="border w-[80%] mt-4 mb-2 text-center flex flex items-center justify-evenly py-1 rounded-full dark:text-white  sd">
                        <div className="border h-[50px] w-[50px] rounded-full flex items-center justify-center text-2xl text-black dark:text-white">
                            <PersonIcon />
                        </div>
                        James Abraham 
                        <div className="h-[10px] w-[10px] bg-green-600 rounded-full"></div>
                    </div>
                    <div className="bg-[#00CDB0] p-2 px-8 rounded-full mb-1 text-white">
                        Developer
                    </div>
                    <p className="text-center dark:text-white w-[80%]">
                        Software Developer with a focus on building high-performance web
                        applications
                    </p>
                </div>
                <div className="userNav mt-4 shadow pb-3 flex flex-col items-center rounded-lg w-[100%] dark:text-white ">
                    <a href="#"
                        className="flex items-center justify-start px-4 py-1 w-[95%] rounded-xl hover:bg-slate-200 ease-in duration-200 dark:text-white dark:hover:text-black">
                        <div className="p-2 text-3xl border rounded-full ">
                            <IconButton className=''>
                                <EmojiPeopleIcon className='dark:text-white'  />
                            </IconButton>
                        </div>
                        <h2 className="ml-2 text-xl">My Community</h2>
                    </a>
                    <a href="#"
                        className="flex items-center justify-start px-4 py-1 w-[95%] rounded-xl hover:bg-slate-200 ease-in duration-200 dark:text-white dark:hover:text-black">
                        <div className="p-2 text-3xl border rounded-full ">
                            <IconButton>
                                <LaptopIcon className='dark:text-white' />
                            </IconButton>
                        </div>
                        <h2 className="ml-2 text-xl">My Office</h2>
                    </a>
                    <a href="#"
                        className="flex items-center justify-start px-4 py-1 w-[95%] rounded-xl hover:bg-slate-200 ease-in duration-200 dark:text-white dark:hover:text-black">
                        <div className="p-2 text-3xl border rounded-full">
                            <IconButton>
                                <HandymanIcon className='dark:text-white' />
                            </IconButton>
                        </div>
                        <h2 className="ml-2 text-xl">Tools and Services</h2>
                    </a>
                </div>
                <div className="userOptions mt-4 border py-3 flex flex-col items-center rounded-lg w-[100%] ">
                    <form className="flex flex-col items-center justify-center border py-3 px-2 rounded">
                        <input
                            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 py-3 pl-9 pr-3 shadow-sm focus:outline-none focus:ring-[#0B2A35] focus:ring-2 focus:border-none rounded-full sm:text-sm"
                            placeholder="Search for anything..." type="text" name="search" />
                        <button type="submit"
                            className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 px-10 mt-2 rounded text-white ease-in duration-200">
                            Search
                        </button>
                    </form>
                    {/* <div href="#"
                        className="p-3 w-[70%] text-center rounded-full cursor-pointer hover:text-white text-lg border text-black hover:bg-[#00CDB0] ease-in duration-300 mt-3 dark:text-white">
                    </div> */}
                    <div href="#"
                        className="p-3 w-[70%] text-center rounded-full cursor-pointer hover:text-white text-lg border text-black hover:bg-[#00CDB0] ease-in duration-300 mt-3 dark:text-white">
                        <div>Research History</div>
                    </div>
                </div>
                <div className="userHistory mt-4 border pb-10 py-3 flex flex-col items-center rounded-lg w-[100%] dark:text-white">
                    History of the research and actions.
                </div>
            </div>
        </div>
    );
}

export default SideNav;