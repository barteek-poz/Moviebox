import {Hero}  from "./components/Hero/Hero";
import { MainLayout } from "./components/MainLayout/MainLayout";
import { PopularTitles } from "./components/PopularTitles/PopularTitles";


function App() {
  return (
    <>
      <MainLayout>
        <Hero />
        <PopularTitles/>
      </MainLayout>
    </>
  );
}

export default App;
