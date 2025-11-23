interface PropertyDetailProps {
  property: {
    id: string;
    title: string;
    location: string;
    price: number;
    imageUrl: string;
    description: string;
    amenities: string[];
  };
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={property.imageUrl}
        alt={property.title}
        className="w-full h-96 object-cover rounded-lg mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
      <p className="text-gray-500 mb-4">{property.location}</p>
      <p className="text-xl font-semibold text-blue-600 mb-4">
        ${property.price}
      </p>
      <p className="mb-4">{property.description}</p>
      <h2 className="text-2xl font-semibold mb-2">Amenities</h2>
      <ul className="list-disc pl-6">
        {property.amenities.map((amenity, index) => (
          <li key={index}>{amenity}</li>
        ))}
      </ul>
    </div>
  );
}
