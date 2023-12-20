import tour1 from '../images/tour-1.jpeg'
import tour2 from '../images/tour-2.jpeg'
import tour3 from '../images/tour-3.jpeg'
import tour4 from '../images/tour-4.jpeg'

export const pageLinks = [
    {id:1, href: '#home', text: 'Home'},
    {id:2, href: '#about', text: 'about'},
    {id:3, href: '#services', text: 'services'},
    {id:4, href: '#tours', text: 'tours'},
]

export const socialLinks = [
    {id:1, href: 'https://www.twitter.com', icon: 'fab fa-facebook'},
    {id:2, href: 'https://www.twitter.com', icon: 'fab fa-twitter'},
    {id:3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace'}
]

export const services = [
    {
        id : 1,
        icon:"fas fa-wallet fa-fw",
        title: "saving money",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores.officia."
    },
    {
        id : 2,
        icon:"fas fa-tree fa-fw",
        title: "endless hiking",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores.officia."
    },
    {
        id : 3,
        icon:"fas fa-socks fa-fw",
        title: "amazing comfort",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores.officia."
    }
]


export const tours = [
    {
        id: 1,
        img: tour1,
        date: 'august 26th, 2020',
        title: 'Tibet Adventure',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location: 'china',
        days: '6 days',
        price: '2100'
    },
    {
        id: 2,
        img: tour2,
        date: 'october 1th, 2020',
        title: 'best of java',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location: 'indonesia',
        days: '11 days',
        price: '1400'
    },
    {
        id: 3,
        img: tour3,
        date: 'september 15th, 2020',
        title: 'explore the pyramids',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location: 'egypt',
        days: '8 days',
        price: '2400'
    },
    {
        id: 4,
        img: tour4,
        date: 'june 21th, 2020',
        title: 'tour of japan',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location: 'japan',
        days: '12 days',
        price: '3200'
    }
]
