import React, { FunctionComponent } from "react"
import { Nav } from "./Nav"
// import { NavLink } from "react-router-dom"
import { NavItem } from "./NavItem"
import { EventSubCategory } from "./eventSubcategory"



type NavbarProps = {
    event: string | string[] | ( ( newValue: any ) => void ),
    setEvent: string | string[] | ( ( newValue: any ) => void ),
    subEvent: string | string[] | ( ( newValue: any ) => void ),
    setSubEvent: string | string[] | ( ( newValue: any ) => void )
}

export const Navbar: FunctionComponent<NavbarProps> = ( { event, setEvent, subEvent, setSubEvent } ) =>
{
    return (
        <>
            <Nav>
                <NavItem
                    href={`/?event_category=ALL_EVENT&event_sub_category=${subEvent}&page=1`}
                    currentEvent={"ALL_EVENT"}
                    thisEvent={event}
                    setCurrentEvent={setEvent}>
                    All EVENT
                </NavItem>

                <NavItem
                    href={`/?event_category=WEBINAR&event_sub_category=${subEvent}&page=1`}
                    currentEvent={"WEBINAR"}
                    thisEvent={event}
                    setCurrentEvent={setEvent}>
                    WEBINAR
                </NavItem>

                <NavItem
                    href="/?event_category=CODING_EVENT&event_sub_category=Upcoming&page=1"
                    currentEvent={"CODING_EVENT"}
                    thisEvent={event}
                    setCurrentEvent={setEvent}>
                    CODING_EVENT
                </NavItem>

                <NavItem
                    href="/?event_category=BOOTCAMP_EVENT&event_sub_category=Upcoming&page=1"
                    currentEvent={"BOOTCAMP_EVENT"}
                    thisEvent={event}
                    setCurrentEvent={setEvent}>
                    BOOTCAMP_EVENT
                </NavItem>

                <NavItem
                    href="/?event_category=WORKSHOP&event_sub_category=Upcoming&page=1"
                    currentEvent={"WORKSHOP"}
                    thisEvent={event}
                    setCurrentEvent={setEvent}>
                    WORKSHOP
                </NavItem>

            </Nav>
            <EventSubCategory event={event} subEvent={subEvent} setSubEvent={setSubEvent} />
        </>
    )
}

// 
// 
// 
// 
// 