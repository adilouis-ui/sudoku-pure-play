import { Link } from 'react-router-dom';
// Import react-helmet-async for metadata management
import { Helmet } from 'react-helmet-async'; 

// Import the new visual components you will create
import RulesIllustratedDiagram from '@/components/visuals/RulesIllustratedDiagram';
import CrossHatchingDiagram from '@/components/visuals/CrossHatchingDiagram';

const HowToPlay = () => {
  // JSON-LD Schema data for GEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Play Sudoku: A Simple Guide for Beginners",
    "description": "Learn the three simple rules of Sudoku and a basic technique to solve your first puzzle.",
    "step": [{"@type": "HowToStep", "name": "Understand the Rules", "text": "The goal is to fill the 9x9 grid so that each row, column, and 3x3 box contains the numbers 1 through 9 with no repeats."}, {"@type": "HowToStep", "name": "Find a Target", "text": "Choose a 3x3 box that is missing a specific number, for example, the number 5."}, {"@type": "HowToStep", "name": "Scan and Eliminate", "text": "Use the existing numbers on the board to logically eliminate impossible squares for your target number until only one possible square remains."}],
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": [{"@type": "Question", "name": "Is Sudoku a math game?", "acceptedAnswer": {"@type": "Answer", "text": "No, Sudoku is a pure logic puzzle. It uses numbers as symbols, but no math is required."}}, {"@type": "Question", "name": "Can you guess in Sudoku?", "acceptedAnswer": {"@type": "Answer", "text": "A true Sudoku puzzle can always be solved with logic alone. Guessing is not a required strategy."}}]
    }
  };

  return (
    <div className="bg-white">
      <Helmet>
        <title>How to Play Sudoku: A Simple Step-by-Step Guide | Kuku Sudoku</title>
        <meta name="description" content="Learn how to play Sudoku with our simple, visual guide for beginners. Understand the rules, the board, and basic tips to solve your first puzzle. Play free Sudoku online at Kuku Sudoku." />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">How to Play Sudoku: A Simple Guide for Beginners</h1>
        <p className="text-lg text-gray-600 mb-8">Welcome to the wonderful world of Sudoku! This guide will teach you everything you need to know to solve your first puzzle. Sudoku isn't a math game; it's a fun logic puzzle that's easy to learn and incredibly rewarding.</p>

        <h2 className="text-3xl font-bold mb-4 text-gray-800 border-t pt-6">The 3 Key Rules of Sudoku</h2>
        <ol className="list-decimal list-inside text-lg text-gray-600 space-y-2 mb-6">
          <li><strong>Each row</strong> must contain the numbers 1 through 9, with no repeats.</li>
          <li><strong>Each column</strong> must also contain the numbers 1 through 9, without any repeats.</li>
          <li><strong>Each of the nine 3x3 boxes</strong> must contain the numbers 1 through 9, with no repeats.</li>
        </ol>
        <div className="my-8"><RulesIllustratedDiagram /></div>

        <h2 className="text-3xl font-bold mb-4 text-gray-800 border-t pt-6">How to Get Started: A Simple 2-Step Technique</h2>
        <p className="text-lg text-gray-600 mb-4">The easiest way to find a number is with a technique called <strong>"Cross-Hatching"</strong>.</p>
        <ol className="list-decimal list-inside text-lg text-gray-600 space-y-2 mb-6">
          <li><strong>Step 1: Find a Target.</strong> Look for a 3x3 box that is missing a specific number.</li>
          <li><strong>Step 2: Scan and Eliminate.</strong> Use the existing numbers in intersecting rows and columns to logically eliminate impossible squares until only one option remains.</li>
        </ol>
        <div className="my-8"><CrossHatchingDiagram /></div>

        <h2 className="text-3xl font-bold mb-4 text-gray-800 border-t pt-6">Frequently Asked Questions (FAQ)</h2>
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
          <p className="text-xl text-gray-700 mb-4">Now that you know the rules, you're ready to solve your first puzzle!</p>
          <Link to="/" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-700 transition-colors">
            Play a Game Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowToPlay;