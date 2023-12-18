import GalleryCardTitle from "./GalleryCardTitle"
import GalleryCardVideo from "./GalleryCardVideo"
import GalleryCardDescription from "./GalleryCardDescription"
import GalleryCardAction from "./GalleryCardAction"
import { Paper, Stack } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';
import { useState } from "react";

export function GalleryCard({project, number, group, init_rate=null}) {

  return (
    <>
    <Paper elevation={3} sx={{p: 3}}> 
      <Stack direction="column" spacing={2}>
        <GalleryCardTitle number = {number} title={project["Title"]}
          subtitle={project["Subtitle"]}/>
        <GalleryCardVideo link = {project["Video link"]} />
        <GalleryCardDescription description = {project["Description"]} />
        <GalleryCardAction github_link={project["Github link"]} group={group} init_rate={init_rate} />
      </Stack>
    </Paper>
    </>
  )
}

export default function GalleryGridCard({project, number, group, init_rate=null}){

  return <>
  <Grid xs={12} sm = {6} md={4} xl={3}>
    <GalleryCard project={project} number={number} group={group} init_rate={init_rate}/>
  </Grid>
  </>

}