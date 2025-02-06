import { Link } from "react-router-dom"



export const AppBar = () => {
    return <div className="border-b flex justify-between px-10 py-4">
        <Link to={'/main'} className="flex justify-center text-3xl font-semibold flex-col" >
                Dashboard
        </Link>
        <div className="flex gap-8">
            <Link to={'/upload'} className="flex gap-2 items-center" >
                <div className="text-xl">
                    Upload
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                    </svg>
                </div>
            </Link>
            <div className="flex">
                <Avatar name={"Anand"} size="lg" textSize={"md"} />
            </div>
        </div>
    </div>
}

export function Avatar({ name, size = "sm", textSize = "sm" }: { name: string, size?: string, textSize?: string }) {
    const sizeClasses = size === "lg" ? "w-10 h-10" : "w-6 h-6";
    const textSizeClasses = textSize === "lg" ? "text-lg" : "text-sm";

    return (
        <div>
            <div className={`relative inline-flex items-center justify-center ${sizeClasses} overflow-hidden bg-gray-300 rounded-full dark:bg-gray-600`}>
                <span className={`font-medium ${textSizeClasses} text-gray-600 dark:text-gray-300`}>
                    {name[0]}
                </span>
            </div>
        </div>
    );
}
