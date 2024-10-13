import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import General from "./pages/General";
import Trauma from "./pages/Trauma";
import ID from "./pages/ID";
import EmptyPage from "./components/EmptyPage";

const queryClient = new QueryClient();

const tabs = [
  "Diagnosis-Specific",
  "ACLS",
  "Constitutional",
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
  "Psych",
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
            <Route path="/trauma" element={<Trauma />} />
            <Route path="/id" element={<ID />} />
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