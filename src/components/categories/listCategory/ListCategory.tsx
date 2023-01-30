import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useAppSelector } from '../../../common/hooks';
import Category from '../../../models/Category';
import { search } from '../../../services/Service';
import { selectToken } from '../../../redux/tokenSlice';

function ListCategory() {
  const [categories, setCategories] = useState<Category[]>([]);
  const token = useAppSelector(selectToken);

  async function getCategory(){
    await search("/categories", setCategories, token);
  }

  useEffect(()=>{
    getCategory()
  }, [categories.length])

  return (
    <>
    {
      categories.map(category => (
        <Box m={2} key={category.name}>
          <Card variant="outlined">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Categoria
              </Typography>
              <Typography variant="h5" component="h2">
                {category.name}
              </Typography>
            </CardContent>
            <CardActions>
              <Box display="flex" justifyContent="center" mb={1.5} >

                <Link to={`/categories/add/${category.id}`} className="text-decorator-none">
                  <Box mx={1}>
                    <Button variant="contained" className="marginLeft" size='small' color="primary" >
                      atualizar
                    </Button>
                  </Box>
                </Link>
                <Link to={`/categories/delete/${category.id}`} className="text-decorator-none">
                  <Box mx={1}>
                    <Button variant="contained" size='small' color="secondary">
                      deletar
                    </Button>
                  </Box>
                </Link>
              </Box>
            </CardActions>
          </Card>
        </Box>
      ))
}
    </>
  );
}


export default ListCategory;