import axios from 'axios'


export function getAll(argument) {
	return axios.get("http://localhost:3001/api/getAll")
}

export function createVoucher(voucher) {
	return axios.post("http://localhost:3001/api/post", voucher)
}

export function editVoucher(voucher) {
	return axios.put("http://localhost:3001/api/post", voucher)
}

