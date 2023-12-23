import GitHubIcon from '@mui/icons-material/GitHub';
import { Box, Fade, Link, Rating, Stack } from '@mui/material';
import GradeIcon from '@mui/icons-material/Grade';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';

export default function GalleryCardAction({ github_link, ratingControl }) {


    return (
        <>
            <Stack direction="row" spacing={2}
                sx={{ justifyContent: "space-between" }}>
                <Link href={github_link} target="_blank" rel="noopener noreferrer">
                    <GitHubIcon />
                </Link>
                {ratingControl}
            </Stack>
        </>
    )
}

export function RatingControl({ group, assessment }) {

    console.log(assessment)
    const [ratingOpen, setRatingOpen] = useState(false)
    const rating = window.assessment.projects ? window.assessment.projects[group] : null

    const [rate, setRate] = useState(rating)

    const toggleRatingOpen = () => {
        setRatingOpen(ratingOpen => !ratingOpen)
    }
    useEffect(() => {
        if (assessment && assessment.projects) {
            const rating = assessment.projects[group]
            setRate(rating)
        }
    }, [assessment, group])

    const ratingUI = (assessment && assessment.group === group)? <></>:
    <Fade in={ratingOpen} timeout={300}>
        <Rating name="project-rating" value={rate} max={5} disabled={false || (assessment && assessment.submit) ||
        (assessment && assessment.group === group)}
        onChange={(e, v) => {
            setRate(v)
            // log rating if window.assessment.projects exists
            if (window.assessment.projects) {
                window.assessment.projects[group] = v
            }
        }}
    />
    </Fade>
    const projectRating = <>
        <Box>
            
                {ratingUI}
            
        </Box>
    </>
    return (
        <>
            {projectRating}
            <ActionControl ratingOpen={ratingOpen} onClick={toggleRatingOpen} />
        </>
    )
}

// transition: fade, https://mui.com/material-ui/transitions/#fade
export function ProjectRating({ ratingOpen, group }) {

    const rating = window.assessment.projects ? window.assessment.projects[group] : null
    const [rate, setRate] = useState(rating)


    return (
        <>
            <Box>
                <Fade in={ratingOpen} timeout={300}>
                    <Rating name="project-rating" value={rate} max={5}
                        onChange={(e, v) => {
                            setRate(v)
                            // log rating if window.assessment.projects exists
                            if (window.assessment.projects) {
                                window.assessment.projects[group] = v
                            }
                        }}
                    />
                </Fade>
            </Box>
        </>
    )
}

function ActionControl({ ratingOpen = false, onClick }) {

    const actionControl = ratingOpen ? <CloseIcon onClick={onClick} /> : <GradeIcon onClick={onClick} />

    return (
        <>
            {actionControl}
        </>
    )
}