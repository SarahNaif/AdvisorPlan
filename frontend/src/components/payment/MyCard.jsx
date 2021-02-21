import React, { useState } from "react";
import Card from "react-credit-cards";
import "../css/CardStyle.css"
import "react-credit-cards/es/styles-compiled.css";
import SupportedCards from "./Cards";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import API_URL from "../../apiConfig"
import { useParams } from 'react-router-dom';

import {
	formatCreditCardNumber,
	formatCVC,
	formatExpirationDate,
	formatFormData
} from "./utils";

const MyCards = () => {
	const { id } = useParams()

	const history = useHistory();
	const userInfo = JSON.parse(localStorage.getItem("userInfo"))
	const [data, setData] = useState({
		number: "",
		name: "",
		expiry: "",
		cvc: ""
	});
	const [issuer, setIssuer] = useState({})

	const handleCallback = ({ issuer }, isValid) => {
		if (isValid) {
			setIssuer({ issuer });
		}
	};

	const handleInputChange = (e) => {

		if (e.target.name === "number") {
			e.target.value = formatCreditCardNumber(e.target.value);
		} else if (e.target.name === "expiry") {
			e.target.value = formatExpirationDate(e.target.value);
		} else if (e.target.name === "cvc") {
			e.target.value = formatCVC(e.target.value);
		}

		setData({
			...data,
			[e.target.name]: e.target.value
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(" Click me ! ")
		axios
			.post(`${API_URL}/api/package/add`, {userId:userInfo._id,packegeId:id})
			.then((res) => {
				console.log(" resonse 0 ",res)
			}).catch(err =>{console.log(" error ",err)})

		history.push("/ThankYou");
	};


	return (
		<div className="rooty">
			<div className="App">


				<div id="PaymentForm" style={{ margin: 50, marginTop: 50 }}>
					<Card
						number={data.number}
						name={data.name}
						expiry={data.expiry}
						cvc={data.cvc}
						// focused={cardInfo.focused}
						callback={handleCallback}
					/>
					<small>E.g.: 49..., 51..., 36..., 37...</small>
					<input
						type="tel"
						name="number"
						className="form-control"
						placeholder="Card Number"
						pattern="[\d| ]{16,22}"
						required
						onChange={(e) => handleInputChange(e)}
					// onFocus={(e) => handleInputFocus(e)}
					/>


					<input
						type="text"
						name="name"
						className="form-control"
						placeholder="Name"
						required
						onChange={(e) => handleInputChange(e)}
					// onFocus={(e) => handleInputFocus(e)}
					/>
					<input
						type="tel"
						name="expiry"
						className="form-control"
						placeholder="Valid Thru"
						pattern="\d\d/\d\d"
						required
						onChange={(e) => handleInputChange(e)}
					// onFocus={(e) => handleInputFocus(e)}
					/>

					<form action="">
						<input
							type="tel"
							name="cvc"
							className="form-control"
							placeholder="CVC"
							pattern="\d{3,4}"
							required
							onChange={(e) => handleInputChange(e)}
						// onFocus={(e) => handleInputFocus(e)}
						/>
						<input type="hidden" name="issuer" value={issuer} />
						<div className="form-actions">
							<button
								className="btn btn-primary btn-block"
								onClick={(e) => { handleSubmit(e) }} >
								PAY
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default MyCards;