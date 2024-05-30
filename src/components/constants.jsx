import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
export const socials = [
    {label: "Facebook", icon:faFacebook, href: "https://facebook.com", color: "blue"},
    {label: "Twitter", icon:faTwitter, href: "https://twitter.com", color: "blue"},
    {label: "Instagram", icon:faInstagram, href: "https://instagram.com", color: "#E80881"},
    {label: "Linkedin", icon:faLinkedin, href: "https://linkedin.com", color: "blue"},
    {label: "Github", icon:faGithub, href: "https://github.com", color: "white"},
    {label: "Youtube", icon:faYoutube, href: "https://youtube.com", color: "red"}
];

export const navigation = [
    { name: 'Profile', href: '#', current: true },
    { name: 'Projects', href: '#', current: false },
    { name: 'Curriculum vitae', href: './sections/cvLayoutPage', current: false },
    { name: 'Contact-us', href: '#', current: false },
  ]