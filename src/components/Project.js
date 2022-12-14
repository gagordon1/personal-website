import styled from "styled-components"
import { Heading2, InfoText } from "./Text"
import GithubLogoImage from "../assets/github_logo.png"
import Loader from "./Loader"

const videoRatio = 917/573
const height = 300 //pixels
const ProjectContainer = styled.div`
    display : grid;
    grid-template-columns : 1fr 1fr;
    width : 90%;
    animation : fade-in 1s;
`
const InfoContainer = styled.div`
    display : flex;
    flex-direction : column;
    text-align : ${props => props.align};
`
const DemoVideo = styled.iframe`
    width : ${Math.round(height*videoRatio)}px;
    height : ${height}px;
    filter : drop-shadow(4px 4px 4px rgba(0,0,0,.25));
`
const GithubImage = styled.img`
    width : 18px;
    height : 18px;
    align-self : center;
    &:hover{
        cursor : pointer;
    }
`
const GithubLinkContainer = styled.div`
    display : flex;
    gap : 15px;
    flex-direction : row;
    flex-direction : ${props=>props.flexDirection};
    align-items : center;
`

const Clickable = styled.div`
    display : flex;
    align-items : center;
    gap : 5px;
`

const ImageLink = styled.a`
    display : flex;
    align-items : center;
`

const DemoAndLoaderContainer = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    justify-self : ${props => props.align};
`

function GithubLink(props){
    return(
        <Clickable>
            <ImageLink target="_blank" rel="noopener noreferrer" href={props.link} >
                <GithubImage src={GithubLogoImage}/>
            </ImageLink>
            <InfoText>{props.name}</InfoText> 
        </Clickable>
    )
}



export default function Project(props){

    

    function Info(){
        return(
            <InfoContainer align={props.left? "left" : "right"}>
                {props.data.deployedLink?
                    <a href={props.data.deployedLink} style={{color : "#000000"}}>
                        <Heading2>{props.data.title}</Heading2>
                    </a>
                    :
                    <Heading2>{props.data.title}</Heading2>
                }
                <InfoText>{props.data.description}</InfoText>
                <InfoText>
                    <b>Technologies: </b>
                    {props.data.technologies.join(", ")}
                </InfoText>
                <GithubLinkContainer flexDirection={props.left? "row" : "row-reverse"}>
                    {Object.keys(props.data.codeLinks).map(key =>
                        <GithubLink 
                            key={props.data.codeLinks[key]} 
                            name={key} 
                            link={props.data.codeLinks[key]}/>
                    )}
                </GithubLinkContainer>
                
                
            </InfoContainer>
        )
    }

    function Demo(){
        
        return(
            <DemoVideo src={`https://www.youtube.com/embed/${props.data.demoId}`} 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
                frameBorder="0"
                >
            </DemoVideo>
            
        )
    }


    if(props.left){
        return (
            <ProjectContainer>
                <Info/>
                <DemoAndLoaderContainer align={props.left? "right" : "left"}>
                    <Loader/>
                    <Demo/>
                </DemoAndLoaderContainer>
                
                
            </ProjectContainer>
        )
    }else{
        return(
            <ProjectContainer>
                <DemoAndLoaderContainer align={props.left? "right" : "left"}>
                    <Loader/>
                    <Demo/>
                </DemoAndLoaderContainer>
                <Info/>

            </ProjectContainer>
        )
    }
}