const URL = 'https://cinemaguide.skillbox.cc'

export async function login(email: string, password: string) {

    const response = await fetch(`${URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include"
    })

    if (!response.ok) {
        throw new Error('ошибка авторизации')
    }

    const data = await response.json()



    return data
}

export async function getProfile() {


    const response = await fetch(`${URL}/profile`, {
        credentials: "include"
    })

    if (!response.ok) {

        throw new Error('ошибка получения профиля')
    }

    return response.json()
}

export async function logout() {
    const response = await fetch(`${URL}/auth/logout`, {
        method: 'GET',
        credentials: 'include'
    })

    if (!response.ok) {
        throw new Error('Ошибка выхода')
    }

    return response.json()
}