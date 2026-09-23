import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import BookingPage from "./pages/BookingPage";
import EntryGateway from "./pages/EntryGateway";
import ContentProductionPage from "./pages/ContentProductionPage";
import ContentStudioConcepts from "./pages/ContentStudioConcepts";

function Router() {
  return (
    <Switch>
      {/* Forced gateway choice on initial domain entry */}
      <Route path="/" component={EntryGateway} />

      {/* Track 1: Advertising & Lead Generation (existing full site) */}
      <Route path="/advertising" component={Home} />

      {/* Track 2: Content Production (dedicated creative site) */}
      <Route path="/content-production" component={ContentProductionPage} />

      {/* Private visual direction board for Content Studio review */}
      <Route path="/content-studio-concepts" component={ContentStudioConcepts} />

      {/* Shared booking experience */}
      <Route path="/book" component={BookingPage} />

      {/* 404 & fallback */}
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
