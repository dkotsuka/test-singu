import React, {Component} from 'react'

class VoucherEditorView extends Component {
	render(){
		return <div className="editor-container">
			<form>
				<h2>Create New Voucher</h2>
				<div className="input-container">
					<span>Campaign name:</span>
					<input type="text"/>
				</div>
				<div className="input-container">
					<span>Promotinal Code:</span>
					<input type="text"/>
				</div>
				<div className="row-container">
					<div className="number input-container">
						<span>Start date:</span>
						<input type="date"/>
					</div>
					<div className="number input-container">
						<span>End date:</span>
						<input type="date"/>
					</div>
				</div>
				<div className="row-container">
					<div className="number input-container">
						<span>Discount value:</span>
						<input type="number"/>
					</div>
					<div className="select-container">
						<select>
							<option>Percentual</option>
							<option>Fixed Value</option>
						</select>
					</div>
				</div>
				<div className="input-container">
					<span>Eligible Services:</span>
					<div className="checkbox-container">
						<label>
							<input type="checkbox" value="option2" />
							<span>Depilation</span>
						</label>
						<label>
							<input type="checkbox" value="option2" />
							<span>Hair</span>
						</label>
						<label>
							<input type="checkbox" value="option2" />
							<span>Massage</span>
						</label>
						<label>
							<input type="checkbox" value="option2" />
							<span>Nails</span>
						</label>
					</div>
				</div>
				<div className="row-container">
					<div className="number input-container">
						<span>Max vouchers:</span>
						<input type="number"/>
					</div>
					<div className="number input-container">
						<span>Max per user:</span>
						<input type="number"/>
					</div>
				</div>
			</form>		
		</div>
	}
}

export default VoucherEditorView