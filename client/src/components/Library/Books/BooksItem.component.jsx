import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";

const styles = () => ({
  card: {
    display: "flex"
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: "100%"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 300
  }
});

function MediaControlCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardActionArea>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5" className="capitalize">
              {props.info.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {props.info.subtitle}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              {props.info.url}
            </Typography>
          </CardContent>
        </CardActionArea>
      </div>
      <CardMedia
        className={classes.cover}
        image={props.info.img}
        title={props.info.subtitle}
      />
    </Card>
  );
}

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(MediaControlCard);
