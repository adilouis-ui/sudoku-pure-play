import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const HowToPlay = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>How to Play Sudoku: A Simple Guide for Beginners | Kuku Sudoku</title>
        <meta name="description" content="A simple guide for beginners on how to play Sudoku. Learn the basic rules, simple tips, and easy techniques to solve your first puzzle." />
        <link rel="canonical" href="https://kukusudoku.com/how-to-play" />
      </Helmet>

      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">How to Play Sudoku</h1>
        <p className="text-lg text-gray-600 mb-8">
          Welcome to Sudoku! If you're new to the game, you're in the right place. Sudoku isn't about math; it's a fun and rewarding logic puzzle. This simple guide will teach you the basic rules and get you started on your first puzzle in minutes.
        </p>

        <h2 className="text-3xl font-bold mb-4 text-gray-800 border-t pt-6">The Goal of the Game</h2>
        <p className="text-lg text-gray-600 mb-4">
          The goal is simple: fill the 9x9 grid with numbers from 1 to 9.
        </p>
        <p className="text-lg text-gray-600 mb-6">
          However, there's a rule. Each number from 1 to 9 can only appear <strong>once</strong> in each:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-600 space-y-2 mb-8">
          <li><strong>Row</strong> (running horizontally)</li>
          <li><strong>Column</strong> (running vertically)</li>
          <li><strong>3x3 Box</strong> (the smaller squares within the grid)</li>
        </ul>

        <img src="/assets/visual-anatomy.svg" alt="Diagram showing the rows, columns, and 3x3 boxes of a Sudoku grid" className="w-full max-w-sm mx-auto my-8 border rounded-lg shadow-md" />

        <h2 className="text-3xl font-bold mb-4 text-gray-800 border-t pt-6">The Easiest Way to Start</h2>
        <div className="text-lg text-gray-600 space-y-4 mb-8">
          <p><strong>Step 1: Look for an Almost-Full Area.</strong> Scan the board for any row, column, or 3x3 box that is nearly complete and has only one or two empty squares.</p>
          <p><strong>Step 2: Figure Out the Missing Number.</strong> Look at the numbers that are already in that area. For example, if a row has the numbers 1, 2, 4, 5, 6, 7, 8, and 9, the only number missing is <strong>3</strong>.</p>
          <p><strong>Step 3: Fill in the Blank!</strong> Place the missing number in the empty square. Congratulations, you've made your first logical move!</p>
        </div>

        <h2 className="text-3xl font-bold mb-4 text-gray-800 border-t pt-6">A Simple Tip for Finding More Numbers</h2>
        <p className="text-lg text-gray-600 mb-6">
          Once you've filled in the easy blanks, you'll need a new trick. This is the most common technique in Sudoku, called <strong>Scanning</strong>.
        </p>
        <ol className="list-decimal list-inside text-lg text-gray-600 space-y-4 mb-8">
          <li><strong>Pick a Number to Focus On.</strong> Choose a number that already appears several times on the board (for example, the number "7").</li>
          <li><strong>Scan the Rows and Columns.</strong> In your mind, trace lines across the rows and down the columns that already contain a "7".</li>
          <li><strong>Find an Empty Box.</strong> Look for a 3x3 box that does <em>not</em> yet have a "7".</li>
          <li><strong>Find the Only Possible Spot.</strong> The lines you traced will show you which squares in that empty box <em>cannot</em> contain a "7". Often, you will find there is only one possible empty square left. Place your "7" there.</li>
        </ol>

        <h2 className="text-3xl font-bold mb-4 text-gray-800 border-t pt-6">A Few More Tips for Beginners</h2>
        <ul className="list-disc list-inside text-lg text-gray-600 space-y-2 mb-8">
          <li><strong>Don't Guess.</strong> Sudoku is a game of logic. If you're not sure, it's better to wait and look for a number you know is correct.</li>
          <li><strong>Keep Practicing.</strong> The more you play, the faster you will see the patterns. Start with the "Rookie" level to build your confidence.</li>
        </ul>

        <div className="text-center border-t mt-8 pt-8">
          <p className="text-xl text-gray-700 mb-4">You now know everything you need to solve your first Sudoku puzzle. The best way to get better is to play!</p>
          <Link to="/" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-700 transition-colors">
            Start Your First Game
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HowToPlay;