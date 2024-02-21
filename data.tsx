import { Dumbbell, NotebookPen, HomeIcon, UserRound, Mail, MessageCircle, Crop, Pencil, Computer, Book, Rocket, Instagram , Facebook, Music2} from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Mail  strokeWidth={1} />,
        src: "mailto:mdiannibelliasesorias@gmail.com",
    },
    {
        id: 2,
        logo: <MessageCircle  strokeWidth={1} />,
        src: "https://wa.me/+5491133992137",
    },
];

export const socialMedias = [
    {
        id: 1,
        icons: <Instagram size={24} strokeWidth={1}/>,
        src: "https://www.instagram.com/mdiannibelli/"
    },
    {
        id: 2,
        icons: <Music2 size={24} strokeWidth={1} />,
        src: "https://www.tiktok.com/@markitosfit"
    },
    {
        id: 3,
        icons: <Facebook size={24} strokeWidth={1}/>,
        src: "https://www.facebook.com/marcos.iannibelli"
    }
]


export const itemsNavbar = [
    {
        id: 1,
        title: "Inicio",
        icon: <HomeIcon  color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "Planes de entrenamiento",
        icon: <Dumbbell  color="#fff" strokeWidth={1} />,
        link: "/planes-de-entrenamiento",
    },
    {
        id: 3,
        title: "Sobre mi",
        icon: <UserRound color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 4,
        title: "Contacto",
        icon: <NotebookPen color="#fff" strokeWidth={1} />,
        link: "/contacto",
    }
];

