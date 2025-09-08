const CrossHatchingDiagram = () => {
  // Sample grid focusing on cross-hatching technique
  const sampleGrid = [
    [null, null, null, null, null, null, null, null, null],
    [null, null, 5, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [5, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null]
  ];

  const getCellClasses = (rowIndex: number, colIndex: number) => {
    let classes = "w-8 h-8 border border-gray-400 flex items-center justify-center text-sm font-medium relative ";
    
    // Center 3x3 box (target area)
    const isCenterBox = rowIndex >= 3 && rowIndex <= 5 && colIndex >= 3 && colIndex <= 5;
    
    // The target cell (center box, row 3, col 4) - this is where the 5 should go
    const isTargetCell = rowIndex === 3 && colIndex === 4;
    
    // Row with 5 (row 4, highlight entire row in light red)
    const isBlockedByRow = rowIndex === 4;
    
    // Column with 5 (column 2, highlight entire column in light red)
    const isBlockedByColumn = colIndex === 2;
    
    if (isTargetCell) {
      classes += "bg-green-200 border-2 border-green-500 ";
    } else if (isCenterBox) {
      if (isBlockedByRow || isBlockedByColumn) {
        classes += "bg-red-100 ";
      } else {
        classes += "bg-blue-50 ";
      }
    } else if (isBlockedByRow || isBlockedByColumn) {
      classes += "bg-red-100 ";
    } else {
      classes += "bg-white ";
    }

    // Add thick borders for 3x3 boxes
    if (rowIndex % 3 === 0) classes += "border-t-2 border-t-gray-800 ";
    if (colIndex % 3 === 0) classes += "border-l-2 border-l-gray-800 ";
    if (rowIndex === 8) classes += "border-b-2 border-b-gray-800 ";
    if (colIndex === 8) classes += "border-r-2 border-r-gray-800 ";

    return classes;
  };

  const getCellContent = (rowIndex: number, colIndex: number) => {
    const cell = sampleGrid[rowIndex][colIndex];
    const isTargetCell = rowIndex === 3 && colIndex === 4;
    
    if (isTargetCell) {
      return "5";
    }
    return cell || "";
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="grid grid-cols-9 gap-0 border-2 border-gray-800 bg-white">
        {sampleGrid.map((row, rowIndex) =>
          row.map((_, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={getCellClasses(rowIndex, colIndex)}
            >
              {getCellContent(rowIndex, colIndex)}
            </div>
          ))
        )}
      </div>
      
      <div className="text-center space-y-3 max-w-lg">
        <div className="flex justify-center space-x-4 text-sm">
          <div className="flex items-center space-x-1">
            <div className="w-4 h-4 bg-blue-50 border border-gray-400"></div>
            <span>Target Box</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-4 h-4 bg-red-100 border border-gray-400"></div>
            <span>Blocked</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-4 h-4 bg-green-200 border-2 border-green-500"></div>
            <span>Solution</span>
          </div>
        </div>
        <div className="text-sm text-gray-600 space-y-1">
          <p><strong>Cross-Hatching Example:</strong></p>
          <p>1. The middle 3×3 box needs a "5"</p>
          <p>2. Row 4 already has a "5" (blocks 3 cells)</p>
          <p>3. Column 2 already has a "5" (blocks 1 more cell)</p>
          <p>4. Only one cell remains possible!</p>
        </div>
      </div>
    </div>
  );
};

export default CrossHatchingDiagram;