import React, { FC } from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import LaunchInfo from '../LaunchOverview/LaunchOverview';
import { LaunchType } from '../../types/LaunchType';

type LaunchesInfoProps = {
  launches: LaunchType[];
};

const LaunchesPage: FC<LaunchesInfoProps> = ({ launches }) => {
  return (
    <>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h4" color="textPrimary">
          Welcome to <span>Space X Land!</span>
        </Typography>
        <Typography variant="h6" component="h6" color="textPrimary">
          Explore Space X recent lauches
        </Typography>
        <>
          <Grid container justifyContent="flex-start" spacing={7}>
            {launches?.map((launch: any) => (
              <LaunchInfo key={launch.id} launch={launch} />
            ))}
          </Grid>
        </>
      </Container>
    </>
  );
};

export default LaunchesPage;
