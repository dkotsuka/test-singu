import React, {Component} from 'react'

class VoucherEditorView extends Component {
	state = {
		campaign: "",
		cade: "",
		start: new Date().toISOString(),
		end: new Date().toISOString(),
		value: 0,
		type: "P",
		maxTimes: 0,
		timesByUser: 0,
		services: []
	}
	handleSubmit = () => {

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
							onChange={this.onChangeTextInput}/>
					</div>
					<div className="number input-container">
						<span>End date:</span>
						<input 
							name="end"
							type="date"
							value={this.state.end} 
							onChange={this.onChangeTextInput}/>
					</div>
				</div>
				<div className="row-container">
					<div className="number input-container">
						<span>Discount value:</span>
						<input 
							name="value"
							type="number"
							value={this.state.value} 
							onChange={this.onChangeTextInput}/>
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
							onChange={this.onChangeTextInput}/>
					</div>
					<div className="number input-container">
						<span>Max per user:</span>
						<input 
							name="timesByUser"
							type="number"
							value={this.state.timesByUser} 
							onChange={this.onChangeTextInput}/>
					</div>
				</div>
			</form>		
		</div>
	}
}

export default VoucherEditorView