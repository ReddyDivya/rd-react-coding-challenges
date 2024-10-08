import PropTypes from 'prop-types';
import { useState } from 'react';


const Folder = ({ explorer, expand }) => {
  const [exp, setExp] = useState(expand);
  
  return (
    <div>
      {explorer?.isFolder ? (
        <div>
          <span onClick={()=> setExp(!exp)}>📁{explorer.name}</span>
          <div style= {{display: exp ? "block" : "none"}}  className="ml-4 mt-2">
            {explorer.items && explorer.items.length > 0 ? (
              explorer.items.map((item) => (
                <Folder key={item.id} explorer={item} />
              ))
            ) : (
              <span>No items found</span>
            )}
          </div>
        </div>
      ) : (
        <span>🗎{explorer.name}</span>
      )}
    </div>
  );
};

// Adding propTypes validation
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
  },
).isRequired,
expand: PropTypes.bool.isRequired, // Validating 'expand' as a separate prop

};
export default Folder;
