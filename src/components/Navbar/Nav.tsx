import React, { FunctionComponent } from "react"


type INav = {

};

export const Nav: FunctionComponent<INav> = ( { children } ) =>
{
    return (
        <nav className="p-4">
            <ul className="flex space-x-2">
                {children}
            </ul>
        </nav>
    )
}

