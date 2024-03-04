import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
    Feed,
    Navbar,
    VideoDetail,
    ChannelDetail,
    SearchFeed,
} from "./components";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Box sx={{ backgroundColor: "#000" }}>
                <Routes>
                    <Route path="/" exact element={<Feed />} />
                    <Route path="/video/:id" exact element={<VideoDetail />} />
                    <Route
                        path="/channel/:id"
                        exact
                        element={<ChannelDetail />}
                    />
                    <Route
                        path="/search/:searchTerm"
                        exact
                        element={<SearchFeed />}
                    />
                </Routes>
            </Box>
        </BrowserRouter>
    );
}

export default App;
