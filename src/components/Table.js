import React, { Component } from 'react'
import { formatDate, formatList } from '../utils/helpers'

const headers = ["",'campaign', 'code', 'start', 'end', 'value', 'type', 'services','status']

export default function Table(props) {
	const { page } = props
	return (
		<table>
			<thead>
				<tr>
					{ headers.map((h) => <th key={h}>{h}</th> ) }
				</tr>
			</thead>
			<tbody>
			{page.map((voucher) => {
				const today = Date.now();
				return (
					<tr key={voucher._id}>
						<td>
							<input 
								type="radio" 
								name="item" 
								value={voucher._id}
								onChange={props.selectVoucher}/>
						</td>
						<td>{voucher.campaign}</td>
						<td>{voucher.code}</td>
						<td>{formatDate(voucher.start)}</td>
						<td>{formatDate(voucher.end)}</td>
						<td>{voucher.value}</td>
						<td>{voucher.type}</td>
						<td>{formatList(voucher.services)}</td>
						<td>{voucher.status}</td>
					</tr>
				)
			})}
			</tbody>
		</table>
	)
}