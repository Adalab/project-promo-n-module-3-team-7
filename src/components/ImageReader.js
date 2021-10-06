import { useRef, useState } from "react";

const ImageReader = (props) => {

  const fileElement = useRef();

  const fileReader = new FileReader();

  const handleFile = () => {
    const selectedFile = fileElement.current.files[0];

    if (selectedFile) {
      console.log(selectedFile);

      fileReader.readAsDataURL(selectedFile);

    }
  };

  const getImage = () => {
    props.handleImage(fileReader.result);
    console.log(fileReader.result)
  };

  fileReader.addEventListener('load', getImage);
  return (
    <>

      <input
        ref={fileElement}
        type="file"
        name="photo"
        id="img-selector"
        className="action__hiddenField js__profile-upload-btn"
        onChange={handleFile}


      />

    </>
  );
};
export default ImageReader;
