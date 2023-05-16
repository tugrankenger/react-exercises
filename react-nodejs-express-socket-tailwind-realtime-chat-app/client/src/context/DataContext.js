import { createContext, useState } from 'react';

const DataContext = createContext();

export const ContextProvider = ({ children }) => {

  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([
    {
      id: 1,
      src: '/avatars/man.png',
      alt: 'man',
      isSelected: false,
    },
    {
      id: 2,
      src: '/avatars/robot.png',
      alt: 'robot',
      isSelected: false,
    },
    {
      id: 3,
      src: '/avatars/woman.png',
      alt: 'woman',
      isSelected: false,
    },
  ]);

  const values = {
    selectedImage,
    setSelectedImage,
    images,
    setImages,
  };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

export default DataContext;
