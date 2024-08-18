interface CardProps {
    image: string;
}

export default function Card({ image }: CardProps) {
    return (
        <div className="h-44 w-[280px] bg-white rounded-lg">
            <div className="h-full w-full">
                <img src={image} alt="Card Image" className="h-full w-full object-cover rounded-lg" />
            </div>
        </div>
    );
}
