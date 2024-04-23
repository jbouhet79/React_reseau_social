const users = [{id:1, pseudo:'test', password: 'Test', email: 'test@email.com'},{id:2, pseudo:'user', password: 'Test', email: 'test2@example.com'}]

export function getUserById(id) {
    return users.find((user)=>user.id === id)
}

export function getUserByUsernameAndPassword(username, password) {
    return users.find((user)=>user.pseudo.toLocaleLowerCase() === username.toLocaleLowerCase() && user.password === password)
}