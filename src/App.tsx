import { useEffect } from 'react';
import PremiumPortfolio from './_components/PremiumPortfolio';
// import './styles/globals.css';


function App() {
  useEffect(() => {
    import("https://cdn.jsdelivr.net/npm/agent-embed-widget/dist/agent-embed-widget.es.js" as any)
      .then((mod) => {
        mod.embedWidget({
          type: "tray",
          url: "https://console.thesys.dev/app/8ouEQ1DV8FSxWlGhGhPm9",
          theme: "light",
        });
      })
      .catch((err) => console.error("Widget load error:", err));
  }, []);
  return (
    <div className="App">
      <PremiumPortfolio />
    </div>
  );
}

export default App;