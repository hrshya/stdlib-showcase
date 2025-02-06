import React from 'react';
import { FileData } from '../types/types';

interface SortImagesProps {
  sortBy: keyof FileData;
  setSortBy: React.Dispatch<React.SetStateAction<keyof FileData>>;
}

export const SortImages: React.FC<SortImagesProps> = ({ sortBy, setSortBy }) => {
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as keyof FileData;
    setSortBy(value);
  };

  return (
    <div>
      <label htmlFor="sort">Sort by: </label>
      <select id="sort" value={sortBy} onChange={handleSortChange}>
        <option value="brand">Brand</option>
        <option value="sizeDescription">Size</option>
        <option value="color">Color</option>
        <option value="category">Category</option>
      </select>
    </div>
  );
};
