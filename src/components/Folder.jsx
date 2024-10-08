import PropTypes from 'prop-types';
import { useState } from 'react';

const Folder = ({ explorer, expand }) => {
  // Local state to handle expanding/collapsing the folder
  const [isExpanded, setIsExpanded] = useState(expand);

  // Toggle the folder's expanded state when the name is clicked
  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div>
      {explorer.isFolder ? (
        <div>
          {/* Folder name with clickable functionality to expand/collapse */}
          <span onClick={toggleExpand}>📁 {explorer.name}</span>

          {/* Conditionally render the folder's content based on the expanded state */}
          {isExpanded && (
            <div className="ml-4 mt-2">
              {explorer.items && explorer.items.length > 0 ? (
                // Recursively render the Folder component for nested items
                explorer.items.map((item) => (
                  <Folder key={item.id} explorer={item} expand={expand} />
                ))
              ) : (
                <span>No items found</span>
              )}
            </div>
          )}
        </div>
      ) : (
        // Render file items
        <span>🗎 {explorer.name}</span>
      )}
    </div>
  );
};

// Prop validation for the Folder component
Folder.propTypes = {
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
  expand: PropTypes.bool.isRequired, // Expand control passed down from parent
};

export default Folder;
