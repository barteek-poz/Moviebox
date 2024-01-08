import {Hero}  from "./components/Hero/Hero";
import { MainLayout } from "./components/MainLayout/MainLayout";
import { Poster } from "./components/Poster/Poster";

function App() {
  return (
    <>
      <MainLayout>
        <Hero />
        <Poster/>
      </MainLayout>
    </>
  );
}

export default App;
