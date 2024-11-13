import React, { useState } from "react";


	

export const Semaforo = () => {
    
    
    const [color, setColor] = useState("red");
    
    const changeColor = () => {
        if (color === "red") setColor("yellow");
        else if (color === "yellow") setColor("green");
        else if (color === "green") setColor("red");
    };

    return (
			<div className="wrapper">
				<div className="section">
                    <div className = "semaforo">
                        <div className={"light-red" + (color === "red" ? " brillo" : "" )}></div>
                        <div className={"light-yellow" + (color === "yellow" ? " brillo" : "" )}></div>
                        <div className={"light-green" + (color === "green" ? " brillo" : "" )}></div>
                    </div>
                    <div className="button">
                        <button onClick={changeColor} className="btn btn-primary">Cambiar color</button>
                    </div>
                    
                </div>
			</div>
	);
};
