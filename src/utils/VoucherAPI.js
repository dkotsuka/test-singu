import axios from 'axios'


export function getAll(argument) {
	return axios.get("http://localhost:3001/api/getAll")
}

export function getOne(id) {
	return axios.get("http://localhost:3001/api/getOne", {id})
}

export function createVoucher(voucher) {
	return axios.post("http://localhost:3001/api/post", voucher)
}

export function editVoucher(voucher) {
	return axios.put("http://localhost:3001/api/put", voucher)
}

export function disableVoucher(id, user) {
	return axios.put("http://localhost:3001/api/disable", {id, user})
}