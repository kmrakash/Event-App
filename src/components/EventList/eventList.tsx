import React, { FunctionComponent, useEffect, useState } from "react";
// import { useParams } from "react-router";
import useQueryString from "../../useQueryString";

type EventProps = {
    event: any,
    subEvent: any
}

export const EventList: FunctionComponent<EventProps> = ( { event, subEvent } ) =>
{



    // const param = useParams();

    useEffect( () =>
    {

    }, [] )
    const current = `${event} ${subEvent}`

    return (
        <div>
            {/* {state.event_category}
            {state.event_sub_category}
            {state.page}
            {state.tag_list} */}
            <h1>{current}</h1>

        </div>
    )
}