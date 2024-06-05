import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faInstagram, faLinkedin, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
export const socials = [
    {label: "Facebook", icon:faFacebook, href: "https://facebook.com/davidalagwu", color: "blue-800"},
    {label: "Twitter", icon:faXTwitter, href: "https://twitter.com/AlagwuDavid", color: "white"},
    {label: "Instagram", icon:faInstagram, href: "https://instagram.com/multicademy.ng", color: "pink-600"},
    {label: "Linkedin", icon:faLinkedin, href: "https://linkedin.com/davidalagwu", color: "blue-800"},
    {label: "Github", icon:faGithub, href: "https://github.com/AlagwuDavid", color: "white"},
    {label: "Youtube", icon:faYoutube, href: "https://youtube.com/@multicademy.ng", color: "[red]"}
];

export const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'About me', href: '/profile', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Services', href: '#', current: false },
    { name: 'Contact', href: '#', current: false },
  ]