const generateId = () => {
    return parseInt(new Date().valueOf() + Math.random())
}
export default generateId