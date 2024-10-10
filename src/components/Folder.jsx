import { useState } from "react"; // Importing useState hook from React to manage component state

// Folder component: Renders a folder or file view and allows adding new folders/files
const Folder = ({ handleInsertNode = () => {}, explorer }) => {

  // State to manage whether the folder is expanded or collapsed
  const [expand, setExpand] = useState(false);

  // State to manage the visibility of the input field for adding a new folder/file
  const [showInput, setShowInput] = useState({
    visible: false, // Whether the input field is visible or not
    isFolder: false, // Whether the new item being added is a folder or file
  });

  // Function to toggle the expansion of the folder
  const toggleExpand = () => {
    setExpand(!expand); // Toggles the expand state between true and false
  };

  // Function to handle creating a new folder or file
  const handleNewFolderOrFile = (e, isFolder) => {
    e.stopPropagation(); // Prevents the folder from expanding/collapsing when the button is clicked
    setShowInput({
      visible: true,    // Shows the input field
      isFolder,         // Specifies whether it's a folder or file based on the button clicked
    });
  };

  // Function to handle the input submission (triggered by pressing Enter key)
  const handleOnAddFolderOrFile = (e) => {
    if (e.keyCode === 13 && e.target.value) { // If the Enter key is pressed and input is not empty
      // Calls handleInsertNode to add the new folder/file to the explorer tree
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);

      // Hides the input field after adding the item
      setShowInput({ ...showInput, visible: false });
    }
  };

  // If the explorer item is a folder, render the folder view
  if (explorer.isFolder) {
    return (
      <div>
        {/* Clickable div to toggle folder expansion */}
        <div onClick={toggleExpand} className="cursor-pointer">
          <span>📁 {explorer.name}</span> {/* Display folder icon and name */}

          {/* Button to create a new folder */}
          <button
            onClick={(e) => handleNewFolderOrFile(e, true)} // Passes true to indicate it's a folder
            className="bg-gray-300 w-24 rounded-lg mt-4 font-semibold ml-2"
          >
            📁 Folder
          </button>

          {/* Button to create a new file */}
          <button
            onClick={(e) => handleNewFolderOrFile(e, false)} // Passes false to indicate it's a file
            className="bg-gray-300 w-20 rounded-lg mt-4 ml-2 font-semibold"
          >
            🗎 File
          </button>
        </div>

        {/* Conditionally render the folder's content when expanded */}
        <div style={{ display: expand ? "block" : "none" }} className="ml-4">
          
          {/* Show the input field if it's visible */}
          {showInput.visible && (
            <div>
              {showInput.isFolder ? "📁 " : "🗎 "} {/* Display icon based on type */}
              <input
                type="text" // Text input for folder/file name
                onKeyDown={handleOnAddFolderOrFile} // Handle submission on pressing Enter
                onBlur={() => setShowInput({ ...showInput, visible: false })} // Hide input when it loses focus
                className="border-2 border-black rounded-md mt-2"
                autoFocus // Automatically focus on the input field when it appears
              />
            </div>
          )}

          {/* Recursively render child folders/files */}
          {explorer.items.map((exp) => (
            <Folder key={exp.id} explorer={exp} handleInsertNode={handleInsertNode} />
          ))}
        </div>
      </div>
    );
  } else {
    // If the explorer item is a file, render the file view
    return <div>🗎 {explorer.name}</div>; // Display file icon and name
  }
};

export default Folder;
