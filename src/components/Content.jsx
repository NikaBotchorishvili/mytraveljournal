import React from "react";
import locationIcon from "../assets/images/location_icon.png";
export default function Content(props) {
	const {title, location, googleMapsUrl, startDate, endDate, description,imageUrl} = props.data;
	return (
		<div className="content-item">
			<div className="image">
				<img src={imageUrl} />
			</div>
			<div className="info">
				<div className="top">
                    <div className="location">
                        <img src={locationIcon} />
                        <h2>{location.toUpperCase() }</h2>
                    </div>

                    <div className="google-maps">
                        <a href={googleMapsUrl}>
                            View on Google Maps
                        </a>
                    </div>

				</div>
                <div className="middle">
                    <h1 className="title">{ title }</h1>
                </div>

                <div className="bottom">

                    <h5>{ startDate } - { endDate }</h5>
                    <p>{ description }</p>
                </div>
    		</div>
		</div>
	);
}
