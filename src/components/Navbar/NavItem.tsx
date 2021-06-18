import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom"

type NavItemProps = {
    href: string,
    currentEvent?: any,
    setCurrentEvent?: any,
    thisEvent: any,
}

export const NavItem: FunctionComponent<NavItemProps> = ( { href, currentEvent, setCurrentEvent, thisEvent, children } ) =>
{
    const isActive = currentEvent === thisEvent;

    return (
        <li>
            <NavLink

                to={href}
                className={`block px-4 py-2 text-lg  ${isActive ? "text-red-400 font-extrabold" : "text-gray-600"} `}
                onClick={() => setCurrentEvent( currentEvent )}
            >
                {children}
            </NavLink>
        </li>
    )
}

