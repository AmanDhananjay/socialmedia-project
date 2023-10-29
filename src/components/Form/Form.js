import React ,{useState,useEffect}from "react";
import   './styles.css';
 import { TextField, Button, Typography } from '@mui/material';
 import FileBase from 'react-file-base64';
import { useDispatch,useSelector } from "react-redux";
import { createPost,updatePost} from '../../actions/posts';
const From =({ currentId, setCurrentId }) =>{
    // const classes = useStyles();
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    const dispatch = useDispatch();

    useEffect(() => {
      if (post) setPostData(post);
    }, [post]);

  const handleSubmit =(e)=>{
    e.preventDefault();
    
    if (currentId) {
      dispatch(updatePost(currentId, postData));
      clear();
    } else {
      dispatch(createPost(postData));
      clear();
    }
   
   }
   const clear =()=>{
 setCurrentId(null);
 setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
   }

    return(<>
       

    <form autoComplete="off" noValidate  onSubmit={handleSubmit}>
 <div className="wrapper">

<div className="heading">

<Typography  className="head" variant="h6">{currentId?'Editing':'Creating'} a post</Typography>
<p></p>
</div>

<div className="input-group">
<TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
</div>

<div className="input-group">
<TextField name="title" variant="outlined" label="title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
</div>
<div className="input-group">
<TextField name="message" variant="outlined" label="message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
</div>
<div className="input-group">
<TextField name="tags" variant="outlined" label="tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
</div>

<div className="input-group"><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>




<div className="input-group">
<Button className="button" variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
</div>
<div className="input-group">
        <Button  className="button" variant="contained"  size="small" onClick={clear} fullWidth>Clear</Button>
</div>

</div>
</form>
    </>
    )
}
export default From;