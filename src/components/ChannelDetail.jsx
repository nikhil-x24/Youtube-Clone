import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/apiCall";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";

const ChannelDetail = () => {
    const { id } = useParams();

    const [channelDetail, setChannelDetail] = useState(null);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
            setChannelDetail(data?.items[0]);
        });

        // fetch channel's videos in order to date
        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
            (data) => {
                setVideos(data?.items);
            }
        );
    }, [id]);

    console.log(channelDetail);
    console.log(videos);

    return (
        <Box minHeight="95vh">
            <div
                style={{
                    background:
                        "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(186,138,41,1) 29%, rgba(124,81,36,1) 61%, rgba(184,198,40,1) 85%, rgba(57,60,50,1) 100%)",
                    // background: "blue",
                    zIndex: 10,
                    height: "300px",
                }}
            />
            <ChannelCard channelDetail={channelDetail} marginTop="-110px" />

                <Box display="flex" p="2">
                  <Box sx={{mr: {sm: '100px'}}} />
                  <Videos videos={videos} />
                </Box>

        </Box>
    );
};

export default ChannelDetail;
