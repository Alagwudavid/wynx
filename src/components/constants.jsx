import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faInstagram, faLinkedin, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
export const socials = [
    {label: "Facebook", icon:faFacebook, href: "https://facebook.com/davidalagwu", color: "gray-400"},
    {label: "Twitter", icon:faXTwitter, href: "https://twitter.com/AlagwuDavid", color: "gray-400"},
    {label: "Instagram", icon:faInstagram, href: "https://instagram.com/multicademy.ng", color: "gray-400"},
    {label: "Linkedin", icon:faLinkedin, href: "https://linkedin.com/davidalagwu", color: "gray-400"},
    {label: "Github", icon:faGithub, href: "https://github.com/AlagwuDavid", color: "gray-400"},
    {label: "Youtube", icon:faYoutube, href: "https://youtube.com/@multicademy.ng", color: "gray-400"}
];

export const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'About', href: '/profile', current: false },
    { name: 'Contact', href: '/contact-us', current: false },
    { name: 'Blog', href: '#coming-soon', current: false },
  ]