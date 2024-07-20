import { useEffect, useState } from "react";
import axios from "axios";

const MemeGenerator = () => {
  // State to store memes fetched from API
  const [memes, setMemes] = useState([]);
  // State to store the top text for the meme
  const [topText, setTopText] = useState('');
  // State to store the bottom text for the meme
  const [bottomText, setBottomText] = useState('');
  // State to store the currently selected meme
  const [selectedMeme, setSelectedMeme] = useState(null);
  // State to handle loading state
  const [loading, setLoading] = useState(false);
  // State to handle error state
  const [error, setError] = useState('');

  // Fetch memes when the component mounts
  useEffect(() => {
    fetchMemes();
  }, []);

  // Fetch memes from the API
  const fetchMemes = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await axios.get("https://api.imgflip.com/get_memes");
      setMemes(response.data.data.memes);
    } catch (error) {
      setError("Failed to fetch memes.");
    }

    setLoading(false);
  };

  // Handle meme selection from the dropdown
  const handleSelectedMeme = (e) => {
    const selectedMemeId = e.target.value;
    const meme = memes.find(meme => meme.id === selectedMemeId);
    setSelectedMeme(meme);
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-md w-full mt-12">
      {/* Title */}
      <h1 className="text-3xl font-semibold text-blue-600 mb-6 text-center">Meme Generator</h1>

      {/* Meme   selection dropdown */}
      <div className="mb-4">
        <select
          className="p-3 border border-gray-300 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleSelectedMeme}
          value={selectedMeme ? selectedMeme.id : ''}
        >
          <option value="">Select a Meme</option>
          {memes.map(meme => (
            <option key={meme.id} value={meme.id}>{meme.name}</option>
          ))}
        </select>
      </div>

      {/* Form to input top and bottom text */}
      <form className="mb-4">
        <input
          type="text"
          placeholder="Top Text"
          value={topText}
          onChange={(e) => setTopText(e.target.value)}
          className="p-3 border border-gray-300 rounded w-full mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Bottom Text"
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
          className="p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </form>

      {/* Loading and error messages */}
      {loading && <p className="text-center text-blue-500">Loading...</p>}
      {error && <p className="text-center font-semibold text-red-500">{error}</p>}

      {/* Display the selected meme with top and bottom text */}
      {selectedMeme && (
        <div className="relative mt-6">
          <img
            className="w-full h-auto rounded-lg"
            src={selectedMeme.url}
            alt={selectedMeme.name}
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between items-center px-4 py-2">
            <p className="text-white text-4xl font-bold drop-shadow-lg">{topText}</p>
            <p className="text-white text-4xl font-bold drop-shadow-lg">{bottomText}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MemeGenerator;
