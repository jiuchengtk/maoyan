export default {
    path: '/movie',
    name: 'movie',
    component: () => import('@/views/Movie'),
    children: [
        {
            path: 'city',
            name: 'City',
            component: () => import('@/components/City')
        },
        {
            path: 'nowPlaying',
            name: 'NowPlaying',
            component: () => import('@/components/NowPlaying')
        },
        {
            path: 'commingSoon',
            name: 'CommingSoon',
            component: () => import('@/components/CommingSoon')
        },
        {
            path: 'search',
            name: 'Search',
            component: () => import('@/components/Search')
        },
        {
            path: '/movie',
            redirect: '/movie/NowPlaying'
        }
    ]
}

