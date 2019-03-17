import React, { Component } from 'react'
import { connect } from 'react-redux'
import Table from './Table'

const PAGE_SIZE = 15

class VoucherTable extends Component {
	state = {
		selected: "",
		search: "",
		filterBy: "",
		actualPage: 0
	}
// --- set item id using the radio button
	selectVoucher = (e) => {
		const id = e.target.value
		this.setState({ selected: id })
	}

// --- set the text filter for code search
	onChangeSearch = (e) => {
		const value = e.target.value
		this.setState({ search: value, selected: "" })
	}

// --- page navigation functions
	toFirstPage = () => {
		this.setState({ actualPage: 0, selected: "" })
	}

	toPrevPage = () => {
		if(this.state.actualPage > 0) {
			const page = this.state.actualPage - 1
			this.setState({ actualPage: page, selected: "" })
		}
	}

	toNextPage = (total) => {
		if(this.state.actualPage < total) {
			const page = this.state.actualPage + 1
			this.setState({ actualPage: page, selected: "" })
		}
	}

	toLastPage = (total) => {
		this.setState({ actualPage: total - 1, selected: "" })
	}

	render(){
		
		const vouchers = this.props.vouchers
		const filtered = vouchers.filter((voucher) => voucher["code"].includes(this.state.search))

		filtered.sort(function(a, b){return b.end - a.end });
		const actualPage = this.state.actualPage * PAGE_SIZE
		const totalPages = parseInt(filtered.length / PAGE_SIZE) + 1
		const showingPage = filtered.slice(actualPage, actualPage + PAGE_SIZE)

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
			<Table page={showingPage} selectVoucher={this.selectVoucher}/>
			<div className="table-footer">
				<div>
					<button disabled={!this.state.selected}>edit voucher</button>
					<button disabled={!this.state.selected}>disable voucher</button>
				</div>
				<div >
					<button onClick={this.toFirstPage}>{`<<`}</button>
					<button onClick={this.toPrevPage}>{`<`}</button>
					<span>
						{` ${actualPage + 1} to ${(
							actualPage + PAGE_SIZE > filtered.length
							? filtered.length 
							: actualPage + PAGE_SIZE)} of ${filtered.length} `}</span>
					<button onClick={() => this.toNextPage(totalPages)}>{`>`}</button>
					<button onClick={() => this.toLastPage(totalPages)}>{`>>`}</button>
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