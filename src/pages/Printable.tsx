import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Printable = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {"@type": "Question", "name": "How often is the printable Sudoku updated?", "acceptedAnswer": {"@type": "Answer", "text": "A brand new PDF with fresh puzzles is available every single day at midnight (UTC)."}},
      {"@type": "Question", "name": "Are the solutions included?", "acceptedAnswer": {"@type": "Answer", "text": "Yes! The second page of every PDF contains the answers for that day's puzzles."}},
      {"@type": "Question", "name": "Is it completely free?", "acceptedAnswer": {"@type": "Answer", "text": "Absolutely. Our daily printable Sudoku puzzles are 100% free to download and share."}}
    ]
  };

  return (
    <div className="bg-white">
      <Helmet>
        <title>Free Daily Printable Sudoku Puzzles (PDF) | Kuku Sudoku</title>
        <meta name="description" content="Download a new, free printable Sudoku PDF every day! Our daily puzzles come in easy, medium, and hard levels, with solutions included. Perfect for an offline challenge. Get today's puzzles now!" />
        <link rel="canonical" href="https://kukusudoku.com/printable" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Free Daily Printable Sudoku Puzzles</h1>
          <p className="text-lg text-gray-600 mb-6">
            Welcome to your daily source for offline fun! Every day, we offer a brand new, printer-friendly PDF file containing Sudoku puzzles for all skill levels. Download today's free printable Sudoku below.
          </p>
          <a href="/daily-sudoku.pdf" download className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-700 transition-colors mb-8">
            Download & Print Today's Puzzles
          </a>
        </div>

        <div className="space-y-8 border-t pt-8">
          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Why Play Sudoku on Paper?</h2>
            <ul className="list-disc list-inside text-lg text-gray-600 space-y-2">
              <li><strong>A Healthy Screen Break:</strong> Give your eyes a rest and engage your mind in a different way.</li>
              <li><strong>Mindful & Relaxing:</strong> The physical act of writing can be a calming, meditative experience.</li>
              <li><strong>Perfect for Travel:</strong> Take it on a plane, a train, or to the park—no battery or internet required.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">What's Included in Today's PDF?</h2>
            <ul className="list-disc list-inside text-lg text-gray-600 space-y-2">
              <li><strong>Three Levels of Difficulty:</strong> One Easy, one Medium, and one Hard puzzle to match your mood.</li>
              <li><strong>Solutions Included:</strong> The second page of the PDF contains the solutions to all three puzzles.</li>
              <li><strong>Clean & Printer-Friendly:</strong> We've designed the page with minimal ink usage in mind.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Frequently Asked Questions (FAQ)</h2>
            <div className="space-y-4 text-lg">
              <div>
                <h3 className="font-bold text-gray-700">How often is the printable Sudoku updated?</h3>
                <p className="text-gray-600">A brand new PDF with fresh puzzles is available every single day at midnight (UTC).</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-700">Are the solutions really included?</h3>
                <p className="text-gray-600">Yes! The second page of every PDF contains the answers for that day's puzzles.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-700">Is it completely free?</h3>
                <p className="text-gray-600">Absolutely. Our daily printable Sudoku puzzles are 100% free to download and share.</p>
              </div>
            </div>
          </section>
        </div>
        
        <div className="text-center border-t mt-8 pt-8">
          <p className="text-xl text-gray-700 mb-4">Ready for more? When you're done with today's printable, challenge yourself with unlimited puzzles in our online game!</p>
          <Link to="/" className="inline-block bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-700 transition-colors">
            Play Unlimited Puzzles Online
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Printable;