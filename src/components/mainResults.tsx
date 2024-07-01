const MainResults = ({id, title} : {id: string, title: string}) => {
    return (
        <div id={`${id}Container`} className="flex flex-col max-w-full">
            <div id={`${id}Header`} className="text-2xl flex items-center cursor-pointer pb-1">{title}</div>
            <div id={`${id}Body`} className="h-24 my-1 px-4 py-2 rounded-xl bg-neutral-800">
                <p className="break-keep">test</p>
            </div>
        </div>
    )
};

export default MainResults;