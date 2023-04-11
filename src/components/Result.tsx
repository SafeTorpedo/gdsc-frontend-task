import { memo, useEffect, useState } from "react";
import Card from "./Card";
import { getData } from "../api";

interface ResultProps {
    search: string;
    max: number;
}

const Result = ({ search, max }: ResultProps) => {
    const [artists, setArtists] = useState([]);
    const [tracks, setTracks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getData(search, max).then((res) => {
            setArtists(res.artists);
            setTracks(res.tracks);
            setIsLoading(false);
        });
    }, [search, max]);

    if (isLoading) {
        return <div className="flex justify-center m-4">Loading...</div>;
    }

    return (
        <>
            <div>
                <div className="flex justify-center m-4">
                    <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl p-4">
                        Top {max} Artists in {search}
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
                        Top {max} Tracks in {search}
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
