import { Hero } from "./components/Hero/Hero";
import { MainLayout } from "./components/MainLayout/MainLayout";
import { TitlesSection } from "./components/TitlesSection/TitlesSection";

function App() {
  return (
    <>
      <MainLayout>
        <Hero />
        <TitlesSection />
      </MainLayout>
    </>
  );
}

export default App;
