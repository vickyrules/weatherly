import React from "react";

function TopButtons(){
    const  cities = [

        {
            id:1,
            title: 'London'
        },
        {
            id:2,
            title: 'Sydney'
        },
        {
            id:3,
            title: 'Tokyo'
        },
        {
            id:4,
            title: 'Delhi'
        },
        {
            id:5,
            title: 'New York'
        },
        // {
        //     id:6,
        //     title: 'Mumbai'
        // },
        // {
        //     id:5,
        //     title: 'Shanghai'
        // },
    ];

    return(
        <div className="flex items-center justify-around my-6">
            {
                cities.map((city) => (
                    <button key={city.id} className="text-white text-lg font-medium">{city.title}</button>
                ))
            }
        </div>
    );
}
export  default TopButtons;