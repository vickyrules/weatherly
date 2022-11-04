import React from "react";
import {formatToLocalTime, iconUrlFromCode} from "../Services/WeatherServices";

import {
    UilSun,
    UilSunset,
    UilTear,
    UilTemperature,
    UilTemperatureEmpty, UilTemperatureThreeQuarter,
    UilWatchAlt,
    UilWind
} from "@iconscout/react-unicons";

function TemperatueDetails({
                               weather: {
                                   details,
                                   icon,
                                   temp,
                                   temp_min,
                                   temp_max,
                                   sunrise,
                                   sunset,
                                   speed,
                                   humidity,
                                   feels_like,
                                   timezone,
                               },
                           }) {
    return (
        <div>
            <div className="flex items-center justify-center py-6
        text-3xl text-white">
                <p className="font-light capitalize">{details}</p>
            </div>
            <div className="flex flex-row items-center justify-between text-white py-3">
                <img className=" w-1/6"
                     src={iconUrlFromCode(icon)}
                     alt=""/>
                <p className="flex flex-col text-3xl font-medium space-y-2 ml-7 "> {temp.toFixed()} ℃</p>

                <div className="flex flex-col space-y-2 items-start">
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilTemperature size={18} className="mr-1"/>
                        Rain fall:
                        <span className="font-medium ml-1">{`${feels_like.toFixed()}%`}</span>
                    </div>

                    <div className="flex font-light text-sm items-center justify-center">
                        <UilTear size={18} className="mr-1"/>
                        Humidity:
                        <span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
                    </div>

                    <div className="flex font-light text-sm items-center justify-center">
                        <UilWind size={18} className="mr-1"/>
                        Wind:
                        <span className="font-medium ml-1">{`${speed} Km/hr`} </span>
                    </div>

                </div>

            </div>


            <div className="flex flex-row items-center justify-center space-x-1 text-white text-sm py-3">
                <UilSun/>
                <p className="font-light  ">
                    Rise:
                    <span className="font-light ml-1">{formatToLocalTime(sunrise,timezone, "hh:mm a")}</span>
                </p>

                <p className="font-light">|</p>

                <UilSunset/>
                <p className="font-light  ">
                    Set:
                    <span className="font-light ml-1">{formatToLocalTime(sunset,timezone, "hh:mm a")}</span>
                </p>

                <p className="font-light">|</p>

                <UilTemperature/>
                <p className="font-light  ">
                    High:
                    <span className="font-light ml-1">{temp_max}°</span>
                </p>
                <p className="font-light">|</p>

                <UilTemperatureEmpty/>
                <p className="font-light  ">
                    Low:
                    <span className="font-light ml-1">{temp_min}°</span>
                </p>
            </div>

        </div>
    );
}

export default TemperatueDetails;