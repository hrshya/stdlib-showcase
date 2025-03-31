import { useState } from 'react';
import { Float32Array as StdlibFloat32Array, Float64Array as StdlibFloat64Array } from '@stdlib/array';
import { ResponsiveContainer, BarChart, LineChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function TheoryComparison() {
  return (
    <div className="p-6 mb-8 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Theory Comparison: Float32Array vs Float64Array</h2>
      <p className="text-lg text-gray-700">
        <strong>Float32Array</strong> represents 32-bit floating point numbers, offering faster computation and less memory usage compared to 64-bit types. However, it provides lower precision, which may be a drawback for some applications requiring high precision (like scientific calculations).
      </p>
      <p className="text-lg text-gray-700 mt-4">
        <strong>Float64Array</strong>, on the other hand, uses 64-bit floating point numbers, allowing for more precise computations and a wider range of representable values, but at the cost of increased memory consumption and potentially slower performance for certain operations.
      </p>
      <p className="text-lg text-gray-700 mt-4">
        Depending on your use case (e.g., graphics rendering vs. scientific simulations), choosing the appropriate array type is crucial for optimizing performance and memory usage.
      </p>
    </div>
  );
}

function Memory() {
  const [sliderValue, setSliderValue] = useState(5);
  const [arrayMaxSize, setArrayMaxSize] = useState(1000000);
  const [results, setResults] = useState({
    float64: [
      { time: 0.25, memory: 8 * 1024 * 1024 },
      { time: 0.35, memory: 16 * 1024 * 1024 },
      { time: 0.45, memory: 24 * 1024 * 1024 },
      { time: 0.25, memory: 32 * 1024 * 1024 },
      { time: 0.15, memory: 12 * 1024 * 1024 },
    ],
    float32: [
      { time: 0.15, memory: 4 * 1024 * 1024 },
      { time: 0.22, memory: 8 * 1024 * 1024 },
      { time: 0.32, memory: 12 * 1024 * 1024 },
      { time: 0.42, memory: 16 * 1024 * 1024 },
      { time: 0.12, memory: 6 * 1024 * 1024 },
    ],
  });

  const runComparison = (arrayType: string, size: number) => {
    const startTime = performance.now();

    let array;
    if (arrayType === 'Float64Array') {
      array = new StdlibFloat64Array(size);
    } else {
      array = new StdlibFloat32Array(size);
    }

    for (let i = 0; i < size; i++) {
      array[i] = Math.random();
    }

    let sum = 0;
    for (let i = 0; i < size; i++) {
      sum += array[i];
    }

    const endTime = performance.now();
    const timeTaken = endTime - startTime;
    const memoryUsed = array.byteLength;

    return { time: timeTaken, memory: memoryUsed };
  };

  const updateComparison = (newSliderValue: number, newArrayMaxSize: number) => {
    const float64Results = [];
    const float32Results = [];

    for (let i = 0; i < newSliderValue; i++) {
      const randomSize = Math.floor(Math.random() * (newArrayMaxSize - 1000 + 1)) + 1000;

      const result64 = runComparison('Float64Array', randomSize);
      const result32 = runComparison('Float32Array', randomSize);

      float64Results.push(result64);
      float32Results.push(result32);
    }

    setResults({
      float64: float64Results,
      float32: float32Results,
    });
  };

  const handleSliderValueChange = (value: number) => {
    setSliderValue(value);
    updateComparison(value, arrayMaxSize);
  };

  const handleArraySizeChange = (value: number) => {
    setArrayMaxSize(value);
    updateComparison(sliderValue, value);
  };

  const formatMemory = (bytes: number) => {
    const mb = bytes / (1024 * 1024);
    return mb.toFixed(2) + ' MB';
  };

  const formatTime = (time: number) => {
    return (time / 1000).toFixed(3) + ' s';
  };

  const memoryData = results.float64.map((_, index) => ({
    name: `Array ${index + 1}`,
    float64: results.float64[index].memory,
    float32: results.float32[index].memory,
  }));

  const timeData = results.float64.map((_, index) => ({
    name: `Array ${index + 1}`,
    float64: results.float64[index].time,
    float32: results.float32[index].time,
  }));

  return (
    <div className="min-h-screen flex items-center justify-center bg-rose-100">
      <div className="w-full p-6 h-full bg-amber-100 rounded-lg shadow-lg">
        <TheoryComparison />

        <div className="flex flex-row">
          {/* Memory Comparison Chart */}
          <div className="w-full h-80 mb-8">
            <h2 className="text-xl font-semibold text-center mb-4">Memory Usage Comparison</h2>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={memoryData} margin={{ top: 10, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="float64" fill="oklch(0.705 0.213 47.604)" />
                <Bar dataKey="float32" fill="oklch(0.768 0.233 130.85)" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Time Comparison Chart */}
          <div className="w-full h-80 mb-8">
            <h2 className="text-xl font-semibold text-center mb-4">Time Comparison</h2>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={timeData} margin={{ top: 10, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="float64" stroke="oklch(0.705 0.213 47.604)" strokeWidth={2} />
                <Line type="monotone" dataKey="float32" stroke="oklch(0.768 0.233 130.85)" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="flex flex-row justify-between gap-16 mt-8 w-full">
          {/* Slider for Number of Arrays */}
          <div className="mb-4 w-1/2 flex flex-col justify-center items-center">
            <label htmlFor="arrayCount" className="text-lg font-semibold text-gray-700">
              Number of Arrays:
            </label>
            <input
              type="range"
              id="arrayCount"
              value={sliderValue}
              min="1"
              max="10"
              step="1"
              onChange={(e) => handleSliderValueChange(parseInt(e.target.value))}
              className="w-full mt-3 cursor-pointer appearance-none h-2 bg-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 hover:bg-gray-400 transition-all"
            />
            <span className="ml-2 text-lg">{sliderValue}</span>
          </div>

          {/* Slider for Array Size */}
          <div className="mb-4 w-1/2 flex flex-col justify-center items-center">
            <label htmlFor="arraySize" className="text-lg font-semibold text-gray-700">
              Max Array Size:
            </label>
            <input
              type="range"
              id="arraySize"
              value={arrayMaxSize}
              min="1000"
              max="1000000"
              step="1000"
              onChange={(e) => handleArraySizeChange(parseInt(e.target.value))}
              className="w-full mt-3 cursor-pointer appearance-none h-2 bg-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 hover:bg-gray-400 transition-all"
            />
            <span className="ml-2 text-lg">{arrayMaxSize}</span>
          </div>
        </div>

        {/* Results */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-center text-gray-800">Comparison Results</h2>

          {results.float64.length > 0 && (
            <div className="space-y-6">
              {/* Float64 Results */}
              <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 text-blue-600">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2v20m10-10H2" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-blue-600">Float64Array</h3>
                  <p className="text-lg text-gray-700">
                    <span className="font-medium">Average Time:</span> {formatTime(results.float64.reduce((acc, res) => acc + res.time, 0))}
                    <br />
                    <span className="font-medium">Average Memory:</span> {formatMemory(results.float64.reduce((acc, res) => acc + res.memory, 0))}
                  </p>
                </div>
              </div>

              {/* Float32 Results */}
              <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 text-green-600">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2v20m10-10H2" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-green-600">Float32Array</h3>
                  <p className="text-lg text-gray-700">
                    <span className="font-medium">Average Time:</span> {formatTime(results.float32.reduce((acc, res) => acc + res.time, 0))}
                    <br />
                    <span className="font-medium">Average Memory:</span> {formatMemory(results.float32.reduce((acc, res) => acc + res.memory, 0))}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Memory;
