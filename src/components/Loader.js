import { ThreeCircles } from "react-loader-spinner"

export default function Loader(){

    return (
        <div style={{position : "absolute"}}>
            <ThreeCircles
                height="100"
                width="100"
                color="#000000"
                visible={true}
                ariaLabel="three-circles-rotating"
            />
        </div>
        
    )
}