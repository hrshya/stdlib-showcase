import React from "react";

interface DeleteByBrandProps {
  brandToDelete: string;
  setBrandToDelete: React.Dispatch<React.SetStateAction<string>>;
  deleteFilesByBrand: () => void;
}

export const DeleteByBrand: React.FC<DeleteByBrandProps> = ({
  brandToDelete,
  setBrandToDelete,
  deleteFilesByBrand,
}) => {
  return (
    <div className="flex items-center gap-4 mb-8">
      <input
        type="text"
        value={brandToDelete}
        onChange={(e) => setBrandToDelete(e.target.value)}
        placeholder="Enter brand name to delete"
        className="border p-2 rounded"
      />
      <button
        className="text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5"
        onClick={deleteFilesByBrand}
      >
        Delete by Brand
      </button>
    </div>
  );
};
