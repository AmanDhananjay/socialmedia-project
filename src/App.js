import React,{useState,useEffect } from "react";
 import{ Container,AppBar,Grow,Grid} from '@mui/material';
 import Typography from '@mui/material/Typography';
 import { useDispatch } from 'react-redux';
 
 import { getPosts } from './actions/posts';
import memories from './images/t.jpg';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
//  import useStyles from './styles';
import './app.css';

const App = ()=>{
  
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
    return(<>
       <Container maxWidth="lg">   
       <div className="appbar" position="static" color="inherit">
        <Typography className="title" variant="h2" align="center">Memorie</Typography>
        <img className="img-head" src={memories} alt="icon" height="60" />
      </div>
<Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId}  />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form  currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
       </Container>

       </>
    )
}

export default App;