import "./App.css";
import { NewsCard } from "./components";
function App() {
  return (
    <>
      <main className=" min-h-dvh bg-neutral-charcoal-grey text-neutral-dark-slate-grey grid place-content-start  Tablet:place-content-center w-full">
        <NewsCard />
      </main>
    </>
  );
}

export default App;
