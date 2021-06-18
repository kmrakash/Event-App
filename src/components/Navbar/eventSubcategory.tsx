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
    return (
        <div className="bg-gray-100">
            <Nav >
                <NavItem
                    href={`/?event_category=${event}&event_sub_category=Upcoming`}
                    setCurrentEvent={setSubEvent}
                    currentEvent={"Upcoming"}
                    thisEvent={subEvent}
                >
                    Upcoming
                </NavItem>
                <NavItem
                    href={`/?event_category=${event}&event_sub_category=Archived`}
                    setCurrentEvent={setSubEvent}
                    currentEvent={"Archived"}
                    thisEvent={subEvent}
                >
                    Archived
                </NavItem>
                <NavItem
                    href={`/?event_category=${event}&event_sub_category=All_Time_Favorite`}
                    setCurrentEvent={setSubEvent}
                    currentEvent={"All_Time_Favorite"}
                    thisEvent={subEvent}
                >
                    All Time favorite
                </NavItem>
            </Nav>
        </div>
    )
}