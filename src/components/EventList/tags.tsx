import React from "react";

function Tag ( { children }: { children: any } )
{
    return (
        <div className="mb-2 mr-2 py-1 px-3.5 text-sm rounded" style={{ color: "#616161", background: "#eee", height: "max-content" }}>
            {children}
        </div>
    )
}

export default Tag;