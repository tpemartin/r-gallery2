import { Box, Typography } from "@mui/material";

export default function GalleryCardDescription() {
    return (
        <>
            <Box sx={{ overflow: 'hidden', height: "300px",
        overflowY: "scroll" }}>
                <Typography variant="body1">
                    Sequels are never as good as the original. And when the original was terrible, there is even more reason to dread the next episode. So it is with “Tariff Man Part Two”. In the White House, Donald Trump put more new tariffs on American imports than any president in nearly a century. His philosophy was simple: “I am a Tariff Man. When people or countries come in to raid the great wealth of our Nation, I want them to pay for the privilege of doing so.”

                    Mr Trump’s protectionism made America poorer, did little to help exporters and fed the inflation still raging. If he wins the Republican presidential nomination (a likely outcome) and goes on to win the election (too close to call), he has vowed to ramp up things. He is mulling an across-the-board levy of perhaps 10% on all products entering America. In one fell swoop, his plans would more than triple the average American tariff. The direct costs would be bad enough, with the tariffs functioning as a tax on consumers and hurting most producers. Yet they would also tear at America’s ties with its allies and threaten to wreck the global trade system.
                </Typography>
            </Box>
        </>
    )
}