import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardHeader } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
});

export default function ImgMediaCard({id, title, user_id, body,imgs}) {
  const classes = useStyles();
  const myTheme = {
    cardHeaderStylePref:{
       background: 'linear-gradient(to right bottom, #430089, #82ffa1)',
       color:'white',
       height: 40,
       padding: 0
     }
 }
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardHeader style={myTheme.cardHeaderStylePref}
        title= {"ID: "+id+"\nUserId: "+user_id} className = {classes.cardHeaderClass}
        />
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image={imgs}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
