import {FiSearch} from 'react-icons/fi'
import {FaTelegramPlane, FaInstagram, FaFacebook, FaTiktok,FaTwitter,FaYoutube, FaLinkedin} from 'react-icons/fa'

export const navbarList = [
    {
        path:"/",
        name:"Главная"
    },
    {
        path:"/movies",
        name:"Фильмы"
    },
    {
        path:"/series",
        name:"Сериалы"
    },
    {
        path:"/search",
        name:<FiSearch />
    },
]
export const footerList = [
    {
        path:"/",
        name:<FaTelegramPlane />
    },
    {
        path:"#!",
        name:<FaInstagram />
    },
    {
        path:"#!",
        name:<FaFacebook />
    },
    {
        path:"#!",
        name:<FaTiktok />
    },
    {
        path:"#!",
        name:<FaTwitter />
    },
    {
        path:"#!",
        name:<FaYoutube />
    },
    {
        path:"#!",
        name:<FaLinkedin/>
    },
]