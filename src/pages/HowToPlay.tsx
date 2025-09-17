import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const HowToPlay = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Play Sudoku: A Simple Step-by-Step Guide",
    "description": "Learn the basic rules and two simple techniques—the 'One Number Left' trick and 'Cross-Hatching'—to solve your first Sudoku puzzle.",
    "step": [
      {"@type": "HowToStep", "name": "Understand the Board", "text": "The goal is to fill the 9x9 grid so that each row, column, and 3x3 box contains the numbers 1 through 9 with no repeats."},
      {"@type": "HowToStep", "name": "Find the 'One Number Left'", "text": "Scan the board for any row, column, or 3x3 box that is only missing one number. This is the easiest first move."},
      {"@type": "HowToStep", "name": "Use Cross-Hatching", "text": "For a harder-to-find number, look at a 3x3 box and use the numbers in intersecting rows and columns to eliminate impossible squares."}
    ],
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": [{"@type": "Question", "name": "Is Sudoku a math game?", "acceptedAnswer": {"@type": "Answer", "text": "No, Sudoku is a pure logic puzzle. It uses numbers as symbols, but no math is required."}}, {"@type": "Question", "name": "Can you guess in Sudoku?", "acceptedAnswer": {"@type": "Answer", "text": "A true Sudoku puzzle can always be solved with logic alone. Guessing is not a required strategy."}}]
    }
  };

  return (
    <div className="bg-white">
      <Helmet>
        <title>How to Play Sudoku: A Simple Step-by-Step Guide | Kuku Sudoku</title>
        <meta name="description" content="Learn the rules of Sudoku and two simple tricks for beginners. Our visual guide with images and GIFs makes learning fast and easy. Play your first game online now!" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">How to Play Sudoku: A Simple Guide for Beginners</h1>
        <p className="text-lg text-gray-600 mb-8">Welcome to Sudoku! This guide will teach you everything you need to know, from understanding the board to making your first clever moves. It's a fun logic puzzle, and you're about to learn how to master it.</p>

        <h2 className="text-3xl font-bold mb-4 text-gray-800 border-t pt-6">Understanding the Board</h2>
        <p className="text-lg text-gray-600 mb-6">A Sudoku puzzle has three main parts, and the goal is to fill them all with numbers from 1 to 9 without any repeats.</p>
        <img src="/assets/visual-anatomy.svg" alt="Diagram showing the rows, columns, and 3x3 boxes of a Sudoku grid" className="w-full max-w-md mx-auto my-8 border rounded-lg shadow-md" />

        <h2 className="text-3xl font-bold mb-4 text-gray-800 border-t pt-6">How to Get Started: The "One Number Left" Trick</h2>
        <p className="text-lg text-gray-600 mb-6">The best way to find your first number is to look for a row, column, or box that is almost full. If a group only has one empty square, you can instantly solve it by figuring out which number from 1 to 9 is missing.</p>
        <img src="/assets/visual-onenumberleft.gif" alt="Animated GIF showing how to find the single missing number in a nearly full row." className="w-full max-w-md mx-auto my-8 border rounded-lg shadow-md" />

        <h2 className="text-3xl font-bold mb-4 text-gray-800 border-t pt-6">Your Next Move: Using "Cross-Hatching"</h2>
        <p className="text-lg text-gray-600 mb-6">When no group has just one number left, you need a new trick. Look at an empty square and scan its entire row, column, and 3x3 box for clues. By eliminating all the numbers that can't go there, you can discover the one that can.</p>
        <img src="/assets/visual-crosshatching.gif" alt="Animated GIF demonstrating the cross-hatching technique to solve for a number." className="w-full max-w-md mx-auto my-8 border rounded-lg shadow-md" />

        <h2 className="text-3xl font-bold mb-4 text-gray-800 border-t pt-6">Frequently Asked Questions</h2>
        <div className="space-y-4 text-lg">
          <div>
            <h3 className="font-bold text-gray-700">Is Sudoku a math game?</h3>
            <p className="text-gray-600">No! Sudoku is a logic puzzle. It uses numbers as symbols, but there is no arithmetic involved.</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-700">Can you guess in Sudoku?</h3>
            <p className="text-gray-600">You can, but it's not a good strategy. A true Sudoku puzzle can always be solved with logic alone.</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-700">What does "Sudoku" mean?</h3>
            <p className="text-gray-600">"Sudoku" is a Japanese name that is short for "Sūji wa dokushin ni kagiru," which means "the digits must remain single."</p>
          </div>
        </div>

        <div className="text-center border-t mt-8 pt-8">
          <p className="text-xl text-gray-700 mb-4">The best way to learn is by playing. You're ready to solve your first puzzle!</p>
          <Link to="/" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-700 transition-colors">
            Play a Game Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowToPlay;