import { getAll } from '../../utils/VoucherAPI'

export const CREATE_VOUCHER = 'CREATE_VOUCHER'
export const LOAD_DATA = 'LOAD_DATA'


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


// export function handleInitialData() {
// 	return (dispatch) => {
// 		dispatch(showLoading())
// 		return getInitialData()
// 			.then(({tweets, users}) => {
// 				dispatch(receiveUsers(users))
// 				dispatch(receiveTweets(tweets))
// 				dispatch(setAuthedUser(AUTHED_USER))
// 				dispatch(hideLoading())
// 			})
// 	}
// }