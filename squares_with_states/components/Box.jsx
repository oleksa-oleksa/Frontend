import React from "react"

export default function Box(props) {
    const styles = {
        backgroundColor: props.on ? "#ff9eed" : "#9ea8ff"
    } 
    
    return (
        <div
           style={styles}
           className="box"
           onClick={props.toggle}
        >
        </div>
    )
}