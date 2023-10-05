import { Rodape, Infos, Instagram, Linkdin, Links } from "../Footer/styled";

function Footer() {

    const FuncaoLinks = (link)=>{
        window.open(link, '_blank')
    }
    return (
        <>
            <Rodape>
                <Infos>Developed by Thiago Scherer</Infos>
                <Links>
                    <Instagram onClick={()=>FuncaoLinks("https://www.instagram.com/thiago__scherer/")}>Instagram</Instagram>
                    <Linkdin onClick={()=>FuncaoLinks("https://www.linkedin.com/in/thiago-scherer-4a3917228/")}>LinkdIn</Linkdin>
                </Links>
            </Rodape>
        </>
    )
}

export default Footer;