import GalleryCardTitle from "./GalleryCardTitle"
import GalleryCardVideo from "./GalleryCardVideo"
import GalleryCardDescription from "./GalleryCardDescription"
import GalleryCardAction from "./GalleryCardAction"
import { Paper, Stack } from "@mui/material"

export default function GalleryCard({object}) {
  return (
    <>
    <Paper elevation={3} sx={{ width: "360px", p: 3}}>
      <Stack direction="column" spacing={2}>
        <GalleryCardTitle title={object['Title']} subtitle={object['Subtitle']}/>
        <GalleryCardVideo video_url={object['Video link']}/>
        <GalleryCardDescription des={object['Description']}/>
        <GalleryCardAction link={object['Github link']}/>
      </Stack>
    </Paper>
    </>
  )
}