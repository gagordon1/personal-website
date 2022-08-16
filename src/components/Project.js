import styled, {keyframes} from "styled-components"

const videoRatio = 917/573
const height = 300 //pixels

const fadeIn = keyframes`
    from { opacity: 0; }
    to   { opacity: 1; }
`

const ProjectContainer = styled.div`
    display : grid;
    grid-template-columns : 1fr 1fr;
    width : 90%;
`
const InfoContainer = styled.div`
    display : flex;
    flex-direction : column;
    text-align : ${props => props.align};
    -webkit-animation: ${fadeIn} 1s ease-in;
`

const Demo = styled.iframe`
    width : ${Math.round(height*videoRatio)}px;
    height : ${height}px;
    justify-self : ${props => props.align};
    -webkit-animation: ${fadeIn} 1s;
`



export default function Project(props){


    if(props.left){
        return (
            <ProjectContainer>
                <InfoContainer align={props.left? "left" : "right"}>
                    <p>{props.data["title"]}</p>
                    <p>{props.data["description"]}</p>
                </InfoContainer>
                <Demo src={`https://www.youtube.com/embed/${props.data.demoId}`} 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                    align={props.left? "right" : "left"}
                    >
                </Demo>
            </ProjectContainer>
        )
    }else{
        return(
            <ProjectContainer>
                <Demo src={`https://www.youtube.com/embed/${props.data.demoId}`} 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                    align={props.left? "right" : "left"}
                    >
                </Demo>
                <InfoContainer align={props.left? "left" : "right"}>
                    <p>{props.data["title"]}</p>
                    <p>{props.data["description"]}</p>
                </InfoContainer>
                
            </ProjectContainer>
        )
    }
}