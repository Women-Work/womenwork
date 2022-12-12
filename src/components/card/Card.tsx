import './Card.css';

import { Button, Card as MCard, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreRounded';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

// import AddShoppingCartRoundedIcon from '@material-ui/icons/AddShoppingCartRounded';
interface Props {
  title: string;
  text: string;
  img: string;
  price: number;
}

interface ExpandMoreProps extends IconButtonProps {
  expand : boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Card(props: Props) {
  const image = `assets/images/courses/${props.img}.png`;

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  return (
    <MCard>
        <CardMedia
          component="img"
          alt={props.title}
          image={image}
          title={props.title}
        />
        <CardContent>
          <Typography variant="h4" color="initial">
            {props.title}
          </Typography>
          <Typography variant="h5" color="initial">
            R${props.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Grid container style={{ marginLeft: 5, marginRight: 5 }}>
            <Grid item xs={11}>
              <Button size="small" color="primary">
                Adicionar ao carrinho
              </Button>
            </Grid>
            <Grid item xs={1}>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="Saber mais"
              >
                <ExpandMoreIcon color="primary" />
              </ExpandMore>
            </Grid>
          </Grid>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {props.text}
          </CardContent>
        </Collapse>
    </MCard>
  );
}

export default Card;
