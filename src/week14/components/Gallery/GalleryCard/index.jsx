import GalleryCardTitle from "./GalleryCardTitle"
import GalleryCardVideo from "./GalleryCardVideo"
import GalleryCardDescription from "./GalleryCardDescription"
import GalleryCardAction from "./GalleryCardAction"
import { Paper, Stack } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';
import { useState } from "react";

export function GalleryCard({project, number}) {

  const [cardRating, setCardRating] = useState(null)

  window.ratings[number-1] = cardRating

  return (
    <>
    <Paper elevation={3} sx={{p: 3}}> 
      <Stack direction="column" spacing={2}>
        <GalleryCardTitle number = {number} title={project["Title"]}
          subtitle={project["Subtitle"]}/>
        <GalleryCardVideo link = {project["Video link"]} />
        <GalleryCardDescription description = {project["Description"]} />
        <GalleryCardAction github_link={project["Github link"]} setCardRating={setCardRating} />
      </Stack>
    </Paper>
    </>
  )
}

export default function GalleryGridCard({project, number}){

  return <>
  <Grid xs={12} sm = {6} md={4} xl={3}>
    <GalleryCard project={project} number={number}/>
  </Grid>
  </>

}