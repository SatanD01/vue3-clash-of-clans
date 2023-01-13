export default [
    {
        id: 1,
        alias: 'archer',
        title: 'The Archer',
        descr: 'The Archer is attacking air and land units with arrows. Height speed but low damage',
        img: require('@/assets/img/archer.png'),
        lvl: 5,
        info: [
            {title: 'training', value: '20s'},
            {title: 'speed', value: '16'},
            {title: 'cost', value: '150'}
        ]
    },
    {
        id: 2,
        alias: 'wizard',
        title: 'The Wizard',
        descr: 'The Wizard has magick power and fire with fireball. Normal speed and height damage. Attack land and air units',
        img: require('@/assets/img/wizard.png'),
        lvl: 7,
        info: [
            {title: 'training', value: '10s'},
            {title: 'speed', value: '20'},
            {title: 'cost', value: '200'}
        ]
    },
    {
        id: 3,
        alias: 'goblin',
        title: 'The Goblin',
        descr: 'The Goblin has small damage but he attack only gold and oil towers first. He training very fast',
        img: require('@/assets/img/goblin.png'),
        lvl: 7,
        info: [
            {title: 'training', value: '5s'},
            {title: 'speed', value: '10'},
            {title: 'cost', value: '100'}
        ]
    },
    {
        id: 4,
        alias: 'barbarian',
        title: 'The Barbarian',
        descr: 'The Barbarian has small damage but he attack only gold and oil towers first. He training very fast',
        img: require('@/assets/img/barbarian.png'),
        lvl: 3,
        info: [
            {title: 'training', value: '10s'},
            {title: 'speed', value: '15'},
            {title: 'cost', value: '150'}
        ]
    },
    {
        id: 5,
        alias: 'giant',
        title: 'The Giant',
        descr: 'The Giant has small damage but he attack only gold and oil towers first. He training very fast',
        img: require('@/assets/img/giant.png'),
        lvl: 3,
        info: [
            {title: 'training', value: '20s'},
            {title: 'speed', value: '60'},
            {title: 'cost', value: '200'}
        ]
    }
]