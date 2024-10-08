import PropTypes from 'prop-types';


const Folder = ({ explorer, expand }) => {
  

  return (
    <div>
      {explorer?.isFolder ? (
        <div>
          <span>📁{explorer.name}</span>
          <div style= {{display: expand ? "block" : "none"}}  className="ml-4 mt-2">
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
  }).isRequired,
};
export default Folder;
