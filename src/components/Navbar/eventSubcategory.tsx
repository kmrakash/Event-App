import React, { FunctionComponent } from "react"
import { Nav } from "./Nav"
import { NavItem } from "./NavItem"
import useQueryString from "../../useQueryString"

type EventProps = {
    event: string | string[] | ( ( newValue: any ) => void ),
    // setEvent: string | string[] | ( ( newValue: any ) => void ),
    subEvent: string | string[] | ( ( newValue: any ) => void ),
    setSubEvent: string | string[] | ( ( newValue: any ) => void )
}

export const EventSubCategory: FunctionComponent<EventProps> = ( { event, subEvent, setSubEvent } ) =>
{
    // const [ event, _ ] = useQueryString( "event_category", "ALL_EVENTS" );
    // const [ subevent, setSubEvent ] = useQueryString( "event_sub_category", "Upcoming" );

    // console.log( "eventsubcategory", subevent );

    return (
        <Nav>
            <NavItem href={`/?event_category=${event}&event_sub_category=Upcoming`} setCurrentEvent={setSubEvent} currentEvent={"Upcoming"} >Upcoming</NavItem>
            <NavItem href={`/?event_category=${event}&event_sub_category=Archived`} setCurrentEvent={setSubEvent} currentEvent={"Archived"} >Archived</NavItem>
            <NavItem href={`/?event_category=${event}&event_sub_category=All_Time_Favorite`} setCurrentEvent={setSubEvent} currentEvent={"All_Time_Favorite"} >All Time favorite</NavItem>
        </Nav>
    )
}