import React from "react"

export default function Travel(props) {
    
    return (
        <section className="travel">
            <span>
                <img className="travel--photo" src={`./${props.img}`} alt="Travel picture" />
            </span>
            <span>
                <div className="travel-header">
                    <span>
                        <img className="travel--header--geo" src="../src/assets/geo.png" alt="geo icon"/>
                    </span>
                    <span className="travel--header--location">{props.location}</span>
                    <span className="travel--header--gmaps">
                        <a href={`${props.googleMapsUrl}`}>View on Google Maps</a>
                    </span>  
                </div>
                <div className="travel--title">{props.title}</div>
                <div className="travel--tag">#{props.tag}</div>
                <div className="travel--description">{props.description}</div>
            </span>
        </section>
    )
}