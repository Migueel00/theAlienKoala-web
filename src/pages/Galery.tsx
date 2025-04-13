
const images = [
  { id: 1, src: 'assets/images/1744414935682.jpg', alt: 'Imagen 1', colSpan: 'col-span-2', rowSpan: 'row-span-3' },
  { id: 2, src: 'assets/images/1744414935706.jpg', alt: 'Imagen 2', colSpan: 'col-span-1', rowSpan: 'row-span-2' },
  { id: 5, src: 'assets/images/1744414935764.jpg', alt: 'Imagen 5', colSpan: 'col-span-1', rowSpan: 'row-span-2' },
  { id: 3, src: 'assets/images/1744414935728.jpg', alt: 'Imagen 3', colSpan: 'col-span-2', rowSpan: 'row-span-1' },
  { id: 4, src: 'assets/images/1744414935746.jpg', alt: 'Imagen 4', colSpan: 'col-span-1', rowSpan: 'row-span-4' },
  { id: 5, src: 'assets/images/1744414935764.jpg', alt: 'Imagen 5', colSpan: 'col-span-3', rowSpan: 'row-span-2' },
  { id: 6, src: 'assets/images/1744414935706.jpg', alt: 'Imagen 6', colSpan: 'col-span-2', rowSpan: 'row-span-2' },
  { id: 5, src: 'assets/images/1744414935764.jpg', alt: 'Imagen 5', colSpan: 'col-span-1', rowSpan: 'row-span-2' },

];
// Anotacion col-span-4 ocupa todo el ancho de la pagina

export default function Galery() {
  return (
    <div className="p-4">
      {/* Grid responsive con auto-rows para definir la altura base de las filas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[150px]">
        {images.map((img) => (
          <div
            key={img.id}
            className={`relative overflow-hidden rounded-lg shadow-lg ${img.colSpan} ${img.rowSpan}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}