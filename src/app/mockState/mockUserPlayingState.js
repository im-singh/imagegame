let imageState = {
    imageUrl: 'https://images.unsplash.com/photo-1616953152032-b76574f2d7f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTc3MDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTg0OTA0NTY&ixlib=rb-1.2.1&q=80&w=400',
    isError: false,
    needFetch: false,
    error: '',
    isLoading: false
}
let userState = {
    users: [],
    currentUser: {
        id: 0,
        email: 'ms@d.com',
        name: 'ms'
    },
    imageCount: 0,
    userCount: 1,
    images: [],
    likes: 0,
    dislikes: 0
}
let gameState = {
    isPlaying: true,
    isFinished: false
}

export const mockUserPlayingState = {
    imageState, userState, gameState
}

let userState2 = {
    users: [],
    currentUser: {
        id: 0,
        email: 'ms@d.com',
        name: 'ms'
    },
    imageCount: 4,
    userCount: 1,
    images: [
        {
            like: true,
            dislike: false,
            imageUrl: 'https://images.unsplash.com/photo-1616596126866-8fae50f4fd6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTc3MDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTg4MjAyMTk&ixlib=rb-1.2.1&q=80&w=400'
        },
        {
            like: false,
            dislike: true,
            imageUrl: 'https://images.unsplash.com/photo-1617175093778-8517ba3e14d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTc3MDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTg4MjAyMjU&ixlib=rb-1.2.1&q=80&w=400'
        },
        {
            like: true,
            dislike: false,
            imageUrl: 'https://images.unsplash.com/photo-1618366712069-cf25c7b669f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTc3MDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTg4MjAyMjg&ixlib=rb-1.2.1&q=80&w=400'
        },
        {
            like: false,
            dislike: false,
            imageUrl: 'https://images.unsplash.com/photo-1618244394693-19670ff406dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTc3MDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTg4MjAyMzI&ixlib=rb-1.2.1&q=80&w=400'
        }
    ],
    likes: 2,
    dislikes: 1
}
export const mockUserPlayingState2 = {
    imageState, userState: userState2, imageState
}