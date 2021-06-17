import React, { FunctionComponent } from "react";
import Tag from "./tags";
import { EventCardProps, User } from "../../global"



const TooltipImg: FunctionComponent<User> = ( { name, image_url } ) =>
{
    return (
        <div className="relative flex flex-col items-center group">
            <img className="rounded-full h-6 w-6 flex items-center justify-center object-contain border border-solid" src={image_url} />
            <div className="absolute bottom-0 flex flex-col items-center hidden mb-6 group-hover:flex">
                <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">{name}</span>
                <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
            </div>
        </div>
    )
}


// type EventCardProps = {
//     id: string,
//     name: string,
//     short_desc: string,
//     cover_picture: string,
//     registration_start_time: number,
//     registration_end_time: number,
//     event_start_time: number,
//     event_end_time: number,
//     venue: string,
//     fees: number,
//     currency: string,
//     registration_status: string,
//     user_already_registered: number | null,
//     start_time: number,
//     end_time: number,
//     registered_users: {
//         top_users: Array<User>,
//         other_users_count: number,
//         show_users_count: boolean
//     }
//     seats_left: number,
//     seats_filled: number,
//     slug: string,
//     orderable_key: string,
//     has_started: boolean,
//     highlight_event: boolean,
//     card_tags: Array<string>,
//     mobile_cover_picture: string,
//     is_college_specific: boolean,
//     event_category: string,
//     event_sub_category: string
// }

export const EventCard: FunctionComponent<EventCardProps> = ( { ...event } ) =>
{
    console.log( "Event card", event );

    if ( !event.id ) return (
        <>
            <h1>No Event</h1>
        </>
    )

    console.log( ( new Date( event.registration_end_time ) ).toString() )
    console.log( ( new Date( event.registration_end_time ) ).toUTCString() )

    return (
        <article className="overflow-hidden rounded-lg shadow-lg text-gray-500 text-sm font-normal cursor-pointer">

            <header className="relative">
                <div className="">

                    <img alt="Event cover picture" className=" h-auto w-full" src={event.cover_picture} />
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
                        {event.name}
                    </h1>
                    <div className="mb-2 border-1 border-solid flex">
                        <div className="flex flex-col mr-3">
                            <p className=" font-normal">Starts on</p>
                            <p className="font-semibold text-gray-800">09:00 PM , 19 Jun 2021</p>
                        </div>

                        <div className="flex flex-col mr-3">
                            <p className="font-normal">Entry Fee</p>
                            <p className="font-semibold text-gray-800">{`${event.currency} ${event.fees}`}</p>
                        </div>

                        <div className="flex flex-col mr-3">
                            <p className="font-normal">Venue</p>
                            <p className="font-semibold text-gray-800">{event.venue}</p>
                        </div>
                    </div>
                </div>

                <div className="text-gray-700 overflow-ellipsis overflow-hidden text-sm h-14">
                    {event.short_desc}
                </div>

                <div className="flex flex-wrap h-16 mt-5">

                    {
                        event.card_tags.length && event.card_tags.map( ( tag, idx ) =>
                        {
                            return (
                                <Tag key={tag + idx}>
                                    {tag}
                                </Tag>
                            )
                        } )
                    }
                </div>
            </main>

            <footer className="flex justify-between py-2 min-h-8 border-t-2 border-solid">

                <div className="ml-3">
                    <div className="flex">
                        {
                            event.registered_users.top_users.length && event.registered_users.top_users.map( ( usr, idx ) =>
                            {
                                return (
                                    <TooltipImg
                                        key={idx + usr.name}
                                        name={usr.name}
                                        image_url={usr.image_url}
                                    />
                                )
                            } )
                        }
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

// export default EventCard;