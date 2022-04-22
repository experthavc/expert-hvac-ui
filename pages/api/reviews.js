import axios from "axios";

const get_google_reviews = async () => {
  const res = await axios.get(
    `https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJ-_Y6u_8xK4gRbmOZ0v99fR0&key=AIzaSyB-UXN23Hxfw4WkBB9b39KKa2-IGtDyZKw`
  );

  console.log(res.data.result);

  return {
    reviews: res.data.result.reviews
      .filter((review) => review.text.length > 0)
      .sort((review1, review2) => review2.time - review1.time)
      .slice(0, 3),
    rating: res.data.result.rating,
    user_ratings_total: res.data.result.user_ratings_total,
  };
};

export default get_google_reviews;
