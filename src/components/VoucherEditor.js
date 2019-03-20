import React, {Component} from 'react'
import { createVoucher } from '../utils/VoucherAPI'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { addVoucher } from '../redux/actions'
import { formatDate } from '../utils/helpers'

class VoucherEditor extends Component {
	state = {
		editmode: false,
		campaign: "",
		code: "",
		start: "",
		end: "",
		value: 0,
		type: "P",
		maxTimes: 0,
		timesByUser: 0,
		services: []
	}
	componentDidMount() {
		const { voucher } = this.props
		
		if(voucher) {
			const { campaign, 
				code, 
				value, 
				type, 
				maxTimes, 
				timesByUser, 
				services } = voucher

			const start = new Date(voucher.start)
			const end = new Date(voucher.end)
				console.log(start)
			this.setState({
				editmode: true,
				campaign, 
				code, 
				start: `${start.getFullYear()}-${start.getMonth()}-${start.getDay()}`,
				end, 
				value, 
				type, 
				maxTimes, 
				timesByUser, 
				services
			})
		}
	}

	handleSubmit = event => {
		event.preventDefault()
		const message = this.validateSubmit()

		if(message.length > 0){
			alert(message)

		} else {
			const voucher = this.makeVoucherObject()
			createVoucher(voucher)
			.then((res) => {
				if(res.status == 200){
					this.props.dispatch(addVoucher(res.data[0]))
					this.props.history.push('/')
				} else {
					alert("Error: voucher didn't sent.")
				}
			})
		}
	}

	makeVoucherObject(){
		const {campaign, code, start, end, value, type, maxTimes, timesByUser, services} = this.state
		const startDate = new Date(start)
		const endDate = new Date(end)
		const voucher = {
			campaign,
			code,
			start: startDate.toISOString(),
			end: endDate,
			value,
			type,
			maxTimes,
			timesByUser,
			services
		}
		return voucher
	}

	validateSubmit(){
		const {campaign, code, start, end, value} = this.state

		let message = ""

		if( campaign === "") {
			message += "- Campain name is required!\n"
		}
		if( code === "") {
			message += "- Promotional code is required!\n"
		}
		if( start === "") {
			message += "- Start date is required!\n"
		}
		if( end === "") {
			message += "- End date name is required!\n"
		}
		if( value === 0) {
			message += "- Discount value is required!\n"
		}
		return message
	}

	onChangeTextInput = event => {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		this.setState({	[name]: value });
	}

	onChangeCheckboxInput = event => {
		const target = event.target;
		const value = target.checked;
		const name = target.name;

		if (value) {
			this.setState(prevState => {
				const newState = prevState.services.push(name);
				return newState;
			});
	    } else {
			this.setState(prevState => {
				const newState = prevState.services.filter(value => value !== name);
				return { services: newState };
			});
	    }
	}

	onChangeStartDateInput = event => {
		const target = event.target;
		const start = target.value;
		const name = target.name;
		const end = this.state.end

		if(start < end || !end) {
			this.setState({	[name]: start });
		}else {
			alert("Start date can not be after closure.")
		}
	}

	onChangeEndDateInput = event => {
		const target = event.target;
		const end = target.value;
		const name = target.name;
		const start = this.state.start

		if(start < end || !start) {
			this.setState({	[name]: end });
		}else {
			alert("Start date can not be after closure.")
		}
	}

	serviceIsChecked = (service) => {
		const list = this.state.services
	    for (let i = 0; i < list.length; i++) {
	        if (list[i] === service) {
	            return true;
	        }
	    }

	    return false;
	}

	render(){
		return <div className="editor-container">
			<form onSubmit={e => this.handleSubmit(e)}>
				<h2>Create New Voucher</h2>
				<div className="input-container">
					<span>Campaign name:</span>
					<input 
						name="campaign" 
						type="text" 
						value={this.state.campaign} 
						onChange={this.onChangeTextInput}/>
				</div>
				<div className="input-container">
					<span>Promotinal Code:</span>
					<input 
						name="code"
						type="text"
						value={this.state.code} 
						onChange={this.onChangeTextInput}/>
				</div>
				<div className="row-container">
					<div className="number input-container">
						<span>Start date:</span>
						<input 
							name="start"
							type="date"
							value={this.state.start} 
							onChange={this.onChangeStartDateInput}/>
					</div>
					<div className="number input-container">
						<span>End date:</span>
						<input 
							name="end"
							type="date"
							value={this.state.end} 
							onChange={this.onChangeEndDateInput}/>
					</div>
				</div>
				<div className="row-container">
					<div className="number input-container">
						<span>Discount value:</span>
						<input 
							name="value"
							type="number"
							value={this.state.value} 
							onChange={this.onChangeTextInput}
							min="0"/>
					</div>
					<div className="select-container">
						<select 
							name="type"
							value={this.state.type} 
							onChange={this.onChangeTextInput}>
							<option value="P">Percentual</option>
							<option value="V">Fixed Value</option>
						</select>
					</div>
				</div>
				<div className="input-container">
					<span>Eligible Services:</span>
					<div className="checkbox-container">
						<label>
							<input 
								name="depilation"
								type="checkbox"
								checked={this.serviceIsChecked("depilation")}
								onChange={this.onChangeCheckboxInput}/>
							<span>Depilation</span>
						</label>
						<label>
							<input
								name="hair"
								type="checkbox"
								checked={this.serviceIsChecked("hair")}
								onChange={this.onChangeCheckboxInput}/>
							<span>Hair</span>
						</label>
						<label>
							<input 
								name="massage"
								type="checkbox"
								checked={this.serviceIsChecked("massage")}
								onChange={this.onChangeCheckboxInput}/>
							<span>Massage</span>
						</label>
						<label>
							<input 
								name="nails"
								type="checkbox"
								checked={this.serviceIsChecked("nails")}
								onChange={this.onChangeCheckboxInput}/>
							<span>Nails</span>
						</label>
					</div>
				</div>
				<div className="row-container">
					<div className="number input-container">
						<span>Max vouchers:</span>
						<input 
							name="maxTimes"
							type="number"
							value={this.state.maxTimes} 
							onChange={this.onChangeTextInput}
							min="0"/>
					</div>
					<div className="number input-container">
						<span>Max per user:</span>
						<input 
							name="timesByUser"
							type="number"
							value={this.state.timesByUser} 
							onChange={this.onChangeTextInput}
							min="0"/>
					</div>
				</div>
				<div className="button-container">
					<button>Submit</button>
				</div>
			</form>		
		</div>
	}
}

function mapStateToProps({vouchers}, props) {
	let voucher = undefined
	const path = props.location.pathname
		if(path.includes("/edit/")) {
			const id = path.replace("/edit/", "")
			voucher = (vouchers.filter((v) => v._id === id))[0]
		}
	return { voucher }
}

export default withRouter(connect(mapStateToProps)(VoucherEditor))