import { useEffect, useState } from "react";
import Card from "./Card";
import { getTracks } from "../api";

const Reverse = ({ search }: { search: string }) => {
    const [tracks, setTracks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        getTracks(search).then((res) => {
            setTracks(res);
            setIsLoading(false);
        });
    }, [search]);
    if (isLoading) {
        return <div className="flex justify-center m-4">Loading...</div>;
    }
    return (
        <>
            <div>
                <div className="flex justify-center m-4">
                    <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl p-4">
                        Top 5 tracks by {search}
                    </h1>
                </div>
                <div className="flex justify-center m-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {tracks.map((item: any) => (
                            <Card
                                key={item.mbid}
                                name={item.name}
                                listeners={item.listeners}
                                link={item.url}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Reverse;
