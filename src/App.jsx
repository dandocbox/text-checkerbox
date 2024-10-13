import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import General from "./pages/General";
import Trauma from "./pages/Trauma";
import ID from "./pages/ID";
import Psych from "./pages/Psych";
import ChestResp from "./pages/ChestResp";
import Neuro from "./pages/Neuro";
import Constitutional from "./pages/Constitutional";
import EmptyPage from "./components/EmptyPage";

const queryClient = new QueryClient();

const tabs = [
  "Diagnosis-Specific",
  "ACLS",
  "Eye",
  "HEENT",
  "Abdo/GI",
  "OB/GYN",
  "Genitourinary",
  "MSK",
  "Skin",
  "Allergy",
  "Environmental",
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
            <Route path="/psych" element={<Psych />} />
            <Route path="/chest-resp" element={<ChestResp />} />
            <Route path="/neuro" element={<Neuro />} />
            <Route path="/constitutional" element={<Constitutional />} />
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