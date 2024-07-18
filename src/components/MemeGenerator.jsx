import {useState} from "react";
import axios from "axios";

const MemeGenerator = () => {
 const [topText, setTopText] = useState('');
 const [bottomText, setBottomText] = useState('');
 const [meme, setMeme] = useState('');
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState('');

 const fetchMeme = async () => {
    setLoading(true);
    setError('');

    try{
        const response = await axios.get("https://api.imgflip.com/get_memes");
        const data = response.data.data.memes[0];
        setMeme(data);
    }
    catch(error){
        setError("Failed to fetch a meme.");
    }

    setLoading(false);
 }//fetchMeme

  return (
    <div className="max-w-sm mx-auto p-8 bg-white shadow-lg rounded-md w-full mt-4">
        <h1 className="text-2xl font-semibold text-blue-500 ">Meme Generator</h1>

       <form onSubmit={fetchMeme} className="mb-4 mt-2">
            <input type="text" placeholder="Top Text" value={topText} onChange={(e) => setTopText(e.target.value)}className="p-2 border border-gray-300 rounded w-full mb-2" />
            <input placeholder="Bottom Text" type="text" value={bottomText} onChange={(e) => setBottomText(e.target.value)}className="p-2 border border-gray-300 rounded w-full mb-2" />
            <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
            onClick={fetchMeme}
            >
            Get Random Meme
            </button>
       </form>
       
       {loading && <p className="mt-4">loading..</p>}
       {error && <p className="mt-4">{error}</p>}

       <div className="relative">
            <img className="w-full h-auto rounded-lg mt-4" src={meme.url} alt={meme.name}/>
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between items-center">
                <p className="text-white text-4xl font-bold mt-2">{topText}</p>
                <p className="text-white text-4xl font-bold mt-2">{bottomText}</p>

            </div>
       </div>
      
      
    </div>
  )
}

export default MemeGenerator