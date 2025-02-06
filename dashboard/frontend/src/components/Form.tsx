import axios from "axios";
import { BACKEND_URL } from "../config";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";  
export const Form = () => {
    const [file, setFile] = useState<File | null>(null);
    const [brand, setBrand] = useState("");
    const [size, setSize] = useState("");
    const [color, setColor] = useState("");
    const [category, setCategory] = useState("");
    const navigate = useNavigate();  

    const uploadHandler = async (e: React.FormEvent) => {
        e.preventDefault();  

        if (!file) {
            console.error("No file selected");
            return;
        }

        const formData = new FormData();
        formData.append("filename", file);  // Append the file to FormData
        formData.append("brand", brand);  // Append brand name
        formData.append("size", size);    // Append size
        formData.append("color", color);  // Append color
        formData.append("category", category)

        try {
            const response = await axios.post(`${BACKEND_URL}/upload`, formData, {
                headers: {
                    "Authorization": localStorage.getItem("token") || "",
                    "Content-Type": "multipart/form-data"
                }
            });
            console.log('File uploaded successfully', response.data);

            // Navigate to /images after successful upload
            navigate("/images");
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    return (
        <div className="flex h-[100%] justify-center items-center px-10">
            <div>
                <form>
                    <LabelledInput label="Brand" type="text" placeholder="Brand" onChange={(e) => {
                            setBrand(e.target.value)
                    }} />

                    <div>
                        <label htmlFor="category" className="block mb-2 text-sm text-black font-semibold pt-4">Category</label>
                        <select 
                            value={category} 
                            onChange={(e) => setCategory(e.target.value)} 
                            id="category" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option value="" disabled>Choose a category</option>
                            <option value="boys">Boys</option>
                            <option value="girls">Girls</option>
                            <option value="men">Men</option>
                            <option value="women">Women</option>
                        </select>
                    </div>

                    <LabelledInput label="Size" type="text" placeholder="Size" onChange={(e) => {
                            setSize(e.target.value)
                    }} />
                    
                    <LabelledInput label="Color" type="text" placeholder="Color" onChange={(e) => {
                            setColor(e.target.value)
                    }} />

                    <LabelledInput label="Upload Files" type="file" id="myFile" name="filename" placeholder="choose" onChange={(e) => {
                            const selectedFile = e.target.files?.[0] || null;  
                            setFile(selectedFile);  
                    }} />
                    
                    <button onClick={uploadHandler} type="submit" className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Upload</button>
                </form>
            </div>
        </div>
    );
};


interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    id?: string;
    name?: string;
}

function LabelledInput({ label, placeholder, onChange, type, id, name }: LabelledInputType) {
    return <div>
        <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
        <input onChange={onChange} type={type || "text"} id={ id || "first_name"} name={name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
    </div>
}
