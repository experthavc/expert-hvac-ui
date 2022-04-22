import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontWeight: 600,
    width: "100%",
    paddingTop: "60px",
    [theme.breakpoints.down("md")]: {
      paddingTop: "25%",
    },
  },
  content: {
    marginLeft: "20%",
    marginRight: "20%",
    marginTop: "3%",
    [theme.breakpoints.down("md")]: {
      marginLeft: "5%",
      marginRight: "5%",
    },
  },
  header: {
    fontWeight: "350",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
  descriptionContainer: {
    display: "flex",
    margin: "0 0 5% 0",
  },
  descItem: {
    margin: "0 2% 0 0",
  },
  description: {
    marginTop: "10%",
    fontWeight: "400",
  },
  question: {
    marginTop: "5%",
    marginBottom: "10%",
    textAlign: "left",
  },
  questionItem: {
    marginTop: "2%",
  },
  answer: {
    marginTop: "2%",
    fontWeight: "400",
  },
}));

export default function FAQ() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Typography className={classes.header} variant="h3">
          <strong>Tdot Roofers </strong> is most experienced & professional
          roofing company in Ontario.
        </Typography>
        <div
          className={classes.descriptionContainer}
          style={{ marginTop: "5%" }}
        >
          <div className={classes.descItem}>
            <Typography variant="h5">Flat Roof</Typography>
            <p className={classes.description}>
              With a myriad of flat roofing systems available and more coming on
              stream every year, making the right choice is difficult &
              challenging for the uninitiated.
            </p>
          </div>
          <div className={classes.descItem}>
            <Typography variant="h5">Shingles</Typography>
            <p className={classes.description}>
              We offer complete roofing services for domestic homeowners, from
              slate and tile to flat roofs, and everything in between; nothing
              is too small or large.
            </p>
          </div>
          <div className={classes.descItem}>
            <Typography variant="h5">Repairs</Typography>
            <p className={classes.description}>
              From single site SMEs to national blue chip companies, our range
              of quality services can cope with any size of roofing project.with
              any size of roofing project
            </p>
          </div>
          <div className={classes.descItem}>
            <Typography variant="h5">Inspection</Typography>
            <p className={classes.description}>
              We repair roofs of both commercial and residential establishments.
              Other than roofing repairs, we also work on roof inspections and
              complete re-roofing.
            </p>
          </div>
        </div>

        <div>
          <Typography variant="h3">
            <strong>FAQ</strong>
          </Typography>
        </div>
        <div className={classes.question}>
          <div className={classes.questionItem}>
            <Typography variant="h5">
              <strong>What will a new roof cost me ?</strong>
            </Typography>
            <p className={classes.answer}>
              This is a tough one to answer because everyone’s home is
              different. The best way to get a solid estimate is to simply call
              your local trusted roofing professional. Most reputable roofers
              will offer a quote at no cost, and with no obligation. Know that
              every aspect of your home, like shape, size, and location, will
              affect the price of your new roof, as will the material you
              choose.
            </p>
          </div>
          <div className={classes.questionItem}>
            <Typography variant="h5">
              <strong>How long can I expect my roof to last ?</strong>
            </Typography>
            <p className={classes.answer}>
              Naturally, there are a few factors that can lengthen or shorten
              the life of your roof, but in general, an asphalt roof can be
              expected to last about 20 years, while a metal roof will last a
              conservative 50 years. That said, things like climate, extreme
              weather, and maintenance can affect the lifespan of your roof. If
              you live in an area that regularly gets heavy snowfall or high
              winds, your roof might take a bit more wear and tear than is
              standard. Alternatively, roofs that are regularly inspected,
              maintained, and washed can be expected to last a bit longer.
            </p>
          </div>
          <div className={classes.questionItem}>
            <Typography variant="h5">
              <strong>Can my roof be insured ?</strong>
            </Typography>
            <p className={classes.answer}>
              It’s good to know that in most cases, your roof is protected from
              major unexpected damage, like vandalism or fire, by your
              homeowner’s insurance policy. In terms of minor issues, like
              cracking or curling shingles, most roofs come with a warranty.
              Typically, a roofer’s warranty for the labor on your roof is at
              least 10 years. Every roofer provides different warranties, and
              different roofing materials come with different manufacturer
              warranties protecting from damage. It’s a good idea to take a few
              bids from multiple roofers and materials to see what warranties
              they’re offering, and which is best for you.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
