import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export function Example1() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={8}>
          <Item>xs=8 (row 1)</Item>
        </Grid>
        <Grid xs={4}>
          <Item>xs=4 (row 1)</Item>
        </Grid>
        <Grid xs={4}>
          <Item>xs=4 (row 2)</Item>
        </Grid>
        <Grid xs={8}>
          <Item>xs=8 (row 2) </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export function Example2() {
  return (
    <Grid container spacing={2}>
      <Grid xs={6} md={8}>
        <Item>xs=6 md=8</Item>
      </Grid>
      <Grid xs={6} md={4}>
        <Item>xs=6 md=4</Item>
      </Grid>
      <Grid xs={6} md={4}>
        <Item>xs=6 md=4</Item>
      </Grid>
      <Grid xs={6} md={8}>
        <Item>xs=6 md=8</Item>
      </Grid>
    </Grid>
  );
}