// ... seus outros imports
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* O basename diz ao React que o site começa depois de /meu-portfolio/ */}
      <BrowserRouter basename="/meu-portfolio">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);