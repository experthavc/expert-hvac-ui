import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Theme,
  Typography,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  reviewContainer: {
    backgroundColor: theme.palette.primary.main,
    maxWidth: "350px",
    minHeight: "220px",
    margin: "1% 2% 0 0",

    [theme.breakpoints.down("md")]: {
      margin: "1% 2% 5% 0",
      paddingBottom: "5%",
    },

    [theme.breakpoints.down("sm")]: {
      margin: "1% 2% 5% 0",
      paddingBottom: "5%",
    },
  },
  author: {
    display: "flex",
    paddingBottom: "5%",
  },
  headline: {
    display: "flex",
    alignItems: "center",
    margin: "2% 0 2% 0",
  },
  content: {},
}));

const Review = ({
  profile_photo_url,
  author_name,
  text,
  rating,
  relative_time_description,
}: any) => {
  const classes = useStyles();

  return (
    <Paper className={classes.reviewContainer}>
      <div className={classes.headline}>
        <Avatar src={profile_photo_url} />
        <Rating name="read-only" value={rating} precision={0.5} readOnly />
      </div>
      <div className={classes.author}>
        <Typography color="textPrimary" variant="subtitle2">
          {author_name}
        </Typography>
        <Typography color="textPrimary">
          - {relative_time_description}
        </Typography>
      </div>
      <div className={classes.content}>
        <Typography color="textSecondary" variant="body1">
          {text}
        </Typography>
      </div>
    </Paper>
  );
};

const Reviews = ({ reviews }: any) => {
  return reviews.map((review) => (
    <Review
      profile_photo_url={review.profile_photo_url}
      author_name={review.author_name}
      text={review.text}
      rating={review.rating}
      relative_time_description={review.relative_time_description}
    />
  ));
};

export default Review;
export { Reviews };
