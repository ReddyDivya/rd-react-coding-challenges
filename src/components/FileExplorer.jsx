import PropTypes from 'prop-types';
import Folder from './Folder';
import { useState } from 'react';

const FileExplorer = ({ explorer }) => {
  // State to manage the expansion of the top-level folder
  const [expand, setExpand] = useState(false);

  // Toggle the expand state for the root folder
  const toggleExpand = () => setExpand(!expand);

  return (
    <div className="max-w-md mx-auto w-full p-8 bg-white shadow-lg rounded-lg mt-2">
      <h1 className="text-3xl font-semibold text-blue-600 mb-6 text-center">
        File Explorer
      </h1>

      {explorer.isFolder ? (
        <div>
          {/* Root folder name with clickable expand/collapse functionality */}
          <span key={explorer.id} onClick={toggleExpand}>
            📁 {explorer.name}
          </span>

          {/* Conditionally render the folder's content based on the expanded state */}
          <div style={{display: expand ? "block" : "none" }} className="ml-4 mt-2">
            {explorer.items && explorer.items.length > 0 ? (
              // Recursively render Folder components for the nested items
              explorer.items.map((exp) => (
                <Folder key={exp.id} explorer={exp} expand={expand} />
              ))
            ) : (
              <span>No items found</span>
            )}
          </div>
        </div>
      ) : (
        // Render a file if the root is a file (although unlikely for root)
        <div key={explorer.id}>🗎 {explorer.name}</div>
      )}
    </div>
  );
};

// Prop validation for the FileExplorer component
FileExplorer.propTypes = {
  explorer: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isFolder: PropTypes.bool.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isFolder: PropTypes.bool.isRequired,
        items: PropTypes.array,
      })
    ),
  }).isRequired,
};

export default FileExplorer;
