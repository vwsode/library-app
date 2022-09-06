import { INavLink } from "../intefaces/INavLink.interface";
import { RiBook3Fill, RiHeadphoneFill } from 'react-icons/ri'
import { FaPodcast } from 'react-icons/fa'
import { MdOutlineMenuBook } from 'react-icons/md'

export const NAVIGATION_DATA_LIST: Array<INavLink> = [
    {
        title: 'E-books',
        path: '/e-books',
        id: 100,
        icon: <RiBook3Fill/>,
    },
    {
        title: 'Audio Books',
        path: '/audio-books',
        id: 101,
        icon: <RiHeadphoneFill/>,
    },
    {
        title: 'Podcasts',
        path: 'podcasts',
        id: 102,
        icon: <FaPodcast/>,
    },
    {
        title: 'Magazines',
        path: 'magazines',
        id: 103,
        icon: <MdOutlineMenuBook/>,
    },
]