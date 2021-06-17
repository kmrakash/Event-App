import React, { FunctionComponent } from "react";
import EventCard from "./eventCard";
import Tags from "./tags";

type EventProps = {
    event: any,
    subEvent: any
}

export const EventList: FunctionComponent<EventProps> = ( { event, subEvent } ) =>
{


    const current = `${event} ${subEvent}`

    return (
        <>
            <div className="container my-12 mx-auto px-4 md:px-12">
                <div className="grid grid-cols-3 gap-4">

                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />


                </div>
            </div>

        </>
    )
}