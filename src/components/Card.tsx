import { memo, useEffect, useState } from "react";
import { searchImages } from "../api";

const Card = ({ name, listeners }: { name: string; listeners: string }) => {
    const [image, setImage] = useState("");

    useEffect(() => {
        searchImages(name).then((res) => {
            setImage(res);
        });
    }, [name]);

    return (
        <div className="bg-gray-300 rounded-3xl p-4">
            <div className="flex justify-center">
                <img src={image} alt={name} className="w-[174px] h-[174px]" />
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
        </div>
    );
};

export default memo(Card);
