import { Hero } from "./components/Hero/Hero";
import { MainLayout } from "./components/MainLayout/MainLayout";
import { TitlesSection } from "./components/TitlesSection/TitlesSection";
import { IsOnWatchlistContext } from "./context/IsOnWatchlistContext";

function App() {
  return (
    <IsOnWatchlistContext.Provider value={null}>
      <MainLayout>
        <Hero />
        <TitlesSection />
      </MainLayout>
    </IsOnWatchlistContext.Provider>
  );
}

export default App;
