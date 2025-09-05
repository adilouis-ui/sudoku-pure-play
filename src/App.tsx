import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout"; // Import the new Layout component
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
// We will add imports for other pages like HowToPlay later.

const queryClient = new QueryClient();

const App = () => (
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
            
            {/* We will add other pages like <Route path="how-to-play" ... /> here later. */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
