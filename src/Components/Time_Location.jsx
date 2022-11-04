import react from "react";
import {formatToLocalTime } from "../Services/WeatherServices";
function timelocation({weather:{dt,timezone, name,country}}){
    const time = "hh:mm PM";
    const date = "dd-mm-yyyy";
    const day = "Monday";

    return (
        <div className="">
            <div className="flex items-center justify-center my-6">
                <span className=" m-1 text-white font-thin justify-center " >
                    <span className= " text-white font-thin justify-center mr-1" > {formatToLocalTime(dt,timezone)}</span>

                </span>

            </div>

            <div className="flex items-center justify-center my-5">
                <span className=" text-white text-4xl font-medium items-center justify-center " >{name}, {country}</span>
            </div>


        </div>
    );
}
export default timelocation;