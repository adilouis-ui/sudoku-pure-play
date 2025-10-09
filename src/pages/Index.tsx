import { SudokuGame } from '@/components/SudokuGame';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Kuku Sudoku | Free, Minimalist Online Sudoku Game</title>
        <meta name="description" content="Play unlimited, ad-free Sudoku puzzles online. A clean, fast, and mobile-friendly game with multiple difficulty levels." />
        <link rel="canonical" href="https://kukusudoku.com/" />
      </Helmet>
      <SudokuGame />
    </>
  );
};

export default Index;
