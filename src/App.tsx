import NavigationMenu from "./components/navigation/NavigationMenu";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <header className="w-full bg-gray-800  border-gray-700 shadow-md">
        <NavigationMenu />
      </header>
      <main className="flex-grow container mx-auto p-4">
        {/* Contenido principal */}
      </main>
      <footer className="text-center p-4">
        {/* Pie de página */}
      </footer>
    </div>
  );
}