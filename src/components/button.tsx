const Button = ({text, className} : {text: string, className?: string}) => {
    const defaultClassName = "rounded-full border-2 border-black bg-inherit px-7 py-1 transition-colors focus:outline-none hover:bg-neutral-200 active:bg-black active:text-white";
    const finalClassName = className ? `${defaultClassName} ${className}` : defaultClassName;
    return (
        <button className={finalClassName}>
            {text}
        </button>
    );
};

export default Button;