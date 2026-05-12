import { Route, Switch, useLocation } from "wouter";
import HomePage from "./pages/HomePage";
import ThankYouPage from "./pages/ThankYouPage";
import FloatingCallButton from "./common/FloatingCallButton";

/**
 * Main application component that handles routing using Wouter.
 * Wraps all routes with the FloatingCallButton for consistent UX.
 * @returns {JSX.Element} The rendered application
 */
function App() {
  const [location] = useLocation();

  // Hide FloatingCallButton on the thank you page
  const showFloatingButton = location !== "/thank-you-page";

  return (
    <>
      <Switch>
        {/* Home page route */}
        <Route path="/" component={HomePage} />

        {/* Thank you page route */}
        <Route path="/thank-you-page" component={ThankYouPage} />

        {/* 404 fallback - redirects to home */}
        <Route>
          <HomePage />
        </Route>
      </Switch>

      {/* Floating Call Button - Hidden on thank you page */}
      {showFloatingButton && (
        <FloatingCallButton
          calendarLink="https://cal.com/fran-di-giorno/admision-obsidian-systems"
          name="Fran Di Giorno"
          role="CEO de Obsidian Systems"
          description='Esta llamada será conmigo. No es una "auditoría"; es para revisar lo que has construido y confirmar si cumples las condiciones para que trabajemos juntos.'
          availabilityText="Solo estoy tomando pocas llamadas por día."
        />
      )}
    </>
  );
}

export default App;
