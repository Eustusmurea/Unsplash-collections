import React, { useEffect, useState } from "react";
import axios from "axios";
import Results from "./results";
import { Photo } from "./types";

const Images: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(
          "https://api.unsplash.com/photos/?client_id=h1YylPE0VA-wM4FfOEsTiMEJVPt_PACB3-2i0PhAoYA"
        );
        setPhotos(response.data);
      } catch (error) {
        console.error("Error fetching photos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="text-center mt-8">Loading...</div>
      ) : (
        <Results photos={photos} />
      )}
    </div>
  );
};

export default Images;
