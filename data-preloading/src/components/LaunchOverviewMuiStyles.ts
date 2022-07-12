import { makeStyles, createStyles } from '@material-ui/core';

export const useStyles = makeStyles(() =>
  createStyles({
    launchImg: {
      height: 300,
      backgroundSize: 'cover',
    },
    launchImgPlaceholder: {
      height: 300,
      margin: '30px',
      backgroundSize: 'contain',
    },
    card: {
      backgroundColor: 'transparent',
    },
    cardDetails: {
      backgroundColor: 'transparent',
      textAlign: 'center',
      width: '100%',
    },
    cardDetailsTitle: {
      marginTop: '30px',
    },
    cardActions: {
      justifyContent: 'space-between',
    },
    launchDate: {
      margin: '20px 0',
    },
    launchDetails: {
      height: '150px',
      overflow: 'scroll',
    },
    launchSuccess: {
      margin: '20px',
    },
  })
);
