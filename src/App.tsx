import { useState } from "react";

function App() {
    const [country, setCountry] = useState("");
    // const [result, setResult] = useState("");
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // const data = country;
        // setResult(data);
        // console.log(result);
    };
    return (
        <div className="w-screen h-screen bg-gray-600">
            <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl p-4">
                GDSC Frontend Task 1
            </h1>
            <form onSubmit={handleSubmit}>
                <div className="flex justify-center m-4">
                    <input
                        className="w-3/4 p-4 rounded-3xl bg-gray-300"
                        type="text"
                        placeholder="Enter country name"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    />
                </div>
                <div className="flex justify-center m-4">
                    <button
                        className="w-1/4  p-4 rounded-3xl bg-gray-400"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default App;
