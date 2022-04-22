import axios from "axios";

const get_google_reviews = async () => {
  const res = await axios.get(
    `https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJ-_Y6u_8xK4gRbmOZ0v99fR0&key=AIzaSyB-UXN23Hxfw4WkBB9b39KKa2-IGtDyZKw`
  );

  console.log(res.data);

  return {};
};

export default get_google_reviews;
