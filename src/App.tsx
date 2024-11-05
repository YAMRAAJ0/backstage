import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Footer from './footer';
import Navbar from './Navbar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="max-w-screen-xl mx-auto p-8 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="h-24 p-6 transition-transform duration-300 hover:drop-shadow-lg" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="h-24 p-6 transition-transform duration-300 hover:drop-shadow-lg" alt="React logo" />
          </a>
        </div>
        <h1 className="text-3xl font-bold mb-6">Vite + React</h1>
        <div className="p-6 border border-gray-300 rounded-lg shadow-lg mb-6">
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" 
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </button>
        </div>
        <p className="text-gray-600">
          Click on the Vite and React logos to learn more
        </p>
      </div>
      <Footer />
    </>
  );
}

export default App;
