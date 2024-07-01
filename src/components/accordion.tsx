"use client";

import { useState } from "react";

const Accordion = ({title} : {title: string}) => {
    const [isOpen, setOpen] = useState(false);
    const onHeaderClick = () => setOpen(!isOpen);

    return (
        <div className="flex flex-col max-w-full">
            <div className="text-2xl flex items-center cursor-pointer pb-1" onClick={onHeaderClick}>{title}</div>
            <div className={`${isOpen ? "h-auto overflow-hidden" : "h-0 overflow-hidden"}`}>
                <div className="h-16 my-1 bg-neutral-200 rounded-xl">&nbsp;</div>
            </div>
        </div>
    );
};

export default Accordion;