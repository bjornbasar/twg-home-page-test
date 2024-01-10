import React from "react";

export default function PageSection({children}: {children: React.ReactNode}) {
    return (
        <section className="h-lvh">{children}</section>
    )
}