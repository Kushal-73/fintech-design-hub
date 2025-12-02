import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLoanApply from "./pages/HomeLoanApply";
import Index from "./pages/Index";
import Apply from "./pages/Apply";
import Offers from "./pages/Offers";
import Calculator from "./pages/Calculator";
import Aggregator from "./pages/Aggregator";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/apply/home-loan" element={<HomeLoanApply />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/aggregator" element={<Aggregator />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceType" element={<Services />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
