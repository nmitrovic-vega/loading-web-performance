import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
  Chip,
} from '@material-ui/core';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import classNames from 'classnames';
import styles from './LaunchOverview.module.scss';
import { useStyles } from '../LaunchOverviewMuiStyles';
import SpaceXPlaceholder from '../../assets/images/rocket.svg';
import { LaunchType } from '../../types/LaunchType';

type LaunchInfoProps = {
  launch: LaunchType;
};

const LaunchInfo: FC<LaunchInfoProps> = ({ launch }) => {
  const classes = useStyles();
  const [img, setImg] = useState<string | null>(launch?.links.flickr_images[0]);

  const renderLaunchDetails = (): string => {
    if (launch.details) {
      return `${launch.details.slice(0, 250)}...`;
    }

    return 'No details about launch.';
  };

  return (
    <Grid xs={4} item>
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <CardMedia
            className={img ? classes.launchImg : classes.launchImgPlaceholder}
            image={img || SpaceXPlaceholder}
            onError={() => setImg(null)}
          />
          <Chip
            className={classes.launchDate}
            label={new Date(launch.launch_date_utc).toLocaleDateString()}
            variant="outlined"
            color="primary"
          />
          <Typography
            variant="h6"
            component="h6"
            color="textPrimary"
            gutterBottom
          >
            {launch.mission_name}
          </Typography>
          <Typography
            className={classNames(classes.launchDetails, {
              [styles.launchDetailsEmpty]: !launch.details,
            })}
            color="textSecondary"
          >
            {renderLaunchDetails()}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Link to={`/launches/${launch.id}/rocket`}>
            <Button
              size="medium"
              variant="contained"
              color="primary"
              endIcon={<ArrowForwardOutlinedIcon />}
            >
              Learn More
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default LaunchInfo;
