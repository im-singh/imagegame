export const userFinishedState = {
    imageState: {
        imageUrl: null,
        isError: false,
        needFetch: false,
        error: '',
        isLoading: false
    },
    userState: {
        users: [
            {
                id: 0,
                email: 'ms@d.com',
                name: 'ms',
                images: [
                    {
                        like: false,
                        dislike: false,
                        imageUrl: 'https://images.unsplash.com/photo-1616953152032-b76574f2d7f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTc3MDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTg0OTA0NTY&ixlib=rb-1.2.1&q=80&w=400'
                    }
                ]
            }
        ],
        currentUser: {
            id: 0,
            email: 'ms@d.com',
            name: 'ms'
        },
        imageCount: 1,
        userCount: 1,
        images: [],
        likes: 0,
        dislikes: 0
    },
    gameState: {
        isPlaying: false,
        isFinished: true
    }
}

export const userFinishedState2 = {
    imageState: {
        imageUrl: null,
        isError: false,
        needFetch: false,
        error: '',
        isLoading: false
    },
    userState: {
        users: [
            {
                id: 0,
                email: 'ms@d.com',
                name: 'ms',
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
                    },
                    {
                        like: false,
                        dislike: false,
                        imageUrl: 'https://images.unsplash.com/photo-1616202193042-ddd082296830?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTc3MDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTg4MjAyMzU&ixlib=rb-1.2.1&q=80&w=400'
                    }
                ]
            },
            {
                id: 1,
                email: 'singh@m.com',
                name: 'singh',
                images: [
                    {
                        like: true,
                        dislike: false,
                        imageUrl: 'https://images.unsplash.com/photo-1617932221650-a056a9e91a95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTc3MDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTg4MjU1Mjg&ixlib=rb-1.2.1&q=80&w=400'
                    },
                    {
                        like: false,
                        dislike: true,
                        imageUrl: 'https://images.unsplash.com/photo-1618281079021-f4c1d4ed91a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTc3MDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTg4MjU1MzU&ixlib=rb-1.2.1&q=80&w=400'
                    },
                    {
                        like: false,
                        dislike: false,
                        imageUrl: 'https://images.unsplash.com/photo-1617080434971-da3617c07d60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTc3MDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTg4MjU1NDA&ixlib=rb-1.2.1&q=80&w=400'
                    }
                ]
            }
        ],
        currentUser: {
            id: 1,
            email: 'singh@m.com',
            name: 'singh'
        },
        imageCount: 3,
        userCount: 2,
        images: [],
        likes: 1,
        dislikes: 1
    },
    gameState: {
        isPlaying: false,
        isFinished: true
    }
}