import axios from "axios";

const searchImages = async (term: string) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization: `Client-ID ${
                import.meta.env.VITE_UNSPLASH_ACCESS_KEY
            }`,
        },
        params: {
            query: `${term}`,
        },
    });

    return response.data.results[0].urls.regular;
};

const getData = async (search: string) => {
    const artists = await axios.get("https://ws.audioscrobbler.com/2.0/", {
        params: {
            method: "geo.gettopartists",
            country: search,
            api_key: import.meta.env.VITE_API_KEY,
            format: "json",
            limit: 5,
        },
    });
    const tracks = await axios.get("https://ws.audioscrobbler.com/2.0/", {
        params: {
            method: "geo.gettoptracks",
            country: search,
            api_key: import.meta.env.VITE_API_KEY,
            format: "json",
            limit: 5,
        },
    });
    return {
        artists: artists.data.topartists.artist,
        tracks: tracks.data.tracks.track,
    };
};

const getTracks = async (search: string) => {
    const tracks = await axios.get("https://ws.audioscrobbler.com/2.0/", {
        params: {
            method: "artist.gettoptracks",
            artist: search,
            api_key: import.meta.env.VITE_API_KEY,
            format: "json",
            limit: 5,
        },
    });
    return tracks.data.toptracks.track;
};

export { searchImages, getData, getTracks };
