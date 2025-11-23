interface PropertyCardProps {
  property: {
    id: string;
    title: string;
    location: string;
    price: number;
    imageUrl: string;
  };
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md">
      <img
        src={property.imageUrl}
        alt={property.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{property.title}</h3>
        <p className="text-gray-500">{property.location}</p>
        <p className="text-blue-600 font-bold">${property.price}</p>
      </div>
    </div>
  );
}
