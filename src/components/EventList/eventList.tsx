import React, { FunctionComponent, useEffect, useState } from "react";
import { EventCard } from "./eventCard";
import Tag from "./tags";
import axios from "axios";
import { EventCardProps } from "../../global"
import moment from "moment";

type EventProps = {
    event: any,
    subEvent: any
    eventTags: Array<string>
    initialQueryTag?: any
    setQueryTag: any
}

export const EventList: FunctionComponent<EventProps> = ( { event, subEvent, eventTags, initialQueryTag, setQueryTag } ) =>
{

    const convertToArray = [ initialQueryTag.split( "," ) ];
    // console.log( "coming on mount", [ initialQueryTag.split( "," ) ] );
    const [ selectedTag, setSelectedTag ] = useState<Array<string>>( [ ...convertToArray ] );
    const [ eventsArray, setEventsArray ] = useState<EventCardProps[] | []>( [] );
    const [ pageCount, setPageCount ] = useState( 0 );


    // const current = `${event} ${subEvent}`

    const handleChange = ( e: any ) =>
    {
        // console.log( "intialQueryTag", initialQueryTag );

        let options = selectedTag;
        let index;
        if ( e.target.checked )
        {
            options.push( e.target.value );
            e.target.parentNode.style.backgroundColor = "#fa7328";
            e.target.parentNode.style.color = "#fff"
        }
        else
        {
            index = options.indexOf( e.target.value );
            options.splice( index, 1 );
            e.target.parentNode.style.backgroundColor = "#eee";
            e.target.parentNode.style.color = "#616161"
        }
        setSelectedTag( [ ...options ] );
        let joinQuery = options.join( "" );
        setQueryTag( joinQuery );
    }

    useEffect( () =>
    {
        // console.log( "tag list", selectedTag );

        (
            async function fetchEvents ()
            {
                try
                {

                    const response = await axios.get( "/events", {
                        params: {
                            event_category: event,
                            event_sub_category: subEvent,
                            tag_list: selectedTag.join(),
                            offset: 0
                        }
                    } )

                    if ( response.statusText === 'OK' )
                    {
                        // console.log( "event data", response.data.data );
                        const { events, page_count } = response.data.data;
                        setEventsArray( events );
                        setPageCount( page_count );
                    }


                } catch ( error )
                {
                    console.log( "failed to fetch events", error );
                }


            }
        )();
    }, [ event, subEvent, selectedTag ] );


    // sort the array on basis of start time
    eventsArray.sort( ( a, b ) => ( a.start_time > b.start_time ) ? 1 : ( ( a.start_time > b.start_time ) ? -1 : 0 ) );

    return (
        <>
            <div className="container flex my-12 mx-auto px-4 md:px-12">
                <div className="grid grid-cols-2 gap-4 w-5/6">
                    {
                        eventsArray.length ? eventsArray.map( ( event, idx ) =>
                        {
                            const todayDate = moment().format( 'h:mm a, Do MM YYYY' );
                            const registerationEndTime = moment( event.registration_end_time * 1000 ).format( 'h:mm a, Do MMMM YYYY' );
                            const isArchived = registerationEndTime > todayDate;
                            if ( subEvent === "Archived" && isArchived )
                            {
                                return (
                                    <EventCard
                                        key={idx}
                                        {...event}
                                    />
                                )
                            }

                            else if ( subEvent === "Upcoming" && !isArchived )
                                return (
                                    <EventCard
                                        key={idx}
                                        {...event}
                                    />
                                )
                            else if ( subEvent === "All_Time_Favorite" )
                                return (
                                    <EventCard
                                        key={idx}
                                        {...event}
                                    />
                                )

                        } ) : (
                            <>
                                <div className="grid place-items-center">
                                    <h1 className="text-3xl">No Events</h1>
                                </div>
                            </>
                        )
                    }
                </div>
                <div>
                    <form className="ml-8">
                        <span className="font-semibold mb-2">TAGS</span>
                        <div className="grid col-auto">
                            {
                                eventTags.length ? eventTags.map( ( tagTitle, index ) =>
                                {
                                    return (
                                        <label key={index + tagTitle} htmlFor={tagTitle} className="cursor-pointer mb-2">
                                            <Tag>
                                                <input
                                                    type="checkbox"
                                                    className="absolute -left-full bg-red-100"
                                                    value={tagTitle}
                                                    name={tagTitle}
                                                    id={tagTitle}

                                                    onChange={handleChange} />
                                                {tagTitle}
                                            </Tag>
                                        </label>
                                    )
                                } ) : (
                                    <>
                                        <div className="text-3xl">
                                            <span>Fetching ....</span>
                                        </div>
                                    </>
                                )
                            }
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}