import { Route, Routes } from "react-router-dom";
import NavigationMenu from "./components/navigation/NavigationMenu";
import Galery from "./pages/Galery";


export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full pt-16">
        <div className="flex justify-center items-center flex-col w-full">
          <a href="/" className="text-[180%] inconsolata">THE ALIEN KOALA</a>
          <NavigationMenu />
        </div>
      </header>
      <main className="flex-grow container mx-auto p-4">
        <Routes>
          <Route path="/galery" element={<Galery/>}></Route>
        </Routes>
      </main>
      <footer className="text-center p-4">
        {/* Pie de página */}
      </footer>
    </div>
  );
}