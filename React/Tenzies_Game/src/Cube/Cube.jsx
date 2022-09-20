import React from "react"
import { useState, UseEffect } from "react"

export default function Cube(props) {
    return (
        <section className="cube">
            <div className="cube--element">
                <h2>{props.value}
                </h2>
            </div>
        </section>
    )
}