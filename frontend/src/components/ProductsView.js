import React,{useState,useEffect} from 'react'
import productsAPI from '../apis/productsAPI'
import Cards from './Cards'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
  
    // control: {
    //   padding: theme.spacing(2),
    // },
  }));

function ProductsView() {
    const [spacing] = React.useState(3);
     const classes = useStyles();


    const [projectInfo,setProjectInfo] = useState([]);

    const fetchProjects  = async () =>{
        const response = await productsAPI.get('/productsAPI/')
        setProjectInfo(response.data)
    }
  
    const createProductView = () => {
        return(
            <div>
              <Grid container  className={classes.root}>
                <Grid container justify="center" item>
                  <Grid container justify="flex-start" spacing={spacing} style={{'width': '90%'}}>
                {projectInfo.map(project => {
  
                    if(!project){
                        return <div>Loading..</div>
  
                    } else {
  
                        return (
                            <Grid  item >
                              <Link to={`/details/${project.name}`} >
                                <Cards name={project.name} description={project.description}>  </Cards>
                              </Link>
                            </Grid>
                        )    
                    }
            })}

                </Grid>
                 </Grid>
                   </Grid>

            </div>   
        )
    }
  
    useEffect(()=>{
        fetchProjects()
    },[])

  return(
      <>
    {createProductView()}
    </>
  )


}

export default ProductsView