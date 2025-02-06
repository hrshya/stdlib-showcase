import axios from "axios";
import { useState, useEffect } from "react";
import { BACKEND_URL } from "../config";
import { FileData } from "../types/types";
import { FileItem } from "./FileItem";
import { DeleteByBrand } from "./DeleteByBrand";

export const UploadedFileList = () => {
  const [files, setFiles] = useState<FileData[]>([]);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState<string | null>(null);
  const [editData, setEditData] = useState({ brandName: "", size: "", color: "" });
  const [brandToDelete, setBrandToDelete] = useState("");

  const [filterBrand, setFilterBrand] = useState<string>("");
  const [filterSize, setFilterSize] = useState<string>("");
  const [filterColor, setFilterColor] = useState<string>("");
  const [filterCategory, setFilterCategory] = useState<string>("");

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/files`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });
        setFiles(response.data.files);
      } catch (error) {
        console.error("Error fetching files:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, []);

  const filteredFiles = files.filter((file) => {
    return (
      (filterBrand ? file.brand === filterBrand : true) &&
      (filterSize ? file.sizeDescription === filterSize : true) &&
      (filterColor ? file.color === filterColor : true) &&
      (filterCategory ? file.category === filterCategory : true)
    );
  });

  const deleteFile = async (fileKey: string) => {
    if (window.confirm("Are you sure you want to delete this file?")) {
      try {
        await axios.delete(`${BACKEND_URL}/files/${fileKey}`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });
        setFiles(files.filter((file) => file.key !== fileKey));
      } catch (error) {
        console.error(`Error deleting file ${fileKey}:`, error);
        alert("Failed to delete the file. Please try again.");
      }
    }
  };

  const deleteFilesByBrand = async () => {
    if (window.confirm(`Are you sure you want to delete all files for the brand: ${brandToDelete}?`)) {
      try {
        await axios.delete(`${BACKEND_URL}/files/brand/${brandToDelete}`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });
        setFiles(files.filter((file) => file.brand !== brandToDelete));
        setBrandToDelete("");
      } catch (error) {
        console.error(`Error deleting files for brand ${brandToDelete}:`, error);
        alert("Failed to delete the files. Please try again.");
      }
    }
  };

  const editFile = (file: FileData) => {
    console.log("Editing file:", file); // Log the file being edited
    setEditMode(file.id);
    setEditData({ brandName: file.brand, size: file.sizeDescription, color: file.color });
  };

  const saveEdits = async (fileId: string) => {
    if (!fileId) return;

    if (!editData.brandName || !editData.size || !editData.color) {
      alert("All fields must be filled out.");
      return;
    }

    try {
      const response = await axios.put(`${BACKEND_URL}/files/${fileId}`, editData, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });

      // Update the state with the new data returned from the server if necessary
      setFiles((prevFiles) =>
        prevFiles.map((file) =>
          file.id === fileId ? { ...file, ...response.data } : file
        )
      );

      alert("File updated successfully.");
      setEditMode(null);
    } catch (error) {
      console.error(`Error updating file ${fileId}:`, error);
      alert("Failed to update the file. Please try again.");
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="file-list">
      <h1 className="text-6xl font-semibold mb-16">Uploaded Files</h1>

      <div className="flex justify-between items-center">
        <div className="filter-section inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <select value={filterBrand} className="px-4 py-2 cursor-pointer text-sm text-gray-700" onChange={(e) => setFilterBrand(e.target.value)}>
            <option value="">All Brands</option>
            {[...new Set(files.map((file) => file.brand))].map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>

          <select value={filterSize} className="px-4 py-2 cursor-pointer text-sm text-gray-700" onChange={(e) => setFilterSize(e.target.value)}>
            <option value="">All Sizes</option>
            {[...new Set(files.map((file) => file.sizeDescription))].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>

          <select value={filterColor} className="px-4 py-2 cursor-pointer text-sm text-gray-700" onChange={(e) => setFilterColor(e.target.value)}>
            <option value="">All Colors</option>
            {[...new Set(files.map((file) => file.color))].map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>

          <select value={filterCategory} className="px-4 py-2 cursor-pointer text-sm text-gray-700" onChange={(e) => setFilterCategory(e.target.value)}>
            <option value="">Category</option>
            {[...new Set(files.map((file) => file.category))].map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center mt-8">
          <DeleteByBrand
            brandToDelete={brandToDelete}
            setBrandToDelete={setBrandToDelete}
            deleteFilesByBrand={deleteFilesByBrand}
          />
        </div>
      </div>

      {filteredFiles.length > 0 ? (
        <ul>
          {filteredFiles.map((file) => (
            <FileItem
              key={file.key}
              file={file}
              editMode={editMode}
              editData={editData}
              setEditData={setEditData}
              setEditMode={setEditMode}
              deleteFile={deleteFile}
              editFile={editFile}
              saveEdits={saveEdits}
            />
          ))}
        </ul>
      ) : (
        <p>No files found.</p>
      )}
    </div>
  );
};
