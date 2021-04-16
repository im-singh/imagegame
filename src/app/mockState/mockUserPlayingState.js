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