import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";

import Grid from "../../../common/Grid";
import { useAppSelector } from "../../../common/hooks";
import { selectUser } from "../../../redux/userSlice";
import Card from "../../cardCourse/CardCourse";

function MyCourses() {
  useEffect(() => {
    document.title = "Meus cursos — WomenWork";
  }, []);

  const user = useAppSelector(selectUser);
  const userCouses = user.product;

  let content;
  if (userCouses && userCouses.length > 0) {
    content = userCouses.map((course) => (
      <Card
        key={course.id}
        id={course.id}
        title={course.title}
        description={course.description}
        price={course.price}
      />
    ));
  } else {
    content = (
      <Box marginTop={5}>
        <Typography variant="h4" className="title-poppins">
          Você ainda não comprou nenhum curso
        </Typography>
      </Box>
    );
  }

  let title = (
    <Typography
      variant="h2"
      className="title-poppins"
      sx={{
        display: {
          xs: "none",
          md: "block",
        },
      }}
    >
      Meus cursos
    </Typography>
  );

  return (
    <>
      <Grid title={title}>{content}</Grid>
    </>
  );
}

export default MyCourses;
