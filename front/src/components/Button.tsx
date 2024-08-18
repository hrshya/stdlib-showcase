import { Link } from "react-router-dom";

interface ButtonProps {
    name: string;
    colour: string;
    backgroundColor: string;
}

export default function Button({ name, colour, backgroundColor }: ButtonProps) {
    const colourMap: { [key: string]: string } = {
        black: "bg-black",
        amber: "bg-amber",
        white: "bg-white",
        green: "bg-green-500",
        // Add more colors as needed
    };

    const backgroundColorClass = colourMap[backgroundColor] || "bg-gray-500"; // Default to gray if colour not found
    const colourClass = colour === "black" ? "text-black" : "text-white";

    return (
        <Link to={`/${name}`}>
            <button
                type="button"
                className={`${colourClass} ${backgroundColorClass} rounded-full px-5 py-2.5`}
            >
                {name}
            </button>
        </Link>
    );
}
