import { Grid, Box, Link, Typography } from "@mui/material";
import "./About.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    document.title = "Sobre nós — WomenWork";
  }, []);

  return (
    <>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={12} className="titulo">
          <Typography variant="h2" className="title-poppins no-selection">
            Sobre nós
          </Typography>
        </Grid>

        <Grid
          container
          item
          className="container-center no-selection"
          lg={12}
          xs={12}
          sm={6}
        >
          <Grid item lg={6} xs={6} sm={6}>
            <img
              style={{ width: "60%" }}
              className="padding-left"
              src="/assets/images/about/about1.svg"
              alt=""
            />
          </Grid>

          <Grid item lg={6} xs={10} sm={6}>
            <Typography
              variant="h5"
              className="title-poppins mb-text no-selection"
            >
              Quem somos
            </Typography>
            <Typography variant="subtitle1">
              {" "}
              WomenWork oferece cursos que irão especializar mulheres que
              desejam crescer no mercado de trabalho conforme a necessidade de
              cada uma. Nosso objetivo é integrar o máximo de mulheres possíveis
              dentro desse ambiente.
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          item
          className="container-center no-selection"
          lg={12}
          xs={12}
          sm={6}
          sx={{ p: { md: 8 } }}
        >
          <Grid item xs={10} lg={6} sm={6}>
            <Typography
              variant="h5"
              className="title-poppins mb-text no-selection"
            >
              Nossa missão
            </Typography>
            <Typography variant="subtitle1">
              Promover e contribuir para o desenvolvimento profissional através
              da educação e do trabalho alcançando o máximo de mulheres do
              Brasil e exterior.
            </Typography>
          </Grid>
          <Grid
            item
            className="container-center"
            xs={6}
            lg={6}
            sm={6}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <img
              style={{ width: "70%" }}
              className="padding-left"
              src="/assets/images/about/about2.svg"
              alt=""
            />
          </Grid>
        </Grid>

        <Grid
          container
          item
          className="container-center no-selection "
          lg={12}
          xs={12}
          sm={6}
        >
          <Grid item xs={6} lg={6} sm={6}>
            <img
              style={{ width: "70%" }}
              className="padding-left"
              src="/assets/images/about/about4.svg"
              alt=""
            />
          </Grid>
          <Grid item xs={10} lg={6} sm={6} className="no-selection">
            <Typography variant="h5" className="title-poppins mb-text">
              Visão
            </Typography>
            <Typography variant="subtitle1">
              Planejamos estar entre as melhores e mais respeitadas plataformas
              desse segmento por oferecer de forma consistente cursos que irão
              inovar e agregar a vida de muitas brasileiras em suas carreiras
              profissionais.
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          item
          className="container-center no-selection"
          lg={12}
          xs={12}
          sm={6}
          sx={{ p: { md: 8 } }}
        >
          <Grid item xs={10} lg={6} sm={6}>
            <Typography variant="h5" className="title-poppins mb-text">
              Valores
            </Typography>
            <Typography variant="subtitle1" className="no-selection">
              {" "}
              Melhoria contínua dos produtos e a qualidade para atender às
              necessidades das clientes. Prezamos por igualdade, respeito,
              confiança, humildade e integridade.
            </Typography>
          </Grid>

          <Grid
            item
            className="container-center no-selection"
            xs={6}
            lg={6}
            sm={6}
          >
            <img
              className="mudarcel"
              style={{ width: "70%" }}
              src="/assets/images/about/about5.svg"
              alt=""
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid container className="grid-container ">
        <Grid
          item
          container
          xs={12}
          sm={12}
          justifyContent="center"
          className="p"
        >
          <Typography variant="h3" className="title-poppins no-selection">
            Membros
          </Typography>
        </Grid>
        <Grid item container xs={12} sm={12} className="membros">
          <Box className="flip-card no-selection">
            <Box className="flip-card-inner">
              <Box className="flip-card-front">
                <img
                  className="img"
                  src="https://womenworkaws.s3.amazonaws.com/team/1660923014407.jpg"
                  alt="img"
                />
              </Box>
              <Box className="flip-card-back">
                <Link
                  href="https://www.linkedin.com/in/carlos-eduardo-996b4421a/"
                  target="_blank"
                >
                  <LinkedInIcon className="icons" fontSize="large" />
                </Link>
                <Link href="https://github.com/Santozcl" target="_blank">
                  <GitHubIcon className="icons" fontSize="large" />
                </Link>
              </Box>
            </Box>
            <Typography className="title-poppins pad-top-text">
              Carlos Eduardo
            </Typography>
          </Box>

          <Box className="flip-card no-selection">
            <Box className="flip-card-inner">
              <Box className="flip-card-front">
                <img
                  className="img"
                  src="https://womenworkaws.s3.amazonaws.com/team/1652114561045.jpeg"
                  alt="img"
                />
              </Box>
              <Box className="flip-card-back">
                <Link
                  href="https://www.linkedin.com/in/jo%C3%A3o-vitor-estevam-82ba85207/"
                  target="_blank"
                >
                  <LinkedInIcon className="icons" fontSize="large" />
                </Link>
                <Link href="https://github.com/Najmate" target="_blank">
                  <GitHubIcon className="icons" fontSize="large" />
                </Link>
              </Box>
            </Box>
            <Typography className="title-poppins pad-top-text">
              João Vitor
            </Typography>
          </Box>

          <Box className="flip-card no-selection">
            <Box className="flip-card-inner">
              <Box className="flip-card-front">
                <img
                  className="img"
                  src="https://womenworkaws.s3.amazonaws.com/team/1675196750994.jpg"
                  alt="img"
                />
              </Box>
              <Box className="flip-card-back">
                <Link
                  href="https://www.linkedin.com/in/victordnf/"
                  target="_blank"
                >
                  <LinkedInIcon className="icons" fontSize="large" />
                </Link>
                <Link href="https://github.com/victordnf" target="_blank">
                  <GitHubIcon className="icons" fontSize="large" />
                </Link>
              </Box>
            </Box>
            <Typography className="title-poppins pad-top-text">
              Victor França
            </Typography>
          </Box>

          <Box className="flip-card no-selection">
            <Box className="flip-card-inner">
              <Box className="flip-card-front">
                <img
                  className="img"
                  src="https://womenworkaws.s3.amazonaws.com/team/1669152123927.jpg"
                  alt="img"
                />
              </Box>
              <Box className="flip-card-back">
                <Link
                  href="https://www.linkedin.com/in/rafaele-souza/"
                  target="_blank"
                >
                  <LinkedInIcon className="icons" fontSize="large" />
                </Link>
                <Link href="https://github.com/raffaez/" target="_blank">
                  <GitHubIcon className="icons" fontSize="large" />
                </Link>
              </Box>
            </Box>

            <Typography className="title-poppins pad-top-text">
              Rafaele Souza
            </Typography>
          </Box>

          <Box className="flip-card no-selection">
            <Box className="flip-card-inner">
              <Box className="flip-card-front">
                <img
                  className="img"
                  src="https://womenworkaws.s3.amazonaws.com/team/1663330916197.jpg"
                  alt="img"
                />
              </Box>
              <Box className="flip-card-back">
                <Link
                  href="https://www.linkedin.com/in/henrique-oliveira-137b1423a/"
                  target="_blank"
                >
                  <LinkedInIcon className="icons" fontSize="large" />
                </Link>
                <Link href="https://github.com/xHenrique22" target="_blank">
                  <GitHubIcon className="icons" fontSize="large" />
                </Link>
              </Box>
            </Box>
            <Typography className="title-poppins pad-top-text">
              Henrique O.
            </Typography>
          </Box>

          <Box className="flip-card no-selection">
            <Box className="flip-card-inner">
              <Box className="flip-card-front">
                <img
                  className="img"
                  src="https://womenworkaws.s3.amazonaws.com/team/1648154893734.jpg"
                  alt="img"
                />
              </Box>
              <Box className="flip-card-back">
                <Link
                  href="https://www.linkedin.com/in/juliocgcj/"
                  target="_blank"
                >
                  <LinkedInIcon className="icons" fontSize="large" />
                </Link>
                <Link href="https://github.com/Juliojnr" target="_blank">
                  <GitHubIcon className="icons" fontSize="large" />
                </Link>
              </Box>
            </Box>
            <Typography className="title-poppins pad-top-text">
              Julio Cesar
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
export default About;
