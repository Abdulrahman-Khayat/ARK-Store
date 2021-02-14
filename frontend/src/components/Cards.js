import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import img1 from '../logo.svg'

const useStyles = makeStyles({
  root: {
    // maxHeight: 300,
    // height: 300,
    
    maxWidth: 250,
    textAlign: 'left',
  },
  media: {
    height: 120,
  },
});

export default function Cards(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img1}
          title="Contemplative Reptile"
        />
        <CardContent style={{'height': '112px'}}>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" >
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
 
      <CardActions >
        {/* <Button size="small" color="primary">
          Share
        </Button> */}
        <Typography variant='h6'> 1099.99 SAR</Typography> 


        {/* <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
      </CardActionArea>
    </Card>
  );
}
