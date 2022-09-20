import React from "react"
import { useState, UseEffect } from "react"

export default function Cube(props) {
    /* Challenge: Add conditional styling to the Die component
    * so that if it's held (isHeld === true), its background color
    * changes to a light green (#59E391)*/
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }

    return (
        <section className="cube">
            <div className="cube--element" style={styles}>
                <h2>{props.value}
                </h2>
            </div>
        </section>
    )
}