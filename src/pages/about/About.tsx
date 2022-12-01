import { Grid, Box} from '@material-ui/core';
import { Grid3x3 } from '@mui/icons-material';
import React from 'react';
import './About.css'

function About(){
    return(
        <>
    <Grid container justifyContent='center' className='fundo'>
        <Grid xs={8} sm={8}>
            <h1>Woman Work</h1>
        </Grid>
        
        <Grid xs={12} sm={5}>
            <h2>Quem somos</h2>
            <p>Women Work oferece cursos dentro da plataforma que irão especializar
            mulheres que desejam crescer no mercado de trabalho, conforme a
            necessidade de cada uma, nosso objetivo é integrar o máximo de mulheres
            possíveis dentro desse ambiente. Os cursos serão entregues remotamente.</p>
        </Grid>
        <Grid xs={12} sm={5}>
            <h2>Nossa missão</h2>
            <p>Women Work oferece cursos dentro da plataforma que irão especializar
                mulheres que desejam crescer no mercado de trabalho, conforme a
                necessidade de cada uma, nosso objetivo é integrar o máximo de mulheres
                possíveis dentro desse ambiente. Os cursos serão entregues remotamente.</p>
        </Grid>
        <Grid xs={12} sm={5}>
            <h2>Visão</h2>
            <p>Planejamos, estar entre as melhores, mais lembradas e respeitadas
            plataformas desse segmento por oferecer de forma consistente cursos que
            irão inovar e agregar a vida de muitas brasileiras na sua carreira profissional</p>
        </Grid>
        <Grid xs={12}  sm={5} >
            <h2>Valores</h2>
            <p>Procurar a melhoria contínua dos produtos e a qualidade para
            atender às necessidades dos clientes. Dentro da empresa nós
            buscamos a confiança, respeito, crença, humildade e integridade</p>
        </Grid>
    
</Grid>

<Grid container>
    <Grid item container xs={12} sm={12}  justifyContent='center'>
        <h1>Membros</h1>
    </Grid>
    <Grid item container xs={6} sm={12}  justifyContent='space-between' alignItems='center' >
    
        <Box>
        <img className='img' src="https://thumbs.dreamstime.com/b/texto-vermelho-do-selo-do-exemplo-43363006.jpg" alt="" />
        <p>Carlos Eduado</p>
        </Box>
        <Box>
        <img src="https://thumbs.dreamstime.com/b/texto-vermelho-do-selo-do-exemplo-43363006.jpg" alt="" />
        <p>João Vitor</p>
        </Box>
        <Box>
        <img src="https://thumbs.dreamstime.com/b/texto-vermelho-do-selo-do-exemplo-43363006.jpg" alt="" />
        <p>Vitor França</p>
        </Box>
        <Box>
            <img src="https://thumbs.dreamstime.com/b/texto-vermelho-do-selo-do-exemplo-43363006.jpg" alt="" />
            <p>Rafaele</p>
        </Box>
        <Box>
            <img src="https://thumbs.dreamstime.com/b/texto-vermelho-do-selo-do-exemplo-43363006.jpg" alt="" />
            <p>Enrique</p>
        </Box>
        <Box>
            <img src="https://thumbs.dreamstime.com/b/texto-vermelho-do-selo-do-exemplo-43363006.jpg" alt="" />
            <p>Julio cesar</p>
        </Box>
    </Grid>
</Grid>



</>
    )
}
 export default About

