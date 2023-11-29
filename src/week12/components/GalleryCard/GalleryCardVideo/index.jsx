import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Stack } from '@mui/material';


export default function GalleryCardVideo() {
    return (
        <>
            <Stack direction="column" spacing={2}
            sx={{alignItems: "center"}}>
                {/* <Language /> */}
                <VideoEmbed />
            </Stack>
        </>

    )
}

// helps

function Language() {
    return (
        <>

            <FormControl>
                <FormLabel
                sx={{margin: "auto"}}
                id="demo-row-radio-buttons-group-label">Language</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="ch" control={<Radio />} label="中" />
                    <FormControlLabel value="en" control={<Radio />} label="En" />

                </RadioGroup>
            </FormControl>
        </>
    )
}
function VideoEmbed() {
    const src = "https://www.youtube.com/embed/bMCiAKNUpTY"
    const src2 = "https://player.vimeo.com/video/837954010" 
    return (
        <>
            <iframe src={src2} //
            width={"100%"} height={200} 
            frameBorder={0} 
            allow="autoplay; fullscreen" 
            allowFullScreen />
        </>
    )
}

<iframe width="560" height="315" src="https://www.youtube.com/embed/bMCiAKNUpTY?si=rnNmijqlgr_UzpGI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>