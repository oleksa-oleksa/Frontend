import React from "react"

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <section className="card">
            {badgeText && <div className="card--badge">{badgeText}}</div>}
            <img className="card--photo" src={`./${props.img}`} alt="Experience picture" />
            <div className="card--stats">
                <img className="card--star"  src="../src/assets/star.png" alt="star" />
                <span>{props.rating}</span>
                <span className="card--country">({props.reviewCount}) • </span>
                <span className="card--country">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="card--price">From €{props.price}</span> / person</p>

        </section>
    )
}