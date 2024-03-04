import { Box, Stack } from "@mui/material";
import React from "react";
// import { VideoCard, ChannelCard } from "./index";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const Videos = ({ videos, direction }) => {
    if (!videos?.length) return "Loading...";

    // console.log(videos);
    return (
        <Stack
            direction={direction || "row"}
            flexWrap="wrap"
            justifyContent="start"
            alignItems="start"
            gap={2}
        >
            {videos.map((item, idx) => {
                return (
                    <Box key={idx} color="white">
                        {item.id.videoId && <VideoCard video={item} />}
                        {item.id.channelId && (
                            <ChannelCard channelDetail={item} />
                        )}
                    </Box>
                );
            })}
        </Stack>
    );
};

export default Videos;
