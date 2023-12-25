import GitHubIcon from '@mui/icons-material/GitHub';
import { Box, Fade, Link, Rating, Stack } from '@mui/material';
import GradeIcon from '@mui/icons-material/Grade';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';

export default function GalleryCardAction({ github_link, group, assessment }) {

    // const ratingControl = (assessment.group && assessment.group===group) ?1:0
    console.log(assessment && assessment.group && assessment.group === group)
    const ratingControl = (assessment && assessment.group && assessment.group === group) ? <></> : <RatingControl group={group} assessment={assessment}/> 

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
    // const rating = null

    const [rate, setRate] = useState(
        (assessment && assessment.projects && assessment.projects[group]) ? assessment.projects[group] : null
    )
    console.log(rate)
    const toggleRatingOpen = () => {
        setRatingOpen(ratingOpen => !ratingOpen)
    }
    useEffect(() => {
        if (assessment && assessment.projects && assessment.projects[group]) {
            setRate(assessment && assessment.projects && assessment.projects[group])
        }
    }, [assessment, group])

    const ratingUI = (assessment && assessment.projects && assessment.projects[group] === group) ? <></> :
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

    return (
        <>
            <Box>
                {ratingUI}
            </Box>
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