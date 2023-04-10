import { memo, useEffect, useState } from "react";
import Card from "./Card";
import { getData } from "../api";

const Result = ({ search }: { search: string }) => {
    const [artists, setArtists] = useState([]);
    const [tracks, setTracks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getData(search).then((res) => {
            setArtists(res.artists);
            setTracks(res.tracks);
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
                        Top 5 Artists in {search}
                    </h1>
                </div>
                <div className="flex justify-center m-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {artists.map((item: any) => (
                            <Card
                                key={item.mbid}
                                name={item.name}
                                listeners={item.listeners}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <div className="flex justify-center m-4">
                    <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl p-4">
                        Top 5 Tracks in {search}
                    </h1>
                </div>
                <div className="flex justify-center m-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {tracks.map((item: any) => (
                            <Card
                                key={item.mbid}
                                name={item.name}
                                listeners={item.listeners}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default memo(Result);
