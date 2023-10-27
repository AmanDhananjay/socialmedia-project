import React from "react";
import Post from './Post/Post';
import { Grid, CircularProgress } from '@mui/material';
import {useSelector} from 'react-redux';
// import useStyles from './styles.js';
const Posts =({setCurrentId}) =>{
    // const classes = useStyles();
    const posts = useSelector((state) => state.posts);
    return(
        !posts.length ? <CircularProgress /> : (
            <Grid container alignItems="stretch" spacing={3}>
              {posts.map((post) => (
                <Grid key={post._id} item xs={12} sm={6} md={6}>
                  <Post post={post}  setCurrentId={setCurrentId}/>
                </Grid>
              ))}
            </Grid>
          )
    )
}
export default Posts;