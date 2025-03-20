
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, useLocation, HashRouter } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Empresa from "./pages/Empresa";
import Contato from "./pages/Contato";
import SistemaMarft from "./pages/SistemaMarft";
import Consultoria from "./pages/Consultoria";
import Novidades from "./pages/Novidades";
import NovidadeDetalhe from "./pages/NovidadeDetalhe";
import Clientes from "./pages/Clientes";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const AppContent = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/auccon" element={<Index />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/sistema-marft" element={<SistemaMarft />} />
        <Route path="/consultoria" element={<Consultoria />} />
        <Route path="/novidades" element={<Novidades />} />
        <Route path="/novidades/:slug" element={<NovidadeDetalhe />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <AppContent />
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
