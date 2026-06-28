export async function register(email: string, password: string, name: string, surname: string) {
    const URL = 'https://cinemaguide.skillbox.cc'
    const body = JSON.stringify({ email, password, name, surname })
    console.log('Отправляю:', { email, password, name, surname })
    const response = await fetch(`${URL}/user`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: body,
        credentials: "include"


    })

    if (!response.ok) {
        throw new Error('Ошибка регистрации')
    }

    const data = await response.json()

    if (data.token) {
        localStorage.setItem("token", data.token)
    }

    console.log('Ответ', data)
    return data


}