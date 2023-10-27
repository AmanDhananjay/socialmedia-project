import React from "react";
// import useStyles from './styles.js';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteIcon from '@mui/icons-material/Delete';
//import {ThumbUpAltIcon,MoreHorizIcon,DeleteIcon }from '@mui/icons-material';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { likePost, deletePost } from '../../../actions/posts';
const Post =({post,setCurrentId}) =>{
    // const classes = useStyles();
    const dispatch = useDispatch();
    return(
        <Card >
        <CardMedia  image={post.selectedFile} title={post.title} style={{ width: 300, height: 200 , alignItems: 'center'}} />
        <div >
        <Button size="small" color="primary" onClick={() =>setCurrentId(post._id) }><MoreHorizIcon fontSize="small" /> Edit</Button>
          <Typography variant="h6">{post.creator}</Typography>
          <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
        </div>
        <div >
          <Button style={{ color: 'black' }} size="small" onClick={() => setCurrentId(post._id)}><MoreHorizIcon fontSize="default" />edit</Button>
        </div>
        <div >
        <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      <CardContent>
      <Typography  gutterBottom variant="h5" component="h2">{post.title}</Typography>
      <Typography  gutterBottom variant="h5" component="h2">{post.message}</Typography>
      </CardContent>
      <CardActions >
        <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}><ThumbUpIcon fontSize="small" /> Like {post.likeCount} </Button>
        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>


      
      </Card>
    )
}
export default Post;