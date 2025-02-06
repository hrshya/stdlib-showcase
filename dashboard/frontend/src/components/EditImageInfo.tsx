import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditImageInfo = () => {
    const { id } = useParams<{ id: string }>(); // Ensure you're correctly extracting the ID
    const [imageData, setImageData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            if (!id) {
                setError("No ID found in parameters.");
                return;
            }

            try {
                const response = await axios.get(`http://localhost:8787/files/${id}`);
                setImageData(response.data);
            } catch (error) {
                console.error("Error fetching image data:", error);
                setError("Error fetching image data.");
            }
        };

        fetchData();
    }, [id]);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!id) {
            setError("No ID found for updating the image.");
            return;
        }

        // Prepare updated data (this can be a state or form input)
        const updatedData = {
            // your updated fields here
            brand: imageData.brand,
            // add other fields you want to update
        };

        try {
            const response = await axios.put(`http://localhost:8787/files/${id}`, updatedData);
            console.log("Image updated successfully:", response.data);
            // Handle successful update (e.g., redirect or show success message)
        } catch (error) {
            console.error("Error updating image data:", error);
            setError("Error updating image data.");
        }
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Edit Image Info</h1>
            {imageData ? (
                <form onSubmit={handleSubmit}>
                    {/* Display image data and input fields for editing */}
                    <label>
                        Brand:
                        <input
                            type="text"
                            value={imageData.brand}
                            onChange={(e) => setImageData({ ...imageData, brand: e.target.value })} // Update state
                        />
                    </label>
                    {/* Add other fields as necessary */}
                    <button type="submit">Update</button>
                </form>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default EditImageInfo;
