import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import { Sidebar, Videos } from "./index";

// api call function import
import { fetchFromAPI } from "../utils/apiCall";

const Feed = () => {
    const [selectedCategory, setSelectedCaterogy] = useState("New");
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => {
                setVideos(data.items);
            })
            .catch((error) => {
                console.log("Error: " + error);
            });
    }, [selectedCategory]);

    return (
        <Stack
            sx={{
                flexDirection: {
                    xs: "column",
                    md: "row",
                },
            }}
        >
            <Box
                sx={{
                    height: { xs: "auto", md: "92vh" },
                    borderRight: "1px solid #3d3d3d",
                    px: { xs: 0, md: 2 },
                }}
            >
                <Sidebar
                    selectedCategory={selectedCategory}
                    setSelectedCaterogy={setSelectedCaterogy}
                />
                <Typography
                    className="copyright"
                    variant="body2"
                    sx={{
                        mt: 1.5,
                        color: "#fff",
                    }}
                >
                    Copyright 2023 Jayant
                </Typography>
            </Box>

            <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    mb={2}
                    sx={{ color: "white" }}
                >
                    {selectedCategory}{" "}
                    <span style={{ color: "#F31503" }}>videos</span>
                </Typography>
                <Videos videos={videos} />
            </Box>
        </Stack>
    );
};

export default Feed;
