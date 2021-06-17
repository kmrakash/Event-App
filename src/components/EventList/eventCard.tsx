import React from "react";

function Tag ( { children }: { children: any } )
{
    return (
        <div className="mb-2 mr-2 py-1 px-3.5 text-sm rounded-md" style={{ color: "#616161", background: "#eee", height: "max-content" }}>
            {children}
        </div>
    )
}

function TooltipImg ()
{
    return (
        <div className="relative flex flex-col items-center group">
            <img className="rounded-full h-6 w-6 flex items-center justify-center object-contain border border-solid" src="https://lh3.googleusercontent.com/a-/AOh14GgBDIyt46zZtYbG3rDyFnwsDiUo5HRwn6s3TdHr=s96-c" />
            <div className="absolute bottom-0 flex flex-col items-center hidden mb-6 group-hover:flex">
                <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">A top aligned tooltip.</span>
                <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
            </div>
        </div>
    )
}


function EventCard ()
{
    return (
        <article className="overflow-hidden rounded-lg shadow-lg text-gray-500 text-sm font-normal cursor-pointer">

            <header className="relative">
                <div className="">

                    <img alt="Placeholder" className=" h-auto w-full" src="https://files.codingninjas.in/scolarship-mobile-version-event-10896.jpg" />
                </div>

                <div className="absolute flex  bottom-2 right-2 py-2 px-3 rounded-sm" style={{ color: "#121212", background: "#fff" }}>

                    <span className=" relative top-1 flex h-3 w-3 mr-1">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>

                    <p >Registration open till 18 jun , 7:00 PM</p>
                </div>

            </header>

            <main className="p-4">

                <div className="mb-2 border-b-2 border-solid">
                    <h1 className="text-lg font-bold min-h-50 mb-2 text-gray-900">
                        Coding Ninjas Admission & Scholarship Test june'21
                    </h1>
                    <div className="mb-2 border-1 border-solid flex">
                        <div className="flex flex-col mr-3">
                            <p className=" font-normal">Starts on</p>
                            <p className="font-semibold text-gray-800">09:00 PM , 19 Jun 2021</p>
                        </div>

                        <div className="flex flex-col mr-3">
                            <p className="font-normal">Entry Fee</p>
                            <p className="font-semibold text-gray-800">Free</p>
                        </div>

                        <div className="flex flex-col mr-3">
                            <p className="font-normal">Venue</p>
                            <p className="font-semibold text-gray-800">Online , CodeZen</p>
                        </div>
                    </div>
                </div>

                <div className="text-gray-700 overflow-ellipsis overflow-hidden text-sm h-14">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia numquam maxime sed, id perspiciatis, quas praesentium impedit eligendi saepe amet at earum rem aspernatur? Ab saepe suscipit sit esse aspernatur.
                </div>

                <div className="flex flex-wrap h-16 mt-5">
                    <Tag> <p>Scholarship</p> </Tag>
                    <Tag> Scholarship </Tag>
                    <Tag> Scholarship </Tag>
                    <Tag> Scholarship </Tag>
                </div>
            </main>

            <footer className="flex justify-between py-2 min-h-8 border-t-2 border-solid">

                <div className="ml-3">
                    <div className="flex">
                        <TooltipImg />
                        <TooltipImg />
                        <TooltipImg />
                        <TooltipImg />
                        <TooltipImg />
                    </div>
                    <span>and <strong className="text-gray-900">82</strong> others registered</span>
                </div>

                <div>
                    <img className="h-8" src="https://files.codingninjas.in/0000000000001272.png" />
                </div>
            </footer>

        </article>
    )
}

export default EventCard;