import { makeStyles, Theme } from "@material-ui/core";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  VKShareButton,
  WhatsappShareButton,
  EmailShareButton,

  // Comment to separate, overwriting behaviour
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  PinterestIcon,
  VKIcon,
  WhatsappIcon,
  EmailIcon
} from "react-share";


const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    paddingTop: '2%',
    paddingBottom: '2%',
    gap: '1%',
    [theme.breakpoints.down('xs')]: {
      gap: '4%',
      justifyContent: 'center'
    }
  },
  mediaItem: {
    marginRight: '1%'
  }
}));

const SocialMediaShare = ({ title, url } : { title: string, url: string}) => {
  const classes = useStyles();
  
  return (
    <div className={classes.container}>
      <FacebookShareButton url={url} quote={title} >
        <FacebookIcon
          className={classes.mediaItem}
          size={"2rem"} // You can use rem value instead of numbers
          round
        />
      </FacebookShareButton>

      <TwitterShareButton url={url} title={title}>
        {/* <TwitterShareButton title={title}> */}
        <TwitterIcon size={"2rem"} round />
      </TwitterShareButton>

      <WhatsappShareButton url={url} title={title} separator=":: ">
        <WhatsappIcon size={"2rem"} round />
      </WhatsappShareButton>

      <LinkedinShareButton
        url={url}
        title={title}
        windowWidth={750}
        windowHeight={600}
      >
        <LinkedinIcon size={"2rem"} round />
      </LinkedinShareButton>

      <PinterestShareButton
        url={url}
        media={`${url}`}
        windowWidth={1000}
        windowHeight={730}
      >
        <PinterestIcon size={"2rem"} round />
      </PinterestShareButton>

      <VKShareButton url={url} windowWidth={660} windowHeight={460}>
        <VKIcon size={"2rem"} round />
      </VKShareButton>
      <EmailShareButton url={url} subject={title} body="body">
        <EmailIcon size={"2rem"} round />
      </EmailShareButton>
    </div>
  )
}

export default SocialMediaShare;