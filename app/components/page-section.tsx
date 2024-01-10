import React from "react";

export default function PageSection({ 
    id, 
    children, 
    url
}: {
    id: string,
    children: React.ReactNode, 
    url?: string
}) {
    return (
        <section id={id} className="h-lvh bg-cover bg-center flex grow w-full" style={{ backgroundImage: url }}>
            {children}
        </section>
    )
}