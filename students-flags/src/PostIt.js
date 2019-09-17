import React from "react";
import "./App";

function PostIt(){
    return(
        <div className = "post_its">
            <div style={{
                backgroundColor:"pink",
                textAlign:"center",
                color:"black",
                width : 200,
                height : 200,
                position :"relative"
            }}
            className = "tick" >
                <h1>Debugging Tool</h1>
                <div style ={{
                    position : "absolute",
                    bottom:0,
                    right:0,
                    borderLeft:"solid black 10px",
                    borderTop:"solid black 10px",
                    borderRight:"solid white 10px",
                    borderBottom:"solid white 10px"
                }}
                >
                    
                </div>
            </div>
            <div style={{
                backgroundColor:"red",
                textAlign:"center",
                color:"black",
                width : 200,
                height : 200,
                position :"relative",
                display : "flex",
                justifyContent : "center"
            }}
            className = "tick" >
                <h1>APIs</h1>
                
            <div style ={{
                    position : "absolute",
                    bottom:0,
                    right:0,
                    borderLeft:"solid black 10px",
                    borderTop:"solid black 10px",
                    borderRight:"solid white 10px",
                    borderBottom:"solid white 10px"
                }}>
                    
                </div>
            </div>

            <div style={{
                backgroundColor:"aliceblue",
                textAlign:"center",
                color:"black",
                width : 200,
                height : 200,
                position :"relative"
            }}
            className = "tick"
            >
                <h1>Mapbox</h1>
                <div style ={{
                    position : "absolute",
                    bottom:0,
                    right:0,
                    borderLeft:"solid black 10px",
                    borderTop:"solid black 10px",
                    borderRight:"solid white 10px",
                    borderBottom:"solid white 10px"
                }}>
                    
                </div>
            </div>
        </div>
    )
}


export default PostIt;