const RulesIllustratedDiagram = () => {
  // Sample grid data with some numbers filled in
  const sampleGrid = [
    [5, 3, null, null, 7, null, null, null, null],
    [6, null, null, 1, 9, 5, null, null, null],
    [null, 9, 8, null, null, null, null, 6, null],
    [8, null, null, null, 6, null, null, null, 3],
    [4, null, null, 8, null, 3, null, null, 1],
    [7, null, null, null, 2, null, null, null, 6],
    [null, 6, null, null, null, null, 2, 8, null],
    [null, null, null, 4, 1, 9, null, null, 5],
    [null, null, null, null, 8, null, null, 7, 9]
  ];

  const getCellClasses = (rowIndex: number, colIndex: number) => {
    let classes = "w-8 h-8 border border-gray-400 flex items-center justify-center text-sm font-medium ";
    
    // Highlight top row (light blue)
    if (rowIndex === 0) {
      classes += "bg-blue-100 ";
    }
    // Highlight first column (light green)
    else if (colIndex === 0) {
      classes += "bg-green-100 ";
    }
    // Highlight top-left 3x3 box (light yellow) - but don't override row/column highlights
    else if (rowIndex < 3 && colIndex < 3) {
      classes += "bg-yellow-100 ";
    }
    else {
      classes += "bg-white ";
    }

    // Add thick borders for 3x3 boxes
    if (rowIndex % 3 === 0) classes += "border-t-2 border-t-gray-800 ";
    if (colIndex % 3 === 0) classes += "border-l-2 border-l-gray-800 ";
    if (rowIndex === 8) classes += "border-b-2 border-b-gray-800 ";
    if (colIndex === 8) classes += "border-r-2 border-r-gray-800 ";

    return classes;
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="grid grid-cols-9 gap-0 border-2 border-gray-800 bg-white">
        {sampleGrid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={getCellClasses(rowIndex, colIndex)}
            >
              {cell || ""}
            </div>
          ))
        )}
      </div>
      
      <div className="text-center space-y-2 max-w-md">
        <div className="flex justify-center space-x-4 text-sm">
          <div className="flex items-center space-x-1">
            <div className="w-4 h-4 bg-blue-100 border border-gray-400"></div>
            <span>Row</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-4 h-4 bg-green-100 border border-gray-400"></div>
            <span>Column</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-4 h-4 bg-yellow-100 border border-gray-400"></div>
            <span>3×3 Box</span>
          </div>
        </div>
        <p className="text-sm text-gray-600">
          Each highlighted area must contain the numbers 1-9 with no repeats.
        </p>
      </div>
    </div>
  );
};

export default RulesIllustratedDiagram;