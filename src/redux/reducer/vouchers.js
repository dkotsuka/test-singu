import { CREATE_VOUCHER, LOAD_PAGE } from '../actions'

export default function vouchers(state=[], action) {
	switch (action.type) {
		
		case LOAD_PAGE:
			const list = action.list
			return list

		default:
			return state
	}
}