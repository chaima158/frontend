import moment from "moment/moment";
// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";


// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
/*
// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";*/



// import icons
import { FaYoutube, FaInstagram, FaGithub, FaFacebook, FaTwitter  } from 'react-icons/fa';
import { BsChatDotsFill } from 'react-icons/bs';


// import images
import AboutImg from '../../src/assets/img/about.png';
import Feature1Img from '../../src/assets/img/features/feature1.png';
import Feature2Img from '../../src/assets/img/features/feature2.png';
import Feature3Img from '../../src/assets/img/features/feature3.png';
import Feature4Img from '../../src/assets/img/features/feature4.png';
import Avatar1Img from '../../src/assets/img/testimonials/avatar1.png';
import Avatar2Img from '../../src/assets/img/testimonials/avatar2.png';
import Avatar3Img from '../../src/assets/img/testimonials/avatar3.png';
import LogoV2 from '../../src/assets/img/logo-v2.png';
import afroseer from '../../src/assets/img/footer.jpg';
import footer from '../../src/assets/img/footer.jpg';
import about2 from '../../src/assets/img/fac.png';
import HeroImage from '../../src/assets/img/hero-img.png';
import Feature1BgImg from '../../src/assets/img/features/feature1_bg.png';
import Feature2BgImg from '../../src/assets/img/features/feature2_bg.png';
import Feature3BgImg from '../../src/assets/img/features/feature3_bg.png';
import Feature4BgImg from '../../src/assets/img/features/feature4_bg.png';
import heero from '../../src/assets/img/heero.png';
import home from '../../src/assets/img/home.gif';
import accueil from '../../src/assets/img/accueil.png';
import mmm from '../../src/assets/img/features/mmm.png';
import cong from '../../src/assets/img/features/cong.png';
import admin from '../../src/assets/img/features/admin.png';
import congé from '../../src/assets/img/features/congé.png';
import img1 from '../../src/assets/img/features/img1.webp';
import img2 from '../../src/assets/img/features/img2.webp';
import img3 from '../../src/assets/img/features/img3.webp';
import img4 from '../../src/assets/img/features/img4.webp';
import equipe from "../../src/assets/img/equipe.png";


//hello 
export const helloData = {
  image: equipe,
  title: "Bienvenue à l'équipe d'Afroser",
  subtitle:
    '',
};
//nav
export const navigationData = [
  {
    name: 'Accueil',
    href: '/',
  },
  {
    name: 'A propos',
    href: '',
  },
  
  {
    name: 'Se connecter',
    href: '/login',
  },
];

export const heroData = {
  title: ` Osez La Dégitalisation autrement! `,
  subtitle:'Afroser, Agence de communication',
  btnText: 'Bienvenue ',

  image: home,
};

//about 
export const aboutData = {
  image: about2,
  title: 'En savoir un peu plus sur nous',
  subtitle:
    'Agence de communication & solutions digitales en Tunisie qui vous propose des services développement web et mobile, conseil et analyse; stratégie digitale et réseaux sociaux.',
};

//services
export const featuresData = {
  title: 'Quelques services que nous offrons',
  subtitle:
    "Avec cette application permet aux employés d'Afroser d'accéder aux services en ligne de l'administration",
  list: [
    {
      image: img1,
      bgImage: Feature1BgImg,
      title: 'Payment Done',
      description:
        'Pay with a Visa or PayPal card and without much ado',
      linkText: 'Learn more',
      delay: '400',
    },
    {
      image: img2,
      bgImage: Feature2BgImg,
      title: 'Find Your Product',
      description:
        'We offer sale of products through the Internet..',
      linkText: 'Learn more',
      delay: '700',
    },
    {
      image: img3,
      bgImage: Feature3BgImg,
      title: 'Print Out',
      description:
        'Print out service gives you convenience if someday you need print data, just edit it all and just print it.',
      linkText: 'Learn more',
      delay: '1000',
    },
    {
      image: img4,
      bgImage: Feature4BgImg,
      title: 'Product Received',
      description:
        'In our app you can see the delay time of your order...',
      linkText: 'Learn more',
      delay: '1300',
    },
  ],
};

export const testimonialsData = [
  {
    image: Avatar1Img,
    name: 'Serena',
    web: 'rena.com',
    message:
      'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.',
    delay: '300',
  },
  {
    image: Avatar2Img,
    name: 'Natalia',
    web: 'nataliya.com',
    message:
      'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.',
    delay: '600',
  },
  {
    image: Avatar3Img,
    name: 'Vebin',
    web: 'vebin.com',
    message:
      'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.',
    delay: '900',
  },
];

