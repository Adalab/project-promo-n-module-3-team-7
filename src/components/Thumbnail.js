import imagePreview from '../images/whiteimage.jpg';

const Thumbnail = (props) => {
  const avatar = () => {
    if (props.photo === '') {
      return imagePreview;
    } else {
      return props.photo;
    }
  };
  return (
    <img
      src={avatar()}
      alt=""
      className="profile__preview js__profile-preview"
    />
  );
};

export default Thumbnail;
