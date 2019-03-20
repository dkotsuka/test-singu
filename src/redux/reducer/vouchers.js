import { ADD_VOUCHER, LOAD_DATA, DISABLE_VOUCHER, EDIT_VOUCHER } from '../actions'

export default function vouchers(state=[], action) {
	let prevState , newState, id, voucher, user

	switch (action.type) {

		case LOAD_DATA:
			const list = action.list
			for (let i in list) {
				list[i].start = new Date(list[i].start)
				list[i].end = new Date(list[i].end)
				list[i].status = setStatus(list[i])
			}
			return list

		case ADD_VOUCHER:
			voucher = action.voucher
			voucher.start = new Date(voucher.start)
			voucher.end = new Date(voucher.end)
			voucher.status = setStatus(voucher)
			return [...state, voucher]

		case DISABLE_VOUCHER:
			prevState = [...state]
			newState = []
			prevState.map((voucher) => {
				if(voucher._id === id) {
					voucher.disabled = true
					voucher.disabledBy = user
					voucher.status = 'disabled'
				}
				newState.push(voucher)
			})
			return newState

		case EDIT_VOUCHER:
			prevState = [...state]
			newState = []
			voucher = action.voucher
			voucher.start = new Date(voucher.start)
			voucher.end = new Date(voucher.end)
			id = action.id
			voucher._id = id
			newState = prevState.filter((v) => {
				return v._id !== id
			})
			newState.push(voucher)
			voucher.status = setStatus(voucher)
			return newState

		default:
			return state
	}
}

function setStatus(voucher) {
	const today = Date.now()
	if (voucher.disabled){
		return "disabled"
	} else {
		if (voucher.end.getTime() < today) {
			return "expired"
		} else {
			return "active"
		}
	}
}