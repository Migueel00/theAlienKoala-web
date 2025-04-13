import { Link } from "react-router-dom";

export default function NavigationMenu() {
  const Links = [
    { name: "INICIO", path: "/" },
    { name: "SOBRE MI", path: "/about" },
    { name: "SERVICIOS", path: "/services" },
    { name: "GALERIA", path: "/galery" },
    { name: "EQUIPAMENTO", path: "/equipment" },
  ];

  return (
    <nav className="px-4 py-2">
      <div className="container mx-auto flex justify-center items-center">
        <div className="space-x-36">
          {Links.map((link) => (
            <Link to={link.path} className="hover:text-white transition-colors text-[120%] roboto-mono font-thin" key={link.name}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}