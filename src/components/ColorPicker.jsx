import { useState } from "react";
import { SketchPicker } from "react-color";

const ColorPicker = () => {
    const [selectedColor, setSelectedColor] = useState('#FFFFF');

    const handleChangeComplete = (color) => {
        setSelectedColor(color.hex)
    };

    return (
        <div className="max-w-sm mx-auto p-6 bg-white shadow-lg rounded-lg mt-12">
            <h1 className="text-2xl text-blue-500 font-semibold mb-4">3 - Color Picker</h1>
            <SketchPicker
                color={selectedColor}
                onChangeComplete={handleChangeComplete}
            />
            <p className="text-lg text-gray-700 font-semibold mt-4">Selected color: {selectedColor}</p>
        </div>
    );
}

export default ColorPicker;