export const ctaData = {
  title: 'Contact Us From Here',
  subtitle: 'Get limited 1 week free try our features!',
  btnText1: 'Learn more',
  btnText2: 'Request Demo',
};
//footer
export const footerData = {
  logo: footer,
  address: 'Cité Jasmain, Ben Arous, Tunisia',
  email: 'hello@afroser.com',
  phone: '(+216) 53 312 313',
  list1: [
    {
      name: 'Profile',
      href: '#',
    },
    {
      name: 'Features',
      href: '#',
    },
    {
      name: 'Careers',
      href: '#',
    },
    {
      name: 'DW News',
      href: '#',
    },
  ],
  list2: [
    {
      name: 'Support',
      href: '#',
    },
    {
      name: 'Sign Up',
      href: '#',
    },
    {
      name: 'Guide',
      href: '#',
    },
    {
      name: 'Reports',
      href: '#',
    },
    {
      name: 'Q & A',
      href: '#',
    },
  ],
  socialList: [
    {
      icon: <FaFacebook />,
      href: 'https://www.facebook.com/afroseragencedecomm',
    },
    {
      icon: <FaInstagram />,
      href: 'https://www.instagram.com/afroser_com/?fbclid=IwAR3sO9_ybLLV1iLQyRGusGFi5cyyoR0f_nLM1_1tMg-Ekw3NUWKWymIG9YU',
    },
    {
      icon: <FaTwitter />,
      href: 'https://twitter.com/Afroser_com?fbclid=IwAR10UbZu2C5NJ7W-2EESRPIarJxaRDHTupuxSyMXIiK56GUaZx7pd2HZ6Os',
    },
  ],
};

export const copyrightData = {
  text: '© Afroser, 2023. Tous les droits sont réservés. Numéro d enregistrement de la société : (+216) 53 312 313.',
  icon: <BsChatDotsFill />,
};
























// Analytics Cards Data
export const cardsData = [
  {
    title: "Salaires",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Salaire",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Congés",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "has received Samsung gadget for charging battery.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Iron Man",
    noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "2 hours ago",
  },
];

export const userMenu = [
  {
    name: "Acceuil",
    path: "/home",
    icon: UilEstate,
  },
 /* {
    name: "crud",
    path: "/crud",
    icon: UilEstate,
  },*/
  {
    name: "Liste",
    path: "/listeconge",
    icon: "fa-solid fa-user",
  },
  {
    name: "Avoir un congé",
    path: "/avoirconge",
    icon: UilEstate,
  },

 
  
  {
    name: "Mes nouveaux",
    path: "/appointments",
    icon: "fa-solid fa-list",
  },
 
  {
    name: "Devenir Rh",
    path: "/apply-doctor",
    icon: "fa-solid fa-user-doctor",
  },
  {
    name: "Profile",
    path: "/profile",
    icon: "fa-solid fa-user",
  },
];

// admin menu
export const adminMenu = [
  {
    name: "Acceuil",
    path: "/home",
    icon:  "fa-solid fa-house"
  },
  {
    name: "Tableau de bord",
    path: "/admin/dashboard",
    icon:  "fa-solid fa-house"
  },

  {
    name: "les RH",
    path: "/admin/doctors",
    icon: "fa-solid fa-user",
  },
  {
    name: "les employés",
    path: "/admin/users",
    icon: "fa-solid fa-user",
  },
  
  {
    name: "Profile",
    path: "/profiledo",
    icon: "fa-solid fa-address-card",
  },
 
 
  {
    name: "Todo",
    path: "/todo",
    icon: "fa-solid fa-list",
  },
 
  
  {
    name: "Calendrier",
    path: "/Calendar",
    icon: "fa-solid fa-list",
  },
 
];

//* calendar Events
let eventGuid = 0
let todayStr = moment().format("YYYY-MM-DD")  // YYYY-MM-DD of today
export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'VC Meeting',
    start: todayStr + 'T09:00:00',

  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: moment(todayStr).add(1, "days").format("YYYY-MM-DD") + 'T16:00:00'
  },
  {
    id: createEventId(),
    title: "VC Meeting",
    start: moment(todayStr).add(2, "days").format("YYYY-MM-DD") + 'T20:00:00'
  },
  {
    id: createEventId(),
    title: "VC Meeting",
    start: moment(todayStr).add(3, "days").format("YYYY-MM-DD") + 'T09:00:00'
  },
  {
    id: createEventId(),
    title: "VC Meeting",
    start: moment(todayStr).add(5, "days").format("YYYY-MM-DD") + 'T13:00:00'
  },
  {
    id: createEventId(),
    title: "VC Meeting",
    start: moment(todayStr).add(6, "days").format("YYYY-MM-DD") + 'T13:00:00'
  },
]

export function createEventId() {
  return String(eventGuid++)
}

export const boardData = {
  columns: [
    {
      id: 1,
      title: "Backlog",
      cards: [
        {
          id: 1,
          title: "Database Setup",
          description: "Firebase Integration"
        },
        {
          id: 2,
          title: "Data Flow",
          description: "Setup Diagram with other developers"
        },
      ]
    },
    {
      id: 2,
      title: "TODO",
      cards: [
        {
          id: 9,
          title: "Data Table Page",
          description: "Server side Pagination",
        }
      ]
    },
    {
      id: 3,
      title: "Doing",
      cards: [
        {
          id: 10,
          title: "Full Calendar Extension",
          description: "Make new events and store in global states"
        },
        {
          id: 11,
          title: "Custom Kanban Board",
          description: "Setup react-kanban dep within Dashboard as seperate page"
        }
      ]
    },
    {
      id: 4,
      title: "Completed",
      cards: [
        {
          id: 12,
          title: "Vite Server Setup",
          description: "Configure required modules and starters"
        },
        {
          id: 13,
          title: "Modular structre",
          description: "Write css in form of modules to reduce the naming conflicts"
        }
      ]
    }
  ]
}
