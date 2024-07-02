const Button = ({text, className, onClick} : {text: string, className?: string, onClick?: () => void}) => {
    const defaultClassName = "rounded-full border-2 border-white bg-inherit text-inherit px-7 py-1 transition-colors focus:outline-none hover:bg-neutral-800 active:bg-white active:text-black";
    const finalClassName = className ? `${defaultClassName} ${className}` : defaultClassName;
    return (
        <button className={finalClassName} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;