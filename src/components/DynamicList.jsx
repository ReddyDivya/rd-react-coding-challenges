import {useState} from "react";

const DynamicList = () => {
    const [items, setItems] = useState([]);//array
    const [newText, setNewText] = useState('');

    //adding items
    const handleAddItems = () => {
        if(newText)
        {
            setItems([...items, {text : newText, isCompleted: false}]);//adding item to items array
            setNewText('');
        }
    }//handleAddItems

    const handleCompletedItem = (index) => {
        const updatedItems = [...items];
        updatedItems[index].isCompleted = !updatedItems[index].isCompleted;
        setItems(updatedItems);
    }//handleCompletedItem

    //clear items
    const handleClearAll = () => {
        setItems([]);
    }//handleClearItems

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg mt-12">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">2 - Dynamic List of Items with Strikethrough
            </h2>
            
            <div className="mb-4">
                <label className="block text-gray-700">Add Item: </label>
                <input className="border border-gray-700 p-2 rounded w-full mt-2"
                type="text" placeholder="Enter new Item" value={newText} onChange={(e) => setNewText(e.target.value)}/>
            </div>
            
            <div className="flex space-x-4 mb-6">
                <button className="bg-blue-500 py-2 px-4 text-white font-semibold rounded hover:bg-blue-600" onClick={handleAddItems}>Add Item</button>

                <button className="bg-red-500 py-2 px-4 text-white font-semibold rounded hover:bg-red-600" onClick={handleClearAll}>Clear All</button>
            </div>

            <ul className="list-disc list-inside">
                {
                    items.map((item, index) => (
                        <li key={index} onClick={() => handleCompletedItem(index)} className={`cursor-pointer ${item.isCompleted ? "line-through text-gray-500": "text-gray-800"}`}>{item.text}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default DynamicList;