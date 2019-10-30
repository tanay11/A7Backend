import React, { Component } from "react";
import axios from "axios";
import { ProductConsumer } from "../context";
import styled from "styled-components";
import validator from "validator";


const Wrapper = styled.div`
	transform: translate(0%, 2%);
	padding: 0 20rem;
	background-image: url(${props => props.ImagePath});
	@media (max-width: 576px) {
		width:1170px;
	  } 
`;

export default class Register extends Component {
	constructor(props) {
		super(props);

		this.onChangeContact = this.onChangeContact.bind(this);
		this.onChangeLocation = this.onChangeLocation.bind(this);

		this.onChangeZipcode = this.onChangeZipcode.bind(this);

		this.setUser = this.setUser.bind(this);

		this.state = {
			name: "",
			emailId: "",
			contact: "",
			location: "",
			completeAddress: "",
			zipcode: "",
			product: [],
			nameIsValid: false,
			emailIsValid: false
		};
		
		this.registerHim =true
	}
	componentDidMount() {
		
		  window.scrollTo(0, 0);
	  }

	onChangeContact(e) {
		this.setState({
			contact: e.target.value
		}, () => { console.log("this.state.contact", this.state.contact) });
	}

	onChangeLocation(e) {
		this.setState({
			location: e.target.value
		});
	}

	onChangeZipcode(e) {
		this.setState({
			zipcode: e.target.value
		});
	}

	setUser() {
		console.log("this.state.contact22222222", this.state.contact, this.state.location)
		
		if (validator.isAlpha(this.props.name)) {
			if (validator.isEmail(this.props.email)) {
				console.log("There inside if", validator.isEmail(this.props.email));
				this.setState({
					emailIsValid: true,
					nameIsValid:true
				},()=>{this.props.getRegistered(this.state.emailIsValid && this.state.nameIsValid)}
				);
				console.log("Registered email flow", this.state.emailId)
			}
			else {
				alert("Email you entered is Invalid");
			}
		}
		else {
			alert("Name you want is Unavailable");
		}

		
			const newCustomer = {
				name: this.props.name,
				email: this.props.email,
				contact: this.state.contact,
				location: this.state.location,
				zipcode: this.state.zipcode,
				product: []
			};
		console.log("new customer prints", newCustomer)
		console.log(`Form submitted:`);
		axios.get('http://localhost:3030/users?email='+this.props.email)
    	.then(response => {
			if(response.data.length > 0){
				this.registerHim=false
				alert("Hey.. You are already register please try login")
			}
        

      })
      .catch(function(error) {
		console.log("Register ka error",error)
		
    })
		alert("Are you sure .. If all the details are correct press Submit")


		if (this.state.nameIsValid && this.state.emailIsValid && this.registerHim ) {

			axios
				.post("http://localhost:5000/api/form", newCustomer)
				.then(response => {
					console.log("Trying to print ", response);
				})
				.catch(err => {
					console.log("Trying to print ", err);
				});

			axios
				.post("http://localhost:3030/users", newCustomer)
				.then(res => {
					console.log(res.data)
					this.props.history.push('/');
					alert("Check Your Profile Now ")
				}
				);
			alert("Registered Successfully");

			this.setState({
				name: "",
				emailId: "",
				contact: "",
				location: "",
				zipcode: "",
				product: []
			});
		}


	}

	render() {
		return (
			<ProductConsumer>
				{value => {
					return (
						<Wrapper ImagePath={this.props.ImagePath}>
							<center>
								{" "}
								<h3>Welcome New User</h3>
							</center>
							<br />

							<form>
								<div className="form-group mx-sm-4 mb-4 ">
									<label>UserName : </label>
									<input
										type="text"
										className="form-control"
										value={value.name}
										onChange={value.onChangeName}
										placeholder="Unique Name without space(eg: NamanTiwari)"
										required
									/>
								</div>
								<div className="form-group mx-sm-4 mb-4">
									<label>Email : </label>
									<input
										type="email"
										className="form-control"
										value={value.emailId}
										onChange={value.onChangeEmail}
										placeholder="Valid Email(It will be verified)"
										required
									/>
								</div>

								<div className="form-group mx-sm-4 mb-4">
									<label>Phone : </label>
									<input
										type="number"
										className="form-control"
										value={this.state.contact}
										onChange={this.onChangeContact}
										placeholder="Your 10 digit Mobile number"
										maxLength={10}
										required
									/>
								</div>

								<div className="form-group mx-sm-4 mb-4">
									<label>Location : </label>
									<input
										type="text"
										className="form-control"
										value={this.state.location}
										onChange={this.onChangeLocation}
										placeholder="District"
										required
									/>
								</div>

								<div className="form-group mx-sm-4 mb-4">
									<label>Zipcode : </label>
									<input
										type="number"
										className="form-control"
										value={this.state.zipcode}
										placeholder="(eg: 462042)"
										maxLength={6}
										onChange={this.onChangeZipcode}
									/>
								</div>
								<center>
									<div className="form-group mx-sm-4 mb-4">
										<input
											type="button"
											value="Submit"
											onClick={() => {
												this.setUser();
											}}
											className="btn btn-primary"
										/>
									</div>
								</center>
							</form>
						</Wrapper>
					);
				}}
			</ProductConsumer>
		);
	}
}
