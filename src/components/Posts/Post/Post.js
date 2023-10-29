import React from "react";
// import useStyles from './styles.js';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteIcon from '@mui/icons-material/Delete';
import   './styles.css';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { likePost, deletePost } from '../../../actions/posts';
const Post =({post,setCurrentId}) =>{
    const dispatch = useDispatch();
    return(
        <Card id="card" >
        <CardMedia className="cardmedia" image={post.selectedFile} title={post.title} style={{ width: 310, height: 200 , alignItems: 'center'}} />
      
        <div className="title-contaner">
        <div className="t-c" >{post.title}</div>
        <Button size="small" color="primary" onClick={() =>setCurrentId(post._id) }><MoreHorizIcon fontSize="small" /> Edit</Button>
        </div>
      
      <div className="message">
      <Typography  gutterBottom variant="h5" component="h2">{post.message}</Typography>
      </div>


      <div className="tag" >
        <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
      </div>


      <div className="name" >
          <Typography variant="h6">{post.creator}</Typography>
          <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
        </div>


      <CardActions  className="btn">
        <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}><ThumbUpIcon fontSize="small" /> Like {post.likeCount} </Button>
        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>


      
      </Card>
    )
}
export default Post;