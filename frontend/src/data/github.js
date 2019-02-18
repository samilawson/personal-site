import dayjs from 'dayjs'

export const githubKeys = [
    'stargazers_count',
    'watchers_count',
    'forks',
    'subscribers_count',
    'pushed_at'
]

const data = [
    {
        label: 'Stars on this repo',
        key: 'stargazers_count',
        value: '0',
        link: 'https://github.com/samilawson/personal-site/stargazers'
    },
    {
        label: 'Watchers on this repo',
        key: 'subscribers_count',
        value: '1',
        link: 'https://github.com/samilawson/personal-site/stargazers'
    },
    {
        label: 'Number of forks',
        key: 'forks',
        value: '0',
        link: 'https://github.com/samilawson/personal-site/network'
    },
    {
        label: 'Last updated at',
        key: 'pushed_at',
        value: dayjs().format('MMMM Do YYYY'),
        link: 'https://github.com/samilawson/personal-site/commits'
    }
]

export default data