import axios from 'axios'


export function getAll(argument) {
	return axios.get("http://localhost:3001/api/getAllData")
}

export function createVoucher(voucher) {
	return axios.post("http://localhost:3001/api/putData", voucher);
}

