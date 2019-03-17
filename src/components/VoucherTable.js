import React, { Component } from 'react'
import { connect } from 'react-redux'
import Table from './Table'

const PAGE_SIZE = 15

class VoucherTable extends Component {
	state = {
		selected: "",
		search: "",
		actualPage: 0
	}

// --- select item in list using the radio button
	selectVoucher = (e) => {
		const id = e.target.value
		this.setState({ selected: id })
	}

// --- search by code functions
	onChangeSearch = (e) => {
		const value = e.target.value
		this.setState({ search: value })
	}

// --- page navigation functions
	toFirstPage = () => {
		this.setState({ actualPage: 0 })
	}

	toPrevPage = () => {
		if(this.state.actualPage > 0) {
			const page = this.state.actualPage - 1
			this.setState({ actualPage: page })
		}
	}

	toNextPage = (total) => {
		if(this.state.actualPage < total) {
			const page = this.state.actualPage + 1
			this.setState({ actualPage: page })
		}
	}

	toLastPage = (total) => {
		this.setState({ actualPage: total - 1 })
	}

	render(){
		
		const vouchers = this.props.vouchers
		const filtered = vouchers.filter((voucher) => voucher["code"].includes(this.state.search))

		filtered.sort(function(a, b){return new Date(b.end) - new Date(a.end)});
		const actualPage = this.state.actualPage * PAGE_SIZE
		const total = parseInt(filtered.length / PAGE_SIZE) + 1
		const page = filtered.slice(actualPage, actualPage + PAGE_SIZE)

		return <div className='table-container'>
			<div className='actions-container'>
				<div >
					<label>Search by code:</label>
					<input 
						type='search'
						value={this.state.search}
						onChange={this.onChangeSearch}/>
				</div>
			</div>
			<Table page={page} selectVoucher={this.selectVoucher}/>
			<div className="table-footer">
				<div>
					<button>edit voucher</button>
					<button>disable voucher</button>
				</div>
				<div >
					<button onClick={this.toFirstPage}>{`<<`}</button>
					<button onClick={this.toPrevPage}>{`<`}</button>
					<span>
						{` ${actualPage + 1} to ${(
							actualPage + PAGE_SIZE > filtered.length
							? filtered.length 
							: actualPage + PAGE_SIZE)} of ${filtered.length} `}</span>
					<button onClick={() => this.toNextPage(total)}>{`>`}</button>
					<button onClick={() => this.toLastPage(total)}>{`>>`}</button>
				</div>
			</div>
			
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