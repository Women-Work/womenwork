import { Button, Grid, Typography } from "@mui/material";
import Image from "mui-image";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { useAppDispatch, useAppSelector } from "../../../common/hooks";
import Course from "../../../models/Course";
import { UserUpdate } from "../../../models/UserUpdate";
import { selectToken } from "../../../redux/tokenSlice";
import { selectUser, updateUser } from "../../../redux/userSlice";
import { searchId } from "../../../services/Service";
import Loading from "../../static/loading/Loading";

export default function ShowCourse() {
  useEffect(() => {
    document.title = "Cursos — WomenWork";
  }, []);

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<Course>({
    id: 0,
    title: "",
    description: "",
    price: 0,
  });

  const dispatch = useAppDispatch();
  const token = useAppSelector(selectToken);
  const user = useAppSelector(selectUser);

  const isBought = user.product?.some((product) => product.id === course.id);

  async function getCourseById(id: string | undefined) {
    await searchId(`/products/${id}`, setCourse, {
      headers: {
        Authorization: token,
      },
    }).then(() => {
      setIsLoading(false);
    });
  }

  useEffect(() => {
    getCourseById(id);
  }, [id]);

  const handlePurchase = () => {
    if (token && user) {
      const update: UserUpdate = {
        type: "addProduct",
        id: user.id,
        payload: {
          productId: course.id,
        },
      };
      dispatch(updateUser(update));
      toast.success("Curso comprado com sucesso!");
      navigate("/user/courses");
    } else {
      navigate("/login");
    }
  };

  const buttonSX = {
    backgroundColor: "#E1A6A0",
    "&:hover": {
      backgroundColor: "#C8857F",
    },
  };
  return (
    <Grid container justifyContent="center" alignItems="center">
      {isLoading ? (
        <Loading />
      ) : (
        <Grid
          item
          xs={10}
          container
          sx={{
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "10px",
            padding: 5,
          }}
        >
          <Grid item container spacing={3} xs={12}>
            <Grid item sm={6} xs={12} alignSelf="center">
              <Typography
                variant="h3"
                className="title-poppins"
                style={{ marginBottom: 5 }}
              >
                {course?.title}
              </Typography>
              <Grid
                item
                sm={6}
                xs={12}
                sx={{
                  marginTop: 3,
                  marginBottom: 3,
                  display: { xs: "block", md: "none" },
                }}
              >
                <Image
                  style={{
                    width: "100%",
                    height: "auto",
                    padding: 0,
                    marginLeft: "auto",
                    borderRadius: "5px",
                  }}
                  src={`../assets/images/courses/${id}.png`}
                  duration={300}
                  alt=""
                />
              </Grid>
              <Typography
                variant="h5"
                className="text-poppins"
                style={{ marginBottom: 5 }}
              >
                R${course?.price.toString().replace(".", ",")}
              </Typography>
              <Typography
                variant="body1"
                style={{ color: "#353535", textAlign: "justify" }}
              >
                {course?.description}
              </Typography>
            </Grid>
            <Grid
              item
              sm={6}
              xs={12}
              sx={{
                marginTop: 0,
                marginBottom: 7,
                display: { xs: "none", md: "block" },
              }}
            >
              <Image
                style={{
                  width: "100%",
                  height: "auto",
                  padding: 0,
                  marginLeft: "auto",
                  borderRadius: "5px",
                }}
                src={`../assets/images/courses/${id}.png`}
                duration={300}
                alt=""
              />
              <Button
                variant="contained"
                fullWidth
                onClick={handlePurchase}
                sx={buttonSX}
                disabled={isBought}
              >
                {isBought ? "Comprado" : "Comprar"}
              </Button>
            </Grid>
            <Grid
              item
              sm={6}
              xs={12}
              sx={{
                marginTop: 0,
                marginBottom: 7,
                display: { xs: "block", md: "none" },
              }}
            >
              <Button
                variant="contained"
                fullWidth
                onClick={handlePurchase}
                sx={buttonSX}
                disabled={isBought}
              >
                {isBought ? "Comprado" : "Comprar"}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}
