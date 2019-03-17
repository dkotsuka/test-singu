import React, { Component } from 'react'

class VoucherTable extends Component {

	render(){
		const headers = ['campaign', 'code', 'start', 'end', 'value', 'type']
		return <div>
			<table>
				<th>
					{ headers.map((h) => <td>{h}</td> ) }
				</th>
			</table>
		</div>
	}
}

export default VoucherTable