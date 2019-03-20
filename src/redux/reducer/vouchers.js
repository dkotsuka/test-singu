import { ADD_VOUCHER, LOAD_DATA, DISABLE_VOUCHER } from '../actions'

export default function vouchers(state=[], action) {
	switch (action.type) {

		case LOAD_DATA:
			const list = action.list
			const today = Date.now()
			for (let i in list) {
				list[i].start = new Date(list[i].start)
				list[i].end = new Date(list[i].end)
				if (list[i].disabled){
					list[i].status = "disabled"
				} else {
					if (list[i].end.getTime() < today) {
						list[i].status = "expired"
					} else {
						list[i].status = "active"
					}
				}
			}

			return list
		case ADD_VOUCHER:
			const voucher = action.voucher
			voucher.start = new Date(voucher.start)
			voucher.end = new Date(voucher.end)
			if (voucher.end.getTime() < today) {
				voucher.status = "expired"
			} else {
				voucher.status = "active"
			}
			return [...state, voucher]

		case DISABLE_VOUCHER:
			const {id, user} = action
			const prevState = [...state]
			const newState = []
			prevState.map((voucher) => {
				if(voucher._id === id) {
					voucher.disabled = true
					voucher.disabledBy = user
					voucher.status = 'disabled'
				}
				newState.push(voucher)
			})
			
			return newState

		default:
			return state
	}
}