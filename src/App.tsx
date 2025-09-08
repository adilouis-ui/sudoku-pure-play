import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Layout from "./components/Layout"; // Import the new Layout component
import Index from "./pages/Index";
import HowToPlay from "./pages/HowToPlay";
import Printable from "./pages/Printable";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* All pages will now be children of the main Layout route */}
            <Route path="/" element={<Layout />}>
              {/* The 'index' route renders inside the Outlet when the path is just "/" */}
              <Route index element={<Index />} />
              <Route path="how-to-play" element={<HowToPlay />} />
              <Route path="printable" element={<Printable />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
