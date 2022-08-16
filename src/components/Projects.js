import styled from 'styled-components'
import Project from './Project'
const data = require('../projectData.json')


const ProjectContainer = styled.div`
    width : 100%;
    display : flex;
    flex-direction : column;
    align-items : center;
    gap: 80px;
    margin-left : auto;
    margin-right : auto;
    margin-top : 80px;
`

export default function Projects(){

    return (
        <ProjectContainer>
            {data["items"].map((project, i) => <Project key={`project${i}`} left={i%2 === 0} data={project}/>)}
        </ProjectContainer>
    )
}