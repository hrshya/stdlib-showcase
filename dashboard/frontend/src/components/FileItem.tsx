import React from "react";
import { FileData } from "../types/types";
import { Link } from "react-router-dom";

interface FileItemProps {
  file: FileData;
  editMode: string | null;
  editData: { brandName: string; size: string; color: string };
  setEditData: React.Dispatch<React.SetStateAction<{ brandName: string; size: string; color: string }>>;
  setEditMode: React.Dispatch<React.SetStateAction<string | null>>;
  deleteFile: (fileKey: string) => void;
  editFile: (file: FileData) => void;
  saveEdits: (fileId: string) => void;
}

export const FileItem: React.FC<FileItemProps> = ({
  file,
  deleteFile,
  editFile,
}) => {


  return (
    <li>
      <div className="flex justify-between items-center mt-2 px-4 py-2 border-b-2 border-slate-300 rounded-lg">
          <>
            <div className="overflow-hidden rounded-xl">
              {file.url.match(/\.(jpeg|jpg|gif|png)$/i) ? (
                <img className="h-24 w-36 rounded-xl object-cover" src={file.url} alt={file.key} />
              ) : (
                <a href={file.url} target="_blank" rel="noopener noreferrer">
                  Download
                </a>
              )}
            </div>
            <div className="flex items-center gap-8">
              <div>{(file.size / 1000).toFixed(1)} KB</div>
              <div>{new Date(file.lastModified).toLocaleString()}</div>
              <div>Brand: {file.brand}</div>
              <div>Size: {file.sizeDescription}</div>
              <div>Color: {file.color}</div>
              <div>Category: {file.category}</div>
              <div>
                <a href={file.url}  target="_blank" rel="noopener noreferrer">
                  View
                </a>
              </div>
              <div>
                <Link to={`/images/${file.id}/edit`}>
                  <button
                    className="text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5"
                    onClick={() => editFile(file)}
                  >
                    Edit
                  </button>
                </Link>
                <button
                  className="text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 ms-2 mb-2"
                  onClick={() => deleteFile(file.key)}
                >
                  Delete
                </button>
              </div>
            </div>
          </>
      </div>
    </li>
  );
};
