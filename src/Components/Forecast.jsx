import React from "react";
import { iconUrlFromCode } from "../Services/WeatherServices";
function Forecast({title, items}){
    return (
        <div className="" >
            <div className="flex items-center justify-start mt-6">
                <p className="text-white font-medium uppercase">{title}</p>
            </div>
            <hr className="my-2" />

            <div className="flex flex-row items-center justify-between text-white ">
                {
                    items.map((item)=>(
                        <div className="flex flex-col items-center justify-center">
                            <p className="font-light text-sm">
                                {item.title}
                            </p>
                            <img src={iconUrlFromCode(item.icon)} alt=""/>
                            <p className="font-medium  ">{item.temp}°</p>
                            <div className="grid grid-cols-3 divide-x"></div>
                        </div>
                    ))

                }



            </div>

        </div>
    );
}

export default  Forecast;