import PropTypes from 'prop-types';
import Folder from "./Folder";

const FileExplorer = ({explorer}) => {
  
  return (
    <div className="max-w-md mx-auto w-full p-8 bg-white shadow-lg rounded-lg mt-2">
      <h1 className="text-3xl font-semibold text-blue-600 mb-6 text-center">File Explorer</h1>
        {explorer?.isFolder? ( 
          <div>
            <span key={explorer?.id}>📁{explorer?.name}</span>
            <div className="ml-4 mt-2">
              {explorer?.items && explorer?.items?.length > 0 ? 
                (
                  explorer?.items?.map((exp) => (
                    <Folder key={exp?.id} explorer={exp}/>
                  ))
                ) : (<span>No items found</span>)
            }
            </div>  
        </div> 
        ) : (<div key={explorer?.id}>🗎{explorer?.name}</div>
      )}

    </div>
  )
}

// Adding propTypes validation
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