export function returnData(data) {
  return {
    code: 200,
    data: data
  }
}
export function returnError(message) {
  return {
    code: -1,
    message: message,
    data: ''
  }
}
