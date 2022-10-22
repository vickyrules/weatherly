import React from "react";
import {
    UilSun,
    UilSunset,
    UilTear,
    UilTemperature,
    UilTemperatureEmpty, UilTemperatureThreeQuarter,
    UilWatchAlt,
    UilWind
} from "@iconscout/react-unicons";

function TemperatueDetails(){
    return(
        <div >
            <div className="flex items-center justify-center py-6
        text-3xl text-white">
                <p className="font-light capitalize">weather</p>
            </div>
            <div className="flex flex-row items-center justify-between text-white py-3">
                <img className=" w-1/6" src="https://www.frozenropes.com/natick/wp-content/uploads/sites/11/2021/06/sun-transparent-400x400.png" alt=""/>
                <p className="flex flex-col text-3xl font-medium space-y-2 ml-7 "> 36 ℃</p>

                <div className="flex flex-col space-y-2 items-start">
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilTemperature size={18} className="mr-1"/>
                        Rain fall:
                        <span className="font-medium ml-1">32°</span>
                    </div>

                    <div className="flex font-light text-sm items-center justify-center">
                        <UilTear size={18} className="mr-1"/>
                        Humidity:
                        <span className="font-medium ml-1">32%</span>
                    </div>

                    <div className="flex font-light text-sm items-center justify-center">
                        <UilWind size={18} className="mr-1"/>
                        wind:
                        <span className="font-medium ml-1">11 km/s</span>
                    </div>

                </div>

            </div>


            <div className="flex flex-row items-center justify-center space-x-1 text-white text-sm py-3">
                <UilSun/>
                <p className="font-light  " >
                    Rise:
                    <span className="font-medium ml-1">06:00 A.M</span>
                </p>

                <p className="font-light px-1">|</p>

                <UilSunset/>
                <p className="font-light  " >
                    Set:
                    <span className="font-medium ml-1">07:00 P.M</span>
                </p>

                <p className="font-light px-1">|</p>

                <UilTemperature/>
                <p className="font-light  " >
                    High:
                    <span className="font-medium ml-1">10 C</span>
                </p>
                <p className="font-light px-1">|</p>

                <UilTemperatureEmpty/>
                <p className="font-light  " >
                    Low:
                    <span className="font-medium ml-1">10 C</span>
                </p>



            </div>

        </div>
    ) ;
}

export default TemperatueDetails;