import {
  Toaster
} from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import FloatingContactButton from "./components/FloatingContactButton";
import LandingPage from "./pages/LandingPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import WocPlansPage from "./pages/WocPlansPage";
import SilverWocPage from "./pages/SilverWocPage";
import GoldWocPage from "./pages/GoldWocPage";
import DiamondWocPage from "./pages/DiamondWocPage";
import AboutPage from "./pages/AboutPage";
import CustomDevelopmentPage from "./pages/CustomDevelopmentPage";
import DigitalMediaPage from "./pages/DigitalMediaPage";
import AutomationPage from "./pages/AutomationPage";
import BlogIndexPage from "./pages/BlogIndexPage";
import BlogPostPage from "./pages/BlogPostPage";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute"; // Import ProtectedRoute

// Lazy-loaded components
const AdminLogin = lazy(() => import("./pages/admin/AdminLogin"));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));
const AccordionCrud = lazy(() => import("./pages/admin/AccordionCrud"));
const LogoCarouselCrud = lazy(() => import("./pages/admin/LogoCarouselCrud"));
const FaqCrud = lazy(() => import("./pages/admin/FaqCrud"));
const UserManagement = lazy(() => import("./pages/admin/UserManagement"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <FloatingContactButton />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/woc-plans" element={<WocPlansPage />} />
            <Route path="/woc/silver" element={<SilverWocPage />} />
            <Route path="/woc/gold" element={<GoldWocPage />} />
            <Route path="/woc/diamond" element={<DiamondWocPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/custom-development" element={<CustomDevelopmentPage />} />
            <Route path="/digital-media" element={<DigitalMediaPage />} />
            <Route path="/automation" element={<AutomationPage />} />
            <Route path="/blog" element={<BlogIndexPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/service/:slug" element={<ServiceDetailPage />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route element={<ProtectedRoute requiredRoles={['admin']} />}>
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/accordion" element={<AccordionCrud />} />
              <Route path="/admin/logo-carousel" element={<LogoCarouselCrud />} />
              <Route path="/admin/faqs" element={<FaqCrud />} />
              <Route path="/admin/users" element={<UserManagement />} />
            </Route>
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
