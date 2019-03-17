export function formatDate(arg) {
	const date = arg.toISOString().split("T")[0]
	const year = date.split("-")[0]
	const month = date.split("-")[1]
	const day = date.split("-")[2]

	return `${day}/${month}/${year}`
}

export function formatList(list){
	let string = ""
	list.map((item) => {string += item + ", "})
	return string.substring(0, string.length - 2)
}