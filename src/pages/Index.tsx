import { SudokuGame } from "@/components/SudokuGame";

const Index = () => {
  return (
    // This is the key fix:
    // - h-full: Makes this container take up the full height of its parent (<main>).
    // - flex, flex-col: Turns it into a vertical flex container.
    // - justify-center: Centers the content vertically within this container.
    <div className="h-full flex flex-col justify-center items-center p-4">
      <SudokuGame />
    </div>
  );
};

export default Index;