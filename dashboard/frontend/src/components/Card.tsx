import { Link } from "react-router-dom"



export const Card = (
    {name} : {name : string}
)=> {
    return (
        <Link to={`/${name}`} className="flex capitalize items-center justify-center hover:underline hover:text-white hover:cursor-pointer hover:bg-black border-2 border-black text-black py-12 px-8 text-3xl rounded-lg" >
            {name}
        </Link>
    )
}