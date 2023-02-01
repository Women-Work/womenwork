import "./CardCourse.css";

import { AddRounded } from "@mui/icons-material";
import {
  Card as MCard,
  CardContent,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import Image from "mui-image";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../common/hooks";
import { selectUser } from "../../redux/userSlice";
import Course from "../../models/Course";
import { UserProfile } from "../../models/UserProfile";
import { Link } from "react-router-dom";

interface Props {
  id: number;
  title: string;
  description: string;
  price: number;
}

function Card({ id, title, description, price }: Props) {
  const user: UserProfile = useAppSelector(selectUser);
  const navigate = useNavigate();
  const path = window.location.pathname.split("/")[1];

  const handleBuyClick = () => {
    navigate(`/courses/${id}`);
  };

  let cardFooter;
  if (
    user.product?.length > 0 &&
    user.product.filter((product: Course) => product.id === id).length > 0
  ) {
    cardFooter = (
      <Grid container>
        <Grid item xs={10}>
          <Typography variant="subtitle1" className="text-poppins">
            Comprado
          </Typography>
        </Grid>
      </Grid>
    );
  } else {
    cardFooter = (
      <Grid container>
        <Grid item xs={10}>
          <Typography variant="h5" className="text-poppins">
            R${price.toString().replace(".", ",")}
          </Typography>
        </Grid>
        <Grid item xs={2} className="cart-btn">
          <AddRounded onClick={handleBuyClick} />
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid item xs={10} md={5} lg={3} alignItems="center">
      <MCard sx={{ marginX: 2, marginY: 3, height: "85%" }}>
        <CardContent sx={{ "&:last-child": { paddingBottom: 2 } }}>
          <Link to={`/courses/${id}`}>
            <Image
              style={{
                width: "100%",
                height: "auto",
                padding: 0,
                marginRight: "auto",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              src={`/assets/images/courses/${id}.png`}
              duration={300}
              alt={title}
              className="transition-hover"
            />
          </Link>

          <Typography variant="h5" className="text-poppins" marginTop={2}>
            {title}
          </Typography>

          {/* <Typography variant='body1' color='#353535'>
            {description}
          </Typography> */}

          {path !== "user" && (
            <>
              <Box className="horizontal-line"></Box>
              {cardFooter}
            </>
          )}
        </CardContent>
      </MCard>
    </Grid>
  );
}

export default Card;
