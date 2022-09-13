import React from "react"

export default function Card(props) {
    let badgeText
    if (props.card.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.card.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <section className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--photo" src={`./${props.card.coverImg}`} alt="Experience picture" />
            <div className="card--stats">
                <img className="card--star"  src="../src/assets/star.png" alt="star" />
                <span>{props.card.stats.rating}</span>
                <span className="card--country">({props.card.stats.reviewCount}) • </span>
                <span className="card--country">{props.card.location}</span>
            </div>
            <p>{props.card.title}</p>
            <p><span className="card--price">From €{props.card.price}</span> / person</p>

        </section>
    )
}