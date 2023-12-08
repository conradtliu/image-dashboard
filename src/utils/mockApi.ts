import { Image } from "../types";

export const mockApiCall = <T>(data: T): Promise<T> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000); // Delay of 1 second
  });
};

export const saveImagesToLocalStorage = (images: Image[]): void => {
  localStorage.setItem('images', JSON.stringify(images));
};

export const getImagesFromLocalStorage = (): Image[] => {
  const images = localStorage.getItem('images');
  return images ? JSON.parse(images) : [];
};
