import { CREATE_VOUCHER, LOAD_DATA } from '../actions'

export default function vouchers(state={}, action) {
	switch (action.type) {

		case LOAD_DATA:
			const list = action.list
			const today = Date.now()
			for (let i in list) {
				list[i].start = new Date(list[i].start)
				list[i].end = new Date(list[i].end)
				if (list[i].end.getTime() < today) {
					list[i].status = "expired"
				} else {
					list[i].status = "active"
				}
			}

			return list

		default:
			return state
	}
}