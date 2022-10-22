import React from "react";
import {UilMapMarker, UilSearchAlt} from "@iconscout/react-unicons";

function Inputs(){
    return (
        <div className="flex flex-row justify-content-center my-6 ">
            <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
                <input
                    type="text"
                    placeholder="Search..."
                    className="texts-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"/>
                <UilSearchAlt size={28} className="text-white cursor-pointer transition ease-out hover:scale-125" />
                <UilMapMarker size={28} className="text-white cursor-pointer transition ease-out hover:scale-125" />

            </div>

            <div className="flex flex-row w-1/4 items-center justify-center">
                <button name="metric" className="text-xl text-white font-light cursor-pointer transition ease-out hover:scale-125">℃</button>
                <span className="text-xl text-white font-light m-2" > | </span>
                <button name="imperial" className="text-xl text-white font-light cursor-pointer transition ease-out hover:scale-125">℉</button>
            </div>

        </div>
    )
}

export default Inputs;