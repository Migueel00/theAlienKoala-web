import { Link } from "react-router-dom";

export default function NavigationMenu() {
  const Links = [
    { name: "Inicio", path: "/" },
    { name: "Sobre Nosotros", path: "/about" },
    { name: "Servicios", path: "/services" },
    { name: "Galeria", path: "/galery" },
  ];

  return (
    <nav className="px-4 py-6 ">
      <div className="container mx-auto flex justify-center items-center">
        <div className="space-x-36">
          {Links.map((link) => (
            <Link to={link.path} className="text-gray-300 hover:text-white transition-colors font-bold" key={link.name}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}