import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLoader from "@/components/AppLoader";
import Home from "./pages/Home";
import Market from "./pages/Market";
import Games from "./pages/Games";
import Referrals from "./pages/Referrals";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AppLoader>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Market />} />
            <Route path="/market" element={<Market />} />
            <Route path="/games" element={<Games />} />
            <Route path="/referrals" element={<Referrals />} />
            <Route path="/profile" element={<Profile />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AppLoader>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
