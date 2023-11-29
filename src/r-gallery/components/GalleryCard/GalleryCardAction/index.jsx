import GitHubIcon from '@mui/icons-material/GitHub';
import { Box, Fade, Rating, Stack } from '@mui/material';
import GradeIcon from '@mui/icons-material/Grade';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

export default function GalleryCardAction() {

    const [ratingOpen, setRatingOpen] = useState(false)

    const toggleRatingOpen = () => {
        setRatingOpen(ratingOpen => !ratingOpen)
    }

    return (
        <>
            <Stack direction="row" spacing={2}
                sx={{ justifyContent: "space-between" }}>
                <GitHubIcon />
                <ProjectRating ratingOpen={ratingOpen} />
                <ActionControl ratingOpen={ratingOpen} onClick={toggleRatingOpen} />
            </Stack>
        </>
    )
}

// transition: fade, https://mui.com/material-ui/transitions/#fade
function ProjectRating({ ratingOpen = false }) {

    const [rate, setRate] = useState(null)


    return (
        <>
            <Box>
                <Fade in={ratingOpen} timeout={300}>
                    <Rating name="project-rating" value={rate} max={5}
                    onChange = {(e, v)=>{
                        console.log(e)
                        console.log(v)
                        setRate(v)
                    }}
                    />
                </Fade>
            </Box>
        </>
    )
}

function ActionControl({ ratingOpen = false, onClick }) {

    const actionControl = ratingOpen ? <CloseIcon onClick={onClick}/> : <GradeIcon onClick={onClick}/>

    return (
        <>
            {actionControl}
        </>
    )
}