import { Stack, Typography, Box } from "@mui/material";


export default function ImagePanel_fixedContent() {
    return (
        <Stack direction="column" spacing={2}>
            <Box sx={{ width: "200px", height: "100%" }}>
                <img src="https://econ.ntpu.edu.tw/storage/images/ZlP7DHjLRh8IeahmFoT1EMxkmCgaxYtguN76FqiW.jpg"
                    alt="image" width="100%" height="100%" />
            </Box>
            <Typography variant="h6">
                郭文宗 教授
            </Typography>
        </Stack>
    )
}
