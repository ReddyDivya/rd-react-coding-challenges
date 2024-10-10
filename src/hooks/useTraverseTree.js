// Custom hook to traverse a tree-like structure and insert nodes (folders/files)
const useTraverseTree = () => {

    // Function to insert a new node (folder/file) into the tree at a specific folder ID
    const insertNode = (tree, folderId, item, isFolder) => {

        // Base case: if the current node matches the folderId and is a folder
        if (tree.id === folderId && tree.isFolder) {
            // Insert the new item (folder or file) at the beginning of the items array
            tree.items.unshift({
                id: new Date().getTime(),  // Generate a unique ID based on current timestamp
                name: item,// Set the name of the new item
                isFolder: isFolder,//Specify whether it's a folder or file
                items: [] // Initialize with an empty items array (for folders)
            });

            // Return the updated tree after insertion
            return tree;
        }

        // Recursive case: traverse the items array to find the matching folderId
        let latestNode = [];
        latestNode = tree.items.map((obj) =>
            insertNode(obj, folderId, item, isFolder) // Recursively apply insertNode to each child node
        );

        // Return the updated tree structure with the newly inserted node
        return { ...tree, items: latestNode };
    };

    // Return the insertNode function so it can be used outside the hook
    return { insertNode };
};

export default useTraverseTree;
