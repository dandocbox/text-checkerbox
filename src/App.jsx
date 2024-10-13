import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import General from "./pages/General";
import TraumaBurn from "./pages/TraumaBurn";
import EmptyPage from "./components/EmptyPage";

const queryClient = new QueryClient();

const tabs = [
  "Diagnosis-Specific",
  "ACLS",
  "Constitutional",
  "ID / Infectious",
  "Neuro",
  "Eye",
  "HEENT",
  "Chest/Resp",
  "Abdo/GI",
  "OB/GYN",
  "Genitourinary",
  "MSK",
  "Skin",
  "Allergy",
  "Psych / ETOH / Drug",
  "Wilderness Med",
  "Misc"
];

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<General />} />
            <Route path="/trauma-burn" element={<TraumaBurn />} />
            {tabs.map((tab, index) => (
              <Route
                key={index}
                path={`/${tab.toLowerCase().replace(/ /g, "-")}`}
                element={<EmptyPage />}
              />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;