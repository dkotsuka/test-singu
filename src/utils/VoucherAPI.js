import axios from 'axios'


export function createVoucher(voucher) {
	axios.post("http://localhost:3001/api/putData", voucher);
}
