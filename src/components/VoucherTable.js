import React, { Component } from 'react'
import { connect } from 'react-redux'

class VoucherTable extends Component {

	formatDate(string) {
		const date = string.split("T")[0]
		const year = date.split("-")[0]
		const month = date.split("-")[1]
		const day = date.split("-")[2]

		return `${day}/${month}/${year}`
	}

	render(){
		console.log(this.props)
		const headers = ['campaign', 'code', 'start', 'end', 'value', 'type']
		const vouchers = this.props.vouchers
		return <div className='table-container'>
			<table>
				<thead>
					<tr>
						{ headers.map((h) => <th key={h}>{h}</th> ) }
					</tr>
				</thead>
				{vouchers.map((voucher) => {
					return (
						<tr>
							<td>{voucher.campaign}</td>
							<td>{voucher.code}</td>
							<td>{this.formatDate(voucher.start)}</td>
							<td>{this.formatDate(voucher.end)}</td>
							<td>{voucher.value}</td>
							<td>{voucher.type}</td>
						</tr>
					)
				})}
			</table>
		</div>
	}
}

function mapStateToProps({vouchers}) {
	const list = []
	for (let i in vouchers) {
		list.push(vouchers[i])
	}
	return {vouchers: list}
}

export default connect(mapStateToProps)(VoucherTable)