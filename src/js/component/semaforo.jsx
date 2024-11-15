import React, { useState } from "react";

export const Semaforo = () => {
    
    
    const [color, setColor] = useState("red");

    return (
			<div className="wrapper">
				<div className="section">
                    <div className ="semaforo">
                        <div onClick={() => setColor("red")} className={"light-red" + (color === "red" ? " brillo" : "" )}></div>
                        <div onClick={() => setColor("yellow")} className={"light-yellow" + (color === "yellow" ? " brillo" : "" )}></div>
                        <div onClick={() => setColor("green")} className={"light-green" + (color === "green" ? " brillo" : "" )}></div>
                    </div>
                </div>    
			</div>
	);
};

