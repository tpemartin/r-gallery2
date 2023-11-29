import GitHubIcon from '@mui/icons-material/GitHub';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Stack } from '@mui/material';

export default function GalleryCardAction() {
    return (
        <>
            <Stack direction="row" spacing={2}
            sx={{justifyContent: "space-between"}}>
                <GitHubIcon />
                <ExpandMoreIcon />
            </Stack>
        </>
    )
}