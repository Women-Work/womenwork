import { Grid, Box} from '@material-ui/core';
import { Grid3x3 } from '@mui/icons-material';
import React from 'react';
import './About.css'

function About(){
    return(
        <>
    <Grid container justifyContent='center' >
        <Grid xs={12} sm={12} className='titulo'>
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
            <p> Quer promover e contribuir para o desenvolvimento profissional através
            da educação e do trabalho. Alcançar todas as alunas dentro e fora do Brasil.
            E no futuro buscar expandir para o exterior.
            </p>
           
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
    <Grid item container xs={12} sm={12}  justifyContent='center' className='p'>
        <h1>Membros</h1>
    </Grid>
    <Grid item container xs={8} sm={12} className="membros" >
        
        <Box>
        <img className='img' src="https://camo.githubusercontent.com/936ef44bd12c340ed7a7a11f7c3053c42e004903b7a4ae11bf6e8da09c7958c1/68747470733a2f2f6d656469612d657870312e6c6963646e2e636f6d2f646d732f696d6167652f4334443033415146327a6e7970796250774b512f70726f66696c652d646973706c617970686f746f2d736872696e6b5f3830305f3830302f302f313636303932333031343430373f653d3136373532393630303026763d6265746126743d3257756874706e4a6c48583332614b745137356c6d386a75334f3573556e567633645f706a757430384741" alt="" />
        <p className='nome'>Carlos Eduardo</p>
        </Box>
        <Box>
        <img className='img' src="https://camo.githubusercontent.com/3668f04d4842b7cdca2b50e0b0abf90c42b5f34633277be8806febe3a347a592/68747470733a2f2f6d656469612d657870312e6c6963646e2e636f6d2f646d732f696d6167652f43344430334151474c473649557873313468672f70726f66696c652d646973706c617970686f746f2d736872696e6b5f3830305f3830302f302f313635323131343536313034353f653d3136373532393630303026763d6265746126743d504e446f4f3245485872356d6f6336396853745f764a58626477577573335a664e577271327970536e4c6b" alt="" />
        <p className='nome'>João Vitor</p>
        </Box>
        <Box>
        <img className='img' src="https://camo.githubusercontent.com/c6d5b81643dc4561bb731c018a495869277954400d3e88d1fd1efae94ec295a9/68747470733a2f2f6d656469612d657870312e6c6963646e2e636f6d2f646d732f696d6167652f44344530334151486d4f6e55757550627256412f70726f66696c652d646973706c617970686f746f2d736872696e6b5f3830305f3830302f302f313636343831333230303733383f653d3136373532393630303026763d6265746126743d4b7359716d464c4f7a6e527476637735634e786b4446376932356850335873304f75486732316d656f6a34" alt="" />
        <p className='nome' >Vitor França</p>
        </Box>
        <Box>
            <img className='img' src='https://camo.githubusercontent.com/90a553cf7922491794c70f7b6025af0109d4177d5148c2f7be16518606771137/68747470733a2f2f6d656469612d657870312e6c6963646e2e636f6d2f646d732f696d6167652f443444303341514641544c782d3664426833672f70726f66696c652d646973706c617970686f746f2d736872696e6b5f3830305f3830302f302f313636393135323132333932373f653d3136373532393630303026763d6265746126743d67396c70525a5f5f4a41715347677a51726337756c6a367531553833727977485334596f742d4446555830' alt="" />
            <p className='nome'>Rafaele Souza</p>
        </Box>
        <Box>
            <img className='img' src="https://camo.githubusercontent.com/d6187edfed61b1157fbdfffc0909f29a5e6f9f741eecc95da4779e95960fb0ab/68747470733a2f2f6d656469612d657870312e6c6963646e2e636f6d2f646d732f696d6167652f44344430334151476f765867464939515f2d512f70726f66696c652d646973706c617970686f746f2d736872696e6b5f3830305f3830302f302f313636333333303931363139373f653d3136373532393630303026763d6265746126743d55614c395573533644555a51326862544c514347417659635a517a66346a4b4f4c45436e6e724d33477177" alt="" />
            <p className='nome'>Henrique Oliveira</p>
        </Box>
        <Box>
            <img className='img' src="https://camo.githubusercontent.com/8bfda2b7b91307dff812c7423374fb80c8db15d8c744be92eec9577176690c15/68747470733a2f2f6d656469612d657870312e6c6963646e2e636f6d2f646d732f696d6167652f4335363033415145324d4b63743077677a59512f70726f66696c652d646973706c617970686f746f2d736872696e6b5f3830305f3830302f302f313634383135343839333733343f653d3136373532393630303026763d6265746126743d3873534a35376b62744967772d4e324a6c35393253347a6a314b564779794733387465676e5553314a766b" alt="" />
            <p className='nome'>Júlio Cesar</p>
        </Box>
    </Grid>
</Grid>



</>
    )
}
 export default About

