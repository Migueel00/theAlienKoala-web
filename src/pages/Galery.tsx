

const images = [
  { id: 1, src: 'assets/images/1744414935682.jpg', alt: 'Imagen 1' },
  { id: 2, src: 'https://picsum.photos/id/1016/400/300', alt: 'Imagen 2' },
  { id: 3, src: 'https://picsum.photos/id/1018/400/300', alt: 'Imagen 3' },
  { id: 4, src: 'https://picsum.photos/id/1020/400/300', alt: 'Imagen 4' },
  { id: 5, src: 'https://picsum.photos/id/1024/400/300', alt: 'Imagen 5' },
  { id: 6, src: 'https://picsum.photos/id/1027/400/300', alt: 'Imagen 6' },
];

export default function Galery() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img) => (
          <div key={img.id} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}