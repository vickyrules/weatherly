import React from "react";

function Forecast({title}){
    return (
        <div className="" >
            <div className="flex items-center justify-start mt-6">
                <p className="text-white font-medium uppercase">{title}</p>
            </div>
            <hr className="my-2" />

            <div className="flex flex-row items-center justify-between text-white ">

                <div className="flex flex-col items-center justify-center">
                    <p className="font-light text-sm">
                        03:00 P.M
                    </p>
                    <img src="https://www.frozenropes.com/natick/wp-content/uploads/sites/11/2021/06/sun-transparent.png" className="w-12 my-1" alt=""/>
                    <p className="font-medium  ">22"C</p>
                    <div className="grid grid-cols-3 divide-x"></div>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <p className="font-light text-sm">
                        03:00 P.M
                    </p>
                    <img src="https://www.frozenropes.com/natick/wp-content/uploads/sites/11/2021/06/sun-transparent.png" className="w-12 my-1" alt=""/>
                    <p className="font-medium  ">22"C</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="font-light text-sm">
                        03:00 P.M
                    </p>
                    <img src="https://www.frozenropes.com/natick/wp-content/uploads/sites/11/2021/06/sun-transparent.png" className="w-12 my-1" alt=""/>
                    <p className="font-medium  ">22"C</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="font-light text-sm">
                        03:00 P.M
                    </p>
                    <img src="https://www.frozenropes.com/natick/wp-content/uploads/sites/11/2021/06/sun-transparent.png" className="w-12 my-1" alt=""/>
                    <p className="font-medium  ">22"C</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="font-light text-sm">
                        03:00 P.M
                    </p>
                    <img src="https://www.frozenropes.com/natick/wp-content/uploads/sites/11/2021/06/sun-transparent.png" className="w-12 my-1" alt=""/>
                    <p className="font-medium  ">22"C</p>
                </div>

            </div>

        </div>
    );
}

export default  Forecast;