import axios from "axios";
import { useState, useEffect } from "react";

interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

interface ReviewSectionProps {
  propertyId: string;
}

export default function ReviewSection({ propertyId }: ReviewSectionProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/properties/${propertyId}/reviews`);
        setReviews(response.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch reviews.");
      } finally {
        setLoading(false);
      }
    };

    if (propertyId) fetchReviews();
  }, [propertyId]);

  if (loading) return <p>Loading reviews...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (reviews.length === 0) return <p>No reviews yet.</p>;

  return (
    <div className="space-y-4 mt-4">
      {reviews.map((review) => (
        <div key={review.id} className="border p-4 rounded shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <p className="font-semibold">{review.userName}</p>
            <p className="text-yellow-500">{'★'.repeat(review.rating)}</p>
          </div>
          <p className="text-gray-700">{review.comment}</p>
          <p className="text-gray-400 text-sm mt-1">{new Date(review.date).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
}
