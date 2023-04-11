import { useState } from "react";
import Result from "./components/Result";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab } from "@mui/material";
import Reverse from "./components/Reverse";

function App() {
    const [country, setCountry] = useState("");
    const [result, setResult] = useState("");
    const [value, setValue] = useState("1");
    const [artist, setArtist] = useState("");
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const data = country;
        setResult(data);
        setCountry("");
    };
    const handleSubmitReverse = (e: React.FormEvent) => {
        e.preventDefault();
        const data = artist;
        setResult(data);
        setArtist("");
    };
    return (
        <div className="w-screen h-screen overflow-y-scroll">
            <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl p-4 font-bold">
                GDSC Frontend Task 1
            </h1>
            <div>
                <TabContext value={value}>
                    <TabList
                        className="flex justify-center p-10 "
                        onChange={(
                            e: React.SyntheticEvent,
                            newValue: string
                        ) => {
                            setValue(newValue);
                            setResult("");
                        }}
                    >
                        <Tab label="Country Search" value="1" />
                        <Tab label="Artist Search" value="2" />
                    </TabList>
                    <TabPanel value="1">
                        <form onSubmit={handleSubmit}>
                            <div className="flex justify-center m-4">
                                <input
                                    className="w-3/4 p-4 rounded-3xl bg-gray-100"
                                    type="text"
                                    placeholder="Enter country name"
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                />
                            </div>
                            <div className="flex justify-center m-4">
                                <button
                                    className="w-1/4  p-4 rounded-3xl bg-[#000031] text-white"
                                    type="submit"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                        {result == "" ? null : <Result search={result} />}
                    </TabPanel>
                    <TabPanel value="2">
                        <form onSubmit={handleSubmitReverse}>
                            <div className="flex justify-center m-4">
                                <input
                                    className="w-3/4 p-4 rounded-3xl bg-gray-100"
                                    type="text"
                                    placeholder="Enter artist name"
                                    value={artist}
                                    onChange={(e) => setArtist(e.target.value)}
                                />
                            </div>
                            <div className="flex justify-center m-4">
                                <button
                                    className="w-1/4  p-4 rounded-3xl bg-[#000031] text-white"
                                    type="submit"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                        {result == "" ? null : <Reverse search={result} />}
                    </TabPanel>
                </TabContext>
            </div>
        </div>
    );
}

export default App;
