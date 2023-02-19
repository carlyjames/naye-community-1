import Switcher from "./Switcher";
import { IconButton, Typography } from "@mui/material";
import React from "react";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import DvrIcon from "@mui/icons-material/Dvr";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import LaptopIcon from "@mui/icons-material/Laptop";
import HandshakeIcon from "@mui/icons-material/Handshake";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
// import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import ListAltIcon from "@mui/icons-material/ListAlt";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HandymanIcon from "@mui/icons-material/Handyman";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import AppSettingsAltIcon from "@mui/icons-material/AppSettingsAlt";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import PsychologyIcon from "@mui/icons-material/Psychology";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import ChairIcon from "@mui/icons-material/Chair";

import community from "./images/images/communityAll.png";

import * as ReactDOM from "react-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const Body = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div className="w-full text-gray-700 dark:text-white ">
        <div className=" mt-4 border pb-10 py-3 flex flex-col items-center rounded-lg  px-5 ">
          Good Morning dear
          <p className="underline underline-offset-8 text-blue-500">
            James Abraham 
          </p>
          <p className="mt-4">
            Welcome to working space KINLINK NAYE. Follow the presentation
            thereafter to discover the menus and accessible actions.
          </p>
        </div>

        <div className="mt-8 lg:mx-10  grid lg:grid-cols-2 gap-4 lg:gap-7 ">
          <div
            className=" mainCard bg-gradient-to-r from-cyan-500  text-white hover:text-black to-blue-500 flex flex-col justify-around px-3 lg:w-[400px] h-[300px] bg-[#0B2A35] w-full  shadow lg:hover:-translate-y-4 ease-in duration-300 hover:shadow-xl dark:from-[#00CDB0] dark:to-[#00CDB0]"
            style={{ borderRadius: "50px" }}
          >
            <div className="flex items-center justify-start">
              <div className="border h-[70px] w-[70px] rounded-full bg-white flex items-center justify-center text-2xl">
                <IconButton>
                  <EmojiPeopleIcon
                    className="scale-150 text-[#00CDB0]
                  
                  "
                  />
                </IconButton>
              </div>
              <p className="mx-2 text-xl header">My Community</p>
            </div>

            <div className="">
              <div className="flex justify-around mt-8">
                <div className="flex flex-col items-center justify-center ease-in duration-200">
                  <a
                    href="#"
                    className="hoverForBottom border lg:h-[70px] lg:w-[70px] backdrop-blur-sm bg-white h-[60px] w-[60px] p-4 px-3 rounded-full flex items-center justify-center text-2xl hover:scale-[0.9] ease-in duration-200"
                  >
                    <IconButton>
                      <DocumentScannerIcon className="scale-150 text-gray-700" />
                    </IconButton>
                  </a>
                  <p className="fromBottom border-b-4 border-[#00CDB0] text-sm ease-in duration-300">
                    My Info
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center ease-in duration-200">
                  <a
                    href="#"
                    className="hoverForBottom border lg:h-[70px] lg:w-[70px] backdrop-blur-sm bg-white h-[60px] w-[60px] p-4 px-3 rounded-full flex items-center justify-center text-2xl hover:scale-[0.9] ease-in duration-200"
                  >
                    <IconButton>
                      <Diversity1Icon className="scale-150 text-gray-700" />
                    </IconButton>
                  </a>
                  <p className="fromBottom border-b-4 border-[#00CDB0] text-sm ease-in duration-300">
                    My Teams
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center ease-in duration-200">
                  <a
                    href="#"
                    className="hoverForBottom border lg:h-[70px] lg:w-[70px] backdrop-blur-sm bg-white h-[60px] w-[60px] p-4 px-3 rounded-full flex items-center justify-center text-2xl hover:scale-[0.9] ease-in duration-200"
                  >
                    <IconButton>
                      <DvrIcon className="scale-150 text-gray-700" />
                    </IconButton>
                  </a>
                  <p className="fromBottom border-b-4 border-[#00CDB0] text-sm ease-in duration-200">
                    My Network
                  </p>
                </div>

                <div
                  className="flex flex-col items-center justify-center ease-in duration-200"
                  id="demo-positioned-button"
                  aria-controls={open ? "demo-positioned-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <div
                    className="hoverForBottom systemSettings border lg:h-[70px] lg:w-[70px] backdrop-blur-sm bg-white h-[60px] w-[60px] p-4 px-3 rounded-full flex items-center justify-center text-2xl hover:scale-[0.9] ease-in duration-200"
                  >
                    <IconButton>
                      <DisplaySettingsIcon className="scale-150 text-gray-700" />
                    </IconButton>
                  </div>
                  <p className="fromBottom border-b-4 border-[#00CDB0] text-sm ease-in duration-200">
                    My Settings
                  </p>
                </div>
                <Menu
                  id="demo-positioned-menu"
                  aria-labelledby="demo-positioned-button"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                >
                  <MenuItem onClick={handleClose} className="h-auto">
                    <Switcher className="text-black dark:text-black bg-black" />
                  </MenuItem>
                </Menu>
              </div>
            </div>
            <div className="lg:hoverCardsDiv"></div>
          </div>

          <img src={community} className="hidden lg:block" alt="" />

          <div
            className="mainCard bg-gradient-to-r from-cyan-500 text-white hover:text-black to-blue-500 flex flex-col justify-around px-3 lg:w-[400px] h-[300px] bg-[#0B2A35] w-full rounded-xl shadow lg:hover:-translate-y-4 ease-in duration-300 hover:shadow-xl  dark:bg-gradient dark:from-[#00CDB0] dark:to-[#00CDB0] pt-5"
            style={{ borderRadius: "50px" }}
          >
            <div className="flex items-center justify-start">
              <div className="border h-[70px] w-[70px] bg-white rounded-full flex items-center justify-center text-2xl">
                <IconButton>
                  <LaptopIcon className="scale-150 text-[#00CDB0]" />
                </IconButton>
              </div>
              <p className="mx-2 text-xl  header">My Office</p>
            </div>

            <div className="">
              <div className="grid grid-cols-4 justify-center mt-8">
                <div className="flex flex-col items-center justify-center ease-in duration-200">
                  <a
                    href="#"
                    className="hoverForBottom border lg:h-[70px] bg-white lg:w-[70px] h-[60px] w-[60px] p-4 px-3 rounded-full flex items-center justify-center text-2xl hover:scale-[0.9] ease-in duration-200"
                  >
                    <IconButton>
                      <HandshakeIcon className="scale-150 text-gray-700" />
                    </IconButton>
                  </a>
                  <p className="fromBottom border-b-4 border-[#00CDB0] ease-in text-xs duration-200 w-max">
                    My Collaborations
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center ease-in duration-200">
                  <a
                    href="#"
                    className="hoverForBottom border lg:h-[70px] bg-white lg:w-[70px] h-[60px] w-[60px] p-4 px-3 rounded-full flex items-center justify-center text-2xl hover:scale-[0.9] ease-in duration-200"
                  >
                    <IconButton>
                      <ListAltIcon className="scale-150 text-gray-700" />
                    </IconButton>
                  </a>
                  <p className="fromBottom border-b-4 border-[#00CDB0] ease-in text-sm duration-200 w-max">
                    My Business
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center ease-in duration-200">
                  <a
                    href="#"
                    className="hoverForBottom border lg:h-[70px] bg-white lg:w-[70px] h-[60px] w-[60px] p-4 px-3 rounded-full flex items-center justify-center text-2xl hover:scale-[0.9] ease-in duration-200"
                  >
                    <IconButton>
                      <AutoGraphIcon className="scale-150 text-gray-700" />
                    </IconButton>
                  </a>
                  <p className="fromBottom border-b-4 border-[#00CDB0] ease-in text-sm duration-200 w-max">
                    My Challenges
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center ease-in duration-200 w-max">
                  <a
                    href="#"
                    className="hoverForBottom border lg:h-[70px] bg-white lg:w-[70px] h-[60px] w-[60px] p-4 px-3 rounded-full flex items-center justify-center text-2xl hover:scale-[0.9] ease-in duration-200"
                  >
                    <IconButton>
                      <CalendarMonthIcon className="scale-150 text-gray-700" />
                    </IconButton>
                  </a>
                  <p className="fromBottom border-b-4 border-[#00CDB0] ease-in text-sm duration-200 w-max">
                    My Agenda
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:hoverCardsDiv"></div>
          </div>

          <div
            className="mainCard bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col text-white hover:text-black justify-around px-3 lg:w-[400px] h-[300px] bg-[#0B2A35] w-full p-2 rounded-xl shadow lg:hover:-translate-y-4 ease-in duration-300 hover:shadow-xl  dark:bg-gradient dark:from-[#00CDB0] dark:to-[#00CDB0] pt-4"
            style={{ borderRadius: "50px" }}
          >
            <div className="flex items-center justify-start">
              <div className="border h-[70px] w-[70px] rounded-full bg-white flex items-center justify-center text-2xl">
                <IconButton>
                  <HandymanIcon className="scale-150 text-[#00CDB0] text-gray-700" />
                </IconButton>
              </div>
              <p className="mx-2 text-xl header ">My Tools and Services</p>
            </div>

            <div className="">
              <div className="grid grid-cols-4 justify-center mt-8">
                <div>
                  <a
                    href="#"
                    className="hoverForBottom border lg:h-[70px] lg:w-[70px] bg-white h-[60px] w-[60px] p-4 px-3 rounded-full flex items-center justify-center text-2xl hover:scale-[0.9] ease-in duration-200"
                  >
                    <IconButton>
                      <AppSettingsAltIcon className="scale-150 text-gray-700" />
                    </IconButton>
                  </a>
                  <p className="fromBottom border-b-4 border-[#00CDB0] ease-in text-sm duration-200 w-max ">
                    My Tools
                  </p>
                </div>
                
                <div>
                  <a
                    href="#"
                    className="hoverForBottom border lg:h-[70px] lg:w-[70px] bg-white h-[60px] w-[60px] p-4 px-3 rounded-full flex items-center justify-center text-2xl hover:scale-[0.9] ease-in duration-200"
                  >
                    <IconButton>
                      <AddBusinessIcon className="scale-150 text-gray-700" />
                    </IconButton>
                  </a>
                  <p className="fromBottom border-b-4 border-[#00CDB0] ease-in text-sm duration-200 w-max ">
                    My Purchases
                  </p>
                </div>
                <div>
                  <a
                    href="#"
                    className="hoverForBottom border lg:h-[70px] lg:w-[70px] bg-white h-[60px] w-[60px] p-4 px-3 rounded-full flex items-center justify-center text-2xl hover:scale-[0.9] ease-in duration-200"
                  >
                    <IconButton>
                      <NewspaperIcon className="scale-150 text-gray-700" />
                    </IconButton>
                  </a>
                  <p className="fromBottom border-b-4 border-[#00CDB0] ease-in text-sm duration-200 w-max ">
                    My News
                  </p>
                </div>
                <div>
                  <a
                    href="#"
                    className="hoverForBottom border lg:h-[70px] lg:w-[70px] bg-white h-[60px] w-[60px] p-4 px-3 rounded-full flex items-center justify-center text-2xl hover:scale-[0.9] ease-in duration-200"
                  >
                    <IconButton>
                      <ChairIcon className="scale-150 text-gray-700" />
                    </IconButton>
                  </a>
                  <p className="fromBottom border-b-4 border-[#00CDB0] ease-in text-sm duration-200 w-max ">
                    Relaxing Salon
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:hoverCardsDiv"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
