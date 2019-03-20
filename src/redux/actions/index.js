import { getAll } from '../../utils/VoucherAPI'

export const ADD_VOUCHER = 'ADD_VOUCHER'
export const LOAD_DATA = 'LOAD_DATA'
export const DISABLE_VOUCHER = 'DISABLE_VOUCHER'

export function addVoucher(voucher) {
	return {
		type: ADD_VOUCHER,
		voucher
	}
}

export function disableOneVoucher(id, user) {
	return {
		type: DISABLE_VOUCHER,
		id,
		user
	}
}

function loadPage(list) {
	return {
		type: LOAD_DATA,
		list
	}
}

export function handleInitialData() {
	return (dispatch) => {
		return getAll().then((res) => {
			const list = []
			const vouchers = res.data
			for (let i in vouchers) {
				list.push(vouchers[i])
			}
			dispatch(loadPage(list))
		})
	}
}