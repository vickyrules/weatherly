import react from "react";
function timelocation(){
    const time = "hh:mm PM";
    const date = "dd-mm-yyyy";
    const day = "Monday";

    return (
        <div className="">
            <div className="flex items-center justify-center my-6">
                <span className=" m-1 text-white font-thin items-center justify-center " >{day},</span>
                <span className=" m-1 text-white font-thin items-center justify-center " >{date}</span>
                <span className=" m-1 text-white font-thin justify-center " >
                    <span className= " text-white font-thin justify-center mr-1" >Local time:</span>
                    {time}
                </span>

            </div>

            <div className="flex items-center justify-center my-5">
                <span className=" text-white text-4xl font-medium items-center justify-center " >Berlin, DE</span>
            </div>


        </div>
    );
}
export default timelocation;