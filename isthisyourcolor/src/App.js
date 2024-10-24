import React, { useRef, useState } from 'react';
import './App.css';
import plusIcon from './plus.png'; // Ensure this image is in the src folder

function App() {
  const colorInputRef = useRef(null);
  const [selectedColor, setSelectedColor] = useState('#000000');

  // Function to trigger the color picker
  const handleIconClick = () => {
    colorInputRef.current.click(); // Trigger the color picker
  };

  // Function to handle color selection
  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  return (
    <div className="container">
      <p>Is this my color?</p>
      <div className="color-display" style={{ backgroundColor: selectedColor }}>
        <img
          src={plusIcon}
          alt="Plus icon"
          className="plus-icon"
          onClick={handleIconClick}
        />
      </div>

      {/* Hidden color input to trigger color picker */}
      <input
        type="color"
        ref={colorInputRef}
        style={{ display: 'none' }} // Hidden input field
        onChange={handleColorChange}
      />

      <p>Selected Color: {selectedColor}</p>
    </div>
  );
}

export default App;
