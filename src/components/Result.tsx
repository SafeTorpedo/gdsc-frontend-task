import axios from "axios";
import { memo, useEffect, useState } from "react";

const getData = async (search: string) => {
    const artists = await axios.get(
        `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${search}&api_key=${
            import.meta.env.VITE_API_KEY
        }&format=json&limit=5`
    );
    const tracks = await axios.get(
        `http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=${search}&api_key=${
            import.meta.env.VITE_API_KEY
        }&format=json&limit=5`
    );
    return {
        artists: artists.data.topartists.artist,
        tracks: tracks.data.tracks.track,
    };
};

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
                            <div
                                key={item.mbid}
                                className="bg-gray-300 rounded-3xl p-4"
                            >
                                <div className="flex justify-center">
                                    <img
                                        src={item.image[2]["#text"]}
                                        alt={item.name}
                                    />
                                </div>
                                <div className="flex justify-center">
                                    <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl p-4">
                                        {item.name}
                                    </h1>
                                </div>
                                <div className="flex justify-center">
                                    <h1 className="text-center text-sm sm:text-md md:text-lg lg:text-xl p-1">
                                        Listeners: {item.listeners}
                                    </h1>
                                </div>
                            </div>
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
                            <div
                                key={item.mbid}
                                className="bg-gray-300 rounded-3xl p-4"
                            >
                                <div className="flex justify-center">
                                    <img
                                        src={item.image[2]["#text"]}
                                        alt={item.name}
                                    />
                                </div>
                                <div className="flex justify-center">
                                    <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl p-4">
                                        {item.name}
                                    </h1>
                                </div>
                                <div className="flex justify-center">
                                    <h1 className="text-center text-sm sm:text-md md:text-lg lg:text-xl p-1">
                                        Listeners: {item.listeners}
                                    </h1>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default memo(Result);
