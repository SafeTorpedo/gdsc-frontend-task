import { useState } from "react";
import Result from "./components/Result";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab } from "@mui/material";
import Reverse from "./components/Reverse";
import { FaLastfm } from "react-icons/fa";
import MapInput from "./components/MapInput";

function App() {
    const [country, setCountry] = useState("");
    const [result, setResult] = useState("");
    const [value, setValue] = useState("1");
    const [artist, setArtist] = useState("");
    const [number, setNumber] = useState(5);
    const [resultNumber, setResultNumber] = useState(5);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const data = country;
        setResult(data);
        const dataNumber = number;
        setResultNumber(dataNumber);
    };
    const handleSubmitReverse = (e: React.FormEvent) => {
        e.preventDefault();
        const data = artist;
        setResult(data);
        const dataNumber = number;
        setResultNumber(dataNumber);
    };

    const getCountryfromMap = (country: string) => {
        setCountry(country);
    };

    return (
        <div className="w-screen h-screen overflow-y-scroll">
            <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl p-4 font-bold">
                <FaLastfm />
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
                                <MapInput fetch={getCountryfromMap} />
                            </div>
                            <div className="flex justify-center m-4">
                                <select
                                    value={number}
                                    className=" w-1/4 md:w-1/6 lg:w-1/12 p-4 rounded-2xl bg-gray-100"
                                    onChange={(e) =>
                                        setNumber(Number(e.target.value))
                                    }
                                >
                                    {[4, 5, 6, 7, 8, 9, 10, 11, 12].map(
                                        (item) => (
                                            <option value={item}>{item}</option>
                                        )
                                    )}
                                </select>
                            </div>
                            <div className="flex justify-center m-4">
                                <button
                                    className="w-1/4  p-4 rounded-3xl bg-[#000031] text-white"
                                    type="submit"
                                >
                                    Search
                                </button>
                            </div>
                        </form>
                        {result == "" ? null : (
                            <Result search={result} max={resultNumber} />
                        )}
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
                                <select
                                    value={number}
                                    className=" w-1/4 md:w-1/6 lg:w-1/12 p-4 rounded-2xl bg-gray-100"
                                    onChange={(e) =>
                                        setNumber(Number(e.target.value))
                                    }
                                >
                                    {[4, 5, 6, 7, 8, 9, 10, 11, 12].map(
                                        (item) => (
                                            <option value={item}>{item}</option>
                                        )
                                    )}
                                </select>
                            </div>
                            <div className="flex justify-center m-4">
                                <button
                                    className="w-1/4  p-4 rounded-3xl bg-[#000031] text-white"
                                    type="submit"
                                >
                                    Search
                                </button>
                            </div>
                        </form>
                        {result == "" ? null : (
                            <Reverse search={result} max={resultNumber} />
                        )}
                    </TabPanel>
                </TabContext>
            </div>
        </div>
    );
}

export default App;
