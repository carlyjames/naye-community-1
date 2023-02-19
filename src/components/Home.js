import React from "react";
import SideNav from "./SideNav";
import Body from "./Body";

const Home = () => {
    return (
        <div className="App px-2 dark:bg-[#0B2A35] ">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 mt-4  lg:px-4">
                <div className="sideNav py-2 lg:col-span-3 col-span-4 w-full rounded-lg flex flex-col items-center h-max lg:sticky top-10">
                    <SideNav />
                </div>
                <div className="body lg:col-span-9 col-span-5 lg:border  rounded-lg py-3 px-2 ">
                    <Body />
                </div>
            </div>
        </div>
    );
};

export default Home;
