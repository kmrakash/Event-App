import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom"

type NavItemProps = {
    href: string,
    // isActive?: boolean | null
    currentEvent?: any,
    setCurrentEvent?: any
}

export const NavItem: FunctionComponent<NavItemProps> = ( { href, currentEvent, setCurrentEvent, children } ) =>
{

    return (
        <li>
            <NavLink

                to={href}
                className={`block px-4 py-2 text-lg text-gray-300 `}
                // activeClassName={'font-bold '}
                // activeStyle={{ color: "#fa7328" }}
                onClick={() => setCurrentEvent( currentEvent )}
            >
                {children}
            </NavLink>
        </li>
    )
}

