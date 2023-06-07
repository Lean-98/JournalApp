
export const initialState = {
    status: 'checking', // 'checking', 'not-authenticated', 'authenticated'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
}
export const authenticatedState = {
    status: 'authenticated', // 'checking', 'not-authenticated', 'authenticated'
    uid: '420404',
    email: 'demo@proton.us',
    displayName: 'Demo User',
    photoURL: 'https://demo.pgn',
    errorMessage: null,
}

export const notAuthenticatedState = {
    status: 'not-authenticated', // 'checking', 'not-authenticated', 'authenticated'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
}

export const demoUser = {
    uid: '420404',
    email: 'demo@proton.us',
    displayName: 'Demo User',
    photoURL: 'https://demo.pgn',
}
