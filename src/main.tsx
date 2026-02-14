import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import NotFound from "./NotFound.tsx";
import VideoProductionPage from "./pages/VideoProductionPage.tsx";
import MarketingAutomationPage from "./pages/MarketingAutomationPage.tsx";
import PublishingPage from "./pages/PublishingPage.tsx";
import PodcastPage from "./pages/PodcastPage.tsx";
import LiveEventPage from "./pages/LiveEventPage.tsx";
import ClientAcquisitionPage from "./pages/ClientAcquisitionPage.tsx";
import DigitalPublishingPage from "./pages/DigitalPublishingPage.tsx";
import GhostwritingPage from "./pages/GhostwritingPage.tsx";
import RadioPage from "./pages/RadioPage.tsx";
import ShowPage from "./pages/ShowPage.tsx";
import PressKitPage from "./pages/PressKitPage.tsx";
import MeetYourDreamsPage from "./pages/MeetYourDreamsPage.tsx";
import { AudioProvider } from "./context/AudioContext.tsx";
import GlobalAudioPlayer from "./components/GlobalPlayer.tsx";
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
      <AudioProvider>
        {/* Global CRT and Scanline Overlay */}
        <div className="crt-overlay pointer-events-none fixed inset-0 z-[9999]"></div>
        <div className="scanline pointer-events-none fixed inset-0 z-[9999]"></div>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/services/video-production" element={<VideoProductionPage />} />
          <Route path="/services/marketing-automation" element={<MarketingAutomationPage />} />
          <Route path="/services/publishing" element={<PublishingPage />} />
          <Route path="/services/digital-publishing" element={<DigitalPublishingPage />} />
          <Route path="/services/podcast" element={<PodcastPage />} />
          <Route path="/services/live-events" element={<LiveEventPage />} />
          <Route path="/services/client-acquisition" element={<ClientAcquisitionPage />} />
          <Route path="/services/ghostwriting" element={<GhostwritingPage />} />
          <Route path="/radio" element={<RadioPage />} />
          <Route path="/radio/learn-more" element={<MeetYourDreamsPage />} />
          <Route path="/radio/:slug/press-kit" element={<PressKitPage />} />
          <Route path="/radio/:slug" element={<ShowPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <GlobalAudioPlayer />
      </AudioProvider>
    </BrowserRouter>
  </React.StrictMode>,
);