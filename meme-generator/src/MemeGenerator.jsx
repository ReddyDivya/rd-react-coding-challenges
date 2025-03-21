import React, { useState, useRef } from "react";

const MemeGenerator = () => {
  const [image, setImage] = useState(""); // State for storing the image URL
  const [topText, setTopText] = useState(""); // State for top text input
  const [bottomText, setBottomText] = useState(""); // State for bottom text input
  const [meme, setMeme] = useState(""); // State to store generated meme image URL
  const canvasRef = useRef(null); // Ref for accessing the canvas element

  // Function to handle image file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0]; // Get the uploaded file
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setImage(e.target.result); // Convert image to base64 and store in state
      reader.readAsDataURL(file); // Read the image file
    }
  };

  // Function to generate meme on canvas
  const handleGenerateMeme = (event) => {
    event.preventDefault(); // Prevent page reload

    if (!image) {
      alert("Please provide a valid image URL or upload an image.");
      return;
    }

    // Create a new image object and set the uploaded image as its source
    const memeImage = new Image();
    memeImage.src = image;

    // Ensure image is fully loaded before drawing on canvas
    memeImage.onload = () => {
      const canvas = canvasRef.current; // Access the canvas element
      const ctx = canvas.getContext("2d"); // Get the 2D drawing context

      // Set canvas dimensions to match the image
      canvas.width = memeImage.width;
      canvas.height = memeImage.height;

      // Draw the image onto the canvas
      ctx.drawImage(memeImage, 0, 0, canvas.width, canvas.height);

      // Set text properties
      ctx.fillStyle = "white"; // Fill color for text
      ctx.strokeStyle = "black"; // Outline color for text
      ctx.font = "bold 40px Impact"; // Font style
      ctx.textAlign = "center"; // Center align the text
      ctx.lineWidth = 3; // Outline thickness

      // Function to add text with stroke for better visibility
      const addText = (text, x, y) => {
        ctx.strokeText(text, x, y); // Outline text
        ctx.fillText(text, x, y); // Fill text
      };

      // Add top text (adjust position to avoid cropping)
      addText(topText.toUpperCase(), canvas.width / 2, 50);

      // Add bottom text (place near bottom edge, considering padding)
      addText(bottomText.toUpperCase(), canvas.width / 2, canvas.height - 30);

      // Convert the canvas to an image URL and store in state
      setMeme(canvas.toDataURL());
    };
  };

  return (
    <div className="container">
      <form onSubmit={handleGenerateMeme}>
        {/* Image Upload Section */}
        <div className="inputGroup">
          <label>Add File:</label>
          <input
            type="text"
            placeholder="Enter Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <input type="file" accept="image/*" onChange={handleFileUpload} />
        </div>

        {/* Text Inputs */}
        <div className="inputGroup">
          <label>Top Text:</label>
          <input
            type="text"
            value={topText}
            placeholder="Enter Top Text"
            onChange={(e) => setTopText(e.target.value)}
          />
        </div>
        <div className="inputGroup">
          <label>Bottom Text:</label>
          <input
            type="text"
            value={bottomText}
            placeholder="Enter Bottom Text"
            onChange={(e) => setBottomText(e.target.value)}
          />
        </div>

        <button type="submit">Generate Meme</button>
      </form>

      {/* Canvas for drawing the meme */}
      <canvas ref={canvasRef} style={{ display: "none" }}></canvas>

      {/* Display generated meme as an image */}
      {meme && <img src={meme} alt="Generated Meme" className="memeImage" />}
    </div>
  );
};

export default MemeGenerator;
