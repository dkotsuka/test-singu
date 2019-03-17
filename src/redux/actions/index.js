export const CREATE_VOUCHER = 'CREATE_VOUCHER'
export const LOAD_PAGE = 'LOAD_PAGE'

function loadPage(list) {
	return {
		type: LOAD_PAGE,
		list
	}
}