import styled from "styled-components"
import GithubLogoImage from "../assets/github_logo.png"
import LinkedinLogoImage from "../assets/linkedin_logo.png"
import GmailLogoImage from "../assets/gmail_logo.png"
const linkData = require("../linkData.json")

const LinkContainer = styled.div`
    margin-top : 80px;
    margin-bottom : 80px;
    display : flex;
    margin-left : auto;
    margin-right : auto;
    align-items : center;
    gap : 40px;
    filter : drop-shadow(4px 4px 4px rgba(0,0,0,.25));
`

const imageRatio = 347/300
const imageSize = 60 //pixels

const GithubImage = styled.img`
    width : ${imageRatio * imageSize}px;
    height : ${imageRatio * imageSize}px;
`
const LinkedinImage = styled.img`
    width : ${imageSize}px;
    height : ${imageSize}px;
`
const GmailImage = styled.img`
    width : ${imageSize}px;
    height : ${imageSize}px;
    &:hover{
        cursor : pointer;
    }
`

export default function Links(){
    console.log(typeof linkData.linkedin)
    return (
        <LinkContainer>
            <a target="_blank" rel="noopener noreferrer" href={linkData.linkedin}>
                <LinkedinImage src={LinkedinLogoImage}/>
            </a>
            <a target="_blank" rel="noopener noreferrer" href={linkData.github}>
                <GithubImage src={GithubLogoImage}/>
            </a>
            <GmailImage src={GmailLogoImage}
                onClick={() => window.open(`mailto:${linkData.email}`)}/>
        </LinkContainer>
    )
}