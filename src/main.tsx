import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import NotFound from "./NotFound.tsx";
import VideoProductionPage from "./pages/VideoProductionPage.tsx";
import MarketingAutomationPage from "./pages/MarketingAutomationPage.tsx";
import PodcastPage from "./pages/PodcastPage.tsx";
import LiveEventPage from "./pages/LiveEventPage.tsx";
import ClientAcquisitionPage from "./pages/ClientAcquisitionPage.tsx";
import LiveEventPage from "./pages/DigitalPublishingPage.tsx";
import "./globals.css";
// CODEROCKET
const setupRouteChangeBridge = () => {
  if (typeof window === "undefined") {
    return;
  }
  const bridgeWindow = window as Window & {
    __coderocketRouteBridgeInitialized?: boolean;
  };
  if (bridgeWindow.__coderocketRouteBridgeInitialized) {
    return;
  }
  bridgeWindow.__coderocketRouteBridgeInitialized = true;
  const notifyParent = () => {
    try {
      window.parent?.postMessage(
        {
          type: "coderocket-route-change",
          path:
            window.location.pathname +
            window.location.search +
            window.location.hash,
        },
        "*",
      );
    } catch {
      // Ignore cross-origin access errors
    }
  };
  type HistoryMethod = typeof window.history.pushState;
  const wrapHistoryMethod = (method: "pushState" | "replaceState") => {
    const original = window.history[method] as HistoryMethod;
    window.history[method] = function (...args) {
      const result = original.apply(this, args as Parameters<HistoryMethod>);
      notifyParent();
      return result;
    } as HistoryMethod;
  };
  wrapHistoryMethod("pushState");
  wrapHistoryMethod("replaceState");
  window.addEventListener("popstate", notifyParent);
  window.addEventListener("hashchange", notifyParent);
  notifyParent();
};
setupRouteChangeBridge();
// /CODEROCKET
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/services/video-production" element={<VideoProductionPage />} />
        <Route path="/services/marketing-automation" element={<MarketingAutomationPage />} />
        <Route path="/services/podcast" element={<PodcastPage />} />
        <Route path="/services/live-events" element={<LiveEventPage />} />
        <Route path="/services/podcast" element={<PodcastPage />} />
        <Route path="/services/client-acquisition" element={<ClientAcquisitionPage />} />
        <Route path="/services/digital-publishing" element={<DigitalPublishingPage/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);