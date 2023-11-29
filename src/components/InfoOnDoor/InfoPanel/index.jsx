import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import * as React from 'react';

export function InfoPanel_fixedContent() {
    return (
        <Stack direction="column" spacing={2}>
            <Typography variant="h6">
                Office Hours
            </Typography>
            <Typography variant="body1">
                Thu. 12:00 - 14:00
            </Typography>
        </Stack>
    )
}
export default function InfoPanel_variableContent({title, content}) {
    return (
        <Stack direction="column" spacing={2} sx={{alignItems: "center"}}>
            <Typography variant="h6">
                {title}
            </Typography>
            <Typography variant="body1">
                {content}
            </Typography>
        </Stack>
    )
}


