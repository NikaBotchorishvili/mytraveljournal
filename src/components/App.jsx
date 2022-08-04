import "../assets/css/App.css";
import React from "react";
import Navbar from "./Navbar";
import Content from "./Content"
import data from "./data";


export default function App() {

	let contentElements = data.map(item =>{
		return <Content 
			key={data.id}
			data={item}
		/>
	})
	
	return (
		<>
			<Navbar />

			<div className="content-container">
				{contentElements}
			</div>
		</>
	);
}
