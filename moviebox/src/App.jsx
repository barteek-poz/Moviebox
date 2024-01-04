import {Hero}  from "./components/Hero/Hero";
import { MainLayout } from "./components/MainLayout/MainLayout";

function App() {
  return (
    <>
      <MainLayout>
        <Hero />
      </MainLayout>
    </>
  );
}

export default App;
