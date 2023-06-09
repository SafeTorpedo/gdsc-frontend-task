import { memo, useEffect, useState } from "react";
import { searchImages } from "../api";

interface CardProps {
    name: string;
    listeners: string;
    link?: string;
}

const Card = ({ name, listeners, link }: CardProps) => {
    const [image, setImage] = useState("");

    useEffect(() => {
        searchImages(name).then((res) => {
            setImage(res);
        });
    }, [name]);

    return (
        <div className="bg-[#000031] text-white rounded-3xl p-4">
            <div className="flex justify-center">
                <img
                    src={image}
                    alt={name}
                    className="w-[174px] h-[174px] rounded-xl border-2 border-white"
                />
            </div>
            <div className="flex justify-center">
                <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl p-4">
                    {name}
                </h1>
            </div>
            <div className="flex justify-center">
                <h1 className="text-center text-sm sm:text-md md:text-lg lg:text-xl p-1">
                    Listeners: {listeners}
                </h1>
            </div>
            <div className="flex justify-center">
                {link ? (
                    <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-center text-sm sm:text-md md:text-lg lg:text-xl p-1"
                    >
                        Play
                    </a>
                ) : null}
            </div>
        </div>
    );
};

export default memo(Card);
