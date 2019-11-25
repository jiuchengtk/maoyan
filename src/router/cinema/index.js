export default {
    path: '/cinema',
    name: 'cinema',
    component: () => import('@/views/Cinema'),
    children: [
        {
            path: 'citySwitch',
            name: 'CitySwitch',
            component: () => import('@/components/CitySwitch')
        },
        {
            path: 'brandSwitch',
            name: 'BrandSwitch',
            component: () => import('@/components/BrandSwitch')
        },
        {
            path: 'featureSwitch',
            name: 'FeatureSwitch',
            component: () => import('@/components/FeatureSwitch')
        }
    ]
}