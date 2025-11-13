
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";

const App = () => (
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <LandingPage />
      <Footer />
    </TooltipProvider>
);

export default App;
