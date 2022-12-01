import { Grid } from '@material-ui/core';
import React from 'react';
import Card from '../../components/card/Card';

const courses = [
  {
    title: 'JavaScript',
    text: 'Curso de JavaScript',
    img: 'js',
    price: 20
  },
  {
    title: 'HTML e CSS',
    text: 'Curso de HTML e CSS',
    img: 'htmlcss',
    price: 20,
  },
  {
    title: 'MYSQL',
    text: 'Curso de MYSQL',
    img: 'mysql',
    price: 20,
  }
]

function Courses() {
  return (
    <>
    <Grid
      container
      spacing={5}
      alignItems="center"
      justifyContent="center"
      style={{ padding: 20 }}
    >
      {courses.map((course) => (
        <Grid item xs={10} md={5} lg={3}>
          <Card
            title={course.title}
            text={course.text}
            img={course.img}
            price={course.price} />
        </Grid>
      ))}
    </Grid>
    </>
  )
}

export default Courses
