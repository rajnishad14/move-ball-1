import React, { useState, useEffect } from 'react';
import './App.css';

function App(){
    const [rendelBall,setRenderBall] = useState(false);
    //const [posi,setPosi] = useState(0);
    const [ballPosition, setBallPosition] = useState({left:0 , top:0});

    function buttonClickHandler(){
        setRenderBall(true);
    }
    useEffect(()=>{
        const keyListner=document.addEventListener('keydown',(e)=>{
            switch(e.keyCode){
                case 37:
                    setBallPosition((ballPosition)=>{
                        return {
                            left:ballPosition.left-5,
                            top:ballPosition.top
                        }
                    });
                    break;
                case 38:
                    setBallPosition((ballPosition)=>{
                        return {
                            left:ballPosition.left,
                            top:ballPosition.top-5
                        }
                    });
                    break;
                case 39:
                    setBallPosition((ballPosition)=>{
                        return {
                            left:ballPosition.left+5,
                            top:ballPosition.top
                        }
                    });
                    break;
                case 40:
                    setBallPosition((ballPosition)=>{
                        return {
                            left:ballPosition.left,
                            top:ballPosition.top+5
                        }
                    });
                    break;
                default:
                  break;
            }

        });
        return (()=>{document.removeEventListener(keyListner,"keydown");});
    },[]);

    function RenderBallOrButton(){
        if(rendelBall){
            return <div className="ball"
            style={{
                top:ballPosition.top+"px",
                left:ballPosition.left+"px",
                position:"absolute"

            }}
            ></div>
        }else{
            return <button onClick={buttonClickHandler}>Click For One Ball</button>
        }
    }

    function ReturnDiv(){
        return(
            <div className="playground"><RenderBallOrButton/></div>
        );
    }
    
    return(
        <ReturnDiv/>
    );
    
}


export default App;
