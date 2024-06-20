import {useState, useEffect} from 'react';

const useImageValidation = (imageUrl: string) => {
  const [isImageValid, setIsImageValid] = useState(false);

  useEffect(() => {
    const checkImageType = async () => {
      try {
        const response = await fetch(imageUrl);
        if (!response.ok) {
          setIsImageValid(false);
          console.log('Network response was not ok');
        }

        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.startsWith('image')) {
          setIsImageValid(false);
        }

        setIsImageValid(true);
      } catch (error) {
        console.log('Error al validar la imagen:', error);
        setIsImageValid(false);
      }
    };

    checkImageType();
  }, [imageUrl]);

  return isImageValid;
};

export default useImageValidation;
