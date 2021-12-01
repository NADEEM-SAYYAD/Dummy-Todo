import http from '../baseurl/base-path'

export const getUsers = () => {
    return http.get("/employee");
}
export const addUser = (data) => {
    return http.post("/employee", data)
}
export const editUser = (id) => {
    return http.get(`/employee/${id}`)
}
export const deleteUser = (id) => {
    return http.delete(`/employee${id}`)
}
export const udpateUser = (id, data) => {
    return http.put(`/employee/${id}`, data)
}