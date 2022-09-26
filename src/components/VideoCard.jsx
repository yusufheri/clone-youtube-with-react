import {Link} from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";


const VideoCard = ({video: {id: {videoId}, snippet} }) => {
  return (
    <Card sx={{ width: { xs: '100%', sm: '358px', md: "250px" }, 
        boxShadow: 'none', borderRadius: 0 }}>
        <Link to={videoId ? `/video/${videoId}`: demoVideoUrl}>
            <CardMedia 
                image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
                alt={snippet?.title}
                sx={{ width: { xs: '100%', sm: '358px', md: "250px" }, height: 180 }} 
            />
        </Link>
        <CardContent sx={{ backgroundColor: "#1e1e1e", height: '106px' }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >
                <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
                    {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                </Typography>
            </Link>
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
                <Typography variant="subtitle2" color="gray">
                    {snippet?.channelTitle || demoChannelTitle}
                    <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
            </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard