import explorer from "../constants/folderData"; // Importing static JSON data that represents the folder structure
import Folder from "./Folder.jsx"; // Importing the Folder component for rendering folders/files
import useTraverseTree from "../hooks/useTraverseTree.js"; // Importing the custom hook for tree traversal
import { useState } from "react"; // Importing the useState hook from React

// FileExplorer component: Manages the entire file explorer UI and handles inserting new folders/files
const FileExplorer = () => {
  
  // State to store and manage the folder data (initialized with imported data)
  const [explorerData, setExplorerData] = useState(explorer); // Bug Fix: Set initial state to `explorerData` instead of `undefined`

  // Destructure the insertNode function from the custom hook (used for inserting new nodes into the tree)
  const { insertNode } = useTraverseTree();

  // Function to handle the insertion of new folders/files into the explorer
  const handleInsertNode = (folderId, item, isFolder) => {
    // Call insertNode to add the new folder/file at the correct location in the tree
    const finalTree = insertNode(explorerData, folderId, item, isFolder);

    // Update the explorer data state with the newly modified tree structure
    setExplorerData(finalTree);
  };

  return (
    <div className="max-w-md mx-auto w-full p-8 bg-white shadow-lg rounded-lg mt-2">
      <h1 className="text-3xl font-semibold text-blue-600 mb-6 text-center">File Explorer</h1>
      
      {/* Render the Folder component and pass explorer data and handleInsertNode function as props */}
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
    </div>
  );
};

export default FileExplorer;
