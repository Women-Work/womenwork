import { Button, Card as MCard, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import React from 'react';
import './Card.css';
import AddShoppingCartRoundedIcon from '@material-ui/icons/AddShoppingCartRounded';

interface Props {
  title: string;
  text: string;
  price: number;
}

function Card(props: Props) {
  const image = `../../../public/assets/images/courses/${props.title}.png`
  return (
    <MCard>
      <CardActionArea>
        <CardMedia
          component="img"
          alt=""
          height="140"
          image={image}
          title={props.title}
        />
        <CardContent>
          <Typography variant="h2" color="initial">
            {props.title}
          </Typography>
          <Typography variant="h4" color="initial">
            R${props.price}
          </Typography>
          <Typography variant="body1" color="initial">
            {props.text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <AddShoppingCartRoundedIcon />
        </Button>
        <Button size="small" color="primary">
          Saber mais
        </Button>
      </CardActions>
    </MCard>
  );
}

export default Card;
