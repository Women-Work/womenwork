import "./User.css";

import { BookmarksRounded, VideoLibraryRounded } from "@mui/icons-material";
import { Box, Grid, Tab, Tabs, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useAppSelector } from "../../common/hooks";
import TabPanel from "../../common/TabPanel";
import MyCourses from "../../components/courses/myCourses/MyCourses";
import { selectUser } from "../../redux/userSlice";
import UserImage from "./UserImage";

function User() {
  useEffect(() => {
    document.title = 'Perfil — WomenWork';
  }, []);
  
  const user = useAppSelector(selectUser);
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid
        container
        sx={{
          flexDirection: {
            xs: "column",
            md: "row",
          },
          justifyContent: "center",
        }}
      >
        <Grid item md={3} p={2}>
          <UserImage />

          <Typography
            variant="h3"
            align="center"
            className="title-poppins"
            sx={{ mt: 2 }}
          >
            {user.name}
          </Typography>

          <Typography
            variant="subtitle1"
            align="center"
            className="text-poppins"
            sx={{ mb: 2, color: "#404040" }}
          >
            {user.user}
          </Typography>

          <Box>
            <Tabs
              value={value}
              onChange={handleChange}
              sx={{
                "& .MuiTabs-flexContainer": {
                  justifyContent: "space-around",
                  textAlign: {
                    xs: "center",
                    md: "left",
                  },
                  flexDirection: {
                    xs: "row",
                    md: "column",
                  },
                },
                "& .MuiTab-root": {
                  color: "primary.main",
                  "&:hover": {
                    color: "primary.dark",
                  },
                },
                "& .Mui-selected": {
                  color: "primary.dark",
                  border: "3px solid primary.main",
                },
                "& .MuiButtonBase-root": {
                  flexDirection: {
                    xs: "column",
                    md: "row",
                  },
                  "& .MuiSvgIcon-root": {
                    mr: {
                      xs: 0,
                      md: 1,
                    },
                  },
                },
                "& .MuiTabs-indicator": {
                  display: {
                    md: "none",
                  },
                },
              }}
            >
              <Tab
                component={Link}
                icon={<VideoLibraryRounded />}
                to="/user/courses"
                label="Meus cursos"
              ></Tab>
              <Tab
                component={Link}
                icon={<BookmarksRounded />}
                to="/user/favourites"
                label="Favoritos"
              ></Tab>
            </Tabs>
          </Box>
        </Grid>

        <Grid item md={9}>
          <TabPanel value={value} index={0}>
            <MyCourses />
          </TabPanel>

          <TabPanel value={value} index={1}>
            tab3
          </TabPanel>
        </Grid>
      </Grid>
    </>
  );
}

export default User;
