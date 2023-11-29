import GalleryCardTitle from "./GalleryCardTitle"
import GalleryCardVideo from "./GalleryCardVideo"
import GalleryCardDescription from "./GalleryCardDescription"
import GalleryCardAction from "./GalleryCardAction"
import { Paper, Stack } from "@mui/material"

export default function GalleryCard({project, number}) {
  
  console.log(project)

  return (
    <>
    <Paper elevation={3} sx={{ width: "360px", p: 3}}>
      <Stack direction="column" spacing={2}>
        <GalleryCardTitle number = {number} title={project["Title"]}
          subtitle={project["Subtitle"]}/>
        <GalleryCardVideo />
        <GalleryCardDescription description = {project["Description"]} />
        <GalleryCardAction github_link={project["Github link"]} />
      </Stack>
    </Paper>
    </>
  )
}