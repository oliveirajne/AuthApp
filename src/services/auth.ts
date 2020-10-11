interface Response {
    token: string;
    user: {
        name: string;
        email: string;
    }
}

export function signIn(): Promise<Response> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'sdkjfgskdf',
                user: {
                    name: 'Jay',
                    email: 'jay@teste.com.br'
                }
            })
        }, 2000);
    });
}