import { getCldImageUrl } from 'next-cloudinary';
import { Product1, Product2, Product3, Product4, Product5, Product6, Product7, Product8, Product9, Product10, Product11, Product12, Product13, Product14, Product15, } from '../public/img/image';
import {Blog1, Blog2,Blog3,Blog4,Blog5} from '@/public/img/image';
import {CollectionImg1,CollectionImg2,CollectionImg3,CollectionImg4 ,CollectionImg7, CollectionImg6, CollectionImg5,CollectionImg8,CollectionImg9, UserImg } from '../public/img/image';
import { AiderImg,AiderImg1,AiderImg2 } from '../public/img/image';
import { Gamme1, Gamme2, Gamme3, Gamme4, Gamme5 } from '../public/img/image';
import { Phone, PhoneCall, Printer, Mail, Info, MapPin } from 'lucide-react';
import type { Metadata } from 'next';
import { FaTruck,FaCheckCircle,FaHeadset } from 'react-icons/fa';
import { StaticImageData } from 'next/image';




{/*MetaData Layout */}
export const metadata: Metadata = {
  title: 'Rustika House',
  description: 'Rustika House Project'
};

{/*ServiceBar Components */}
export const services = [
  {
    icon: FaTruck,
    title: 'Free Delivery',
    description: 'Lorem ipsum dolor sit amet.',
  },
  {
    icon: FaCheckCircle,
    title: '100% Authentic',
    description: 'Lorem ipsum dolor sit amet.',
  },
  {
    icon: FaHeadset,
    title: 'Support 24/7',
    description: 'Lorem ipsum dolor sit amet.',
  },
];
{/* DisentNosClients*/}
export const testimonials = 
[
  {
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    name: "Paul Starr",
  },

  {
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    name: "Paul Starr",
  },

  {
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    name: "Paul Starr",
  },

  {
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    name: "Paul Starr",
  },
  // Add more testimonials here if needed
];

export const headers = [
  { className: 'text-primary font-mono text-xl sm:text-xl md:text-md lg:text-md', text: 'TEMOIGNAGES' },
  { className: 'text-orange-400 font-bold text-md sm:text-md md:text-3xl lg:text-4xl', text: 'REGARDEZ CE QUE DISENT NOS CLIENTS !' },
];

export const navLinks = [
  {
    href: "#",
    srText: "Next A Gauche",
    d: "M10 19l-7-7m0 0l7-7m-7 7h18"
  },
  {
    href: "#",
    srText: "Next A Droite",
    d: "M14 5l7 7m0 0l-7 7m7-7H3"
  }
];

{/*DECOUVRE NOS BLOG SECTION HOME PAGE*/}
export interface Blog {
  id: number;
  title: string;
  Catégorie: string;
  imgSrc:StaticImageData | string;
  description: string;
}

export const blogs = [
  { 
    id:1,
    imgSrc: CollectionImg9,
    Catégorie: 'Catégorie 1',
    title: 'Marroco Porte',
    description:
      'Lorem ipsum dolor sit amet consectetur. Neque purus egestas in tincidunt ullamcorper ullamcorper sociis ',
    likes: 6,
    comments: 18,
    userImgSrc: UserImg,
    userName: 'User2',
    date: '2023-07-10',
  },
  { 
    id:2,
    imgSrc: CollectionImg8,
    Catégorie: 'Catégorie 2',
    title: 'Kairaouan Porte',
    description:
      'Explorez les nouvelles tendances en cuisine moderne et découvrez des recettes innovantes qui émerveilleront vos invités.',
    likes: 12,
    comments: 22,
    userImgSrc: UserImg,
    userName: 'User3',
    date: '2023-07-11',
  },
  {
    id:3,
    imgSrc: CollectionImg7,
    Catégorie: 'Catégorie 3',
    title: 'Porte Traditionnelle 102',
    description:
      'Explorez les nouvelles tendances en cuisine moderne et découvrez des recettes innovantes qui émerveilleront vos invités.',
    likes: 12,
    comments: 22,
    userImgSrc: UserImg,
    userName: 'User3',
    date: '2023-07-11',
  },
  
  {
    id:4,
    imgSrc: CollectionImg6,
    Catégorie: 'Catégorie 4',
    title: 'Porte Traditionnelle 102',
    description:
      'Explorez les nouvelles tendances en cuisine moderne et découvrez des recettes innovantes qui émerveilleront vos invités.',
    likes: 12,
    comments: 22,
    userImgSrc: UserImg,
    userName: 'User3',
    date: '2023-07-11',
  },

  { 
    id:5,
    imgSrc: CollectionImg5,
    Catégorie: 'Catégorie 5',
    title: 'Porte Traditionnelle 102',
    description:
      'Explorez les nouvelles tendances en cuisine moderne et découvrez des recettes innovantes qui émerveilleront vos invités.',
    likes: 12,
    comments: 22,
    userImgSrc: UserImg,
    userName: 'User3',
    date: '2023-07-11',
  },

  { 
    id:6,
    imgSrc: CollectionImg4,
    Catégorie: 'Catégorie 6',
    title: 'Porte Traditionnelle 102',
    description:
      'Explorez les nouvelles tendances en cuisine moderne et découvrez des recettes innovantes qui émerveilleront vos invités.',
    likes: 12,
    comments: 22,
    userImgSrc: UserImg,
    userName: 'User3',
    date: '2023-07-11',
  },
  
  { 
    id:7,
    imgSrc: CollectionImg3,
    Catégorie: 'Catégorie 7',
    title: 'Porte Traditionnelle 102',
    description:
      'Explorez les nouvelles tendances en cuisine moderne et découvrez des recettes innovantes qui émerveilleront vos invités.',
    likes: 12,
    comments: 22,
    userImgSrc: UserImg,
    userName: 'User3',
    date: '2023-07-11',
  },

  { 
    id:8,
    imgSrc: CollectionImg2,
    Catégorie: 'Catégorie 8',
    title: 'Porte Traditionnelle 102',
    description:
      'Explorez les nouvelles tendances en cuisine moderne et découvrez des recettes innovantes qui émerveilleront vos invités.',
    likes: 12,
    comments: 22,
    userImgSrc: UserImg,
    userName: 'User3',
    date: '2023-07-11',
  },

  { id:9,
    imgSrc: CollectionImg1,
    Catégorie: 'Catégorie 9',
    title: 'Porte Traditionnelle 102',
    description:
      'Explorez les nouvelles tendances en cuisine moderne et découvrez des recettes innovantes qui émerveilleront vos invités.',
    likes: 12,
    comments: 22,
    userImgSrc: UserImg,
    userName: 'User3',
    date: '2023-07-11',
  },
];


{/*Dernier Blog IN Home Page*/}
export const posts = [
    {
      blogimg1: Blog1,
      blogimg2: Blog2,
      blogimg3: Blog3,
      blogimg4: Blog4,
      blogimg5: Blog5,
      userImgSrc: '/img/PNG/usreimg.png',
      userName: 'User2',
      date: '2023-07-10', 
      title: 'Porte Traditionnelle 101',
      description:
        'Lorem ipsum dolor sit amet consectetur. Neque purus egestas in tincidunt ullamcorper ullamcorper sociis habitant',
      likes: 6,
      comments: 18,
    },
   
  ];
 {/* Decouvre More In Product Deatils Page*/}
export const DecouvreMore =[
  {
    id: 1,
    category: 'SIDI BOUSAID',
    imgSrc: Product1,
    title: 'SIDI BOUSAID',
    description: 'Lorem ipsum dolor sit amet consectetur. Neque purus egestas in tincidunt ullamcorper ullamcorper sociis habitant',
    likes: 6,
    comments: 18,
},
{
    id: 2,
    category: 'RADIAS',
    imgSrc: Product2,
    title: 'RADIAS',
    description: 'Lorem ipsum dolor sit amet consectetur. Neque purus egestas in tincidunt ullamcorper ullamcorper sociis habitant',
    likes: 6,
    comments: 18,

},
{
    id: 3,
    category: 'TUNIS',
    imgSrc: Product3,
    title: 'TUNIS',
    description: 'Lorem ipsum dolor sit amet consectetur. Neque purus egestas in tincidunt ullamcorper ullamcorper sociis habitant',
    likes: 6,
    comments: 18,

    
},
];

  {/*All Peoduct IN Product Page*/}
  export interface Product {
    id: number;
    category: string;
    imgSrc: StaticImageData | string;
    title: string;
    description: string;
    likes: number;
    comments: number;
  }

  export const products = [
    {
        id: 1,
        category: 'SIDI BOUSAID',
        imgSrc: Product1,
        title: 'SIDI BOUSAID',
        description: 'Lorem ipsum dolor sit amet consectetur. Neque purus egestas in tincidunt ullamcorper ullamcorper sociis habitant',
        likes: 6,
        comments: 18,
    },
    {
        id: 2,
        category: 'RADIAS',
        imgSrc: Product2,
        title: 'RADIAS',
        description: 'Lorem ipsum dolor sit amet consectetur. Neque purus egestas in tincidunt ullamcorper ullamcorper sociis habitant',
        likes: 6,
        comments: 18,

    },
    {
        id: 3,
        category: 'TUNIS',
        imgSrc: Product3,
        title: 'TUNIS',
        description: 'Lorem ipsum dolor sit amet consectetur. Neque purus egestas in tincidunt ullamcorper ullamcorper sociis habitant',
        likes: 6,
        comments: 18,

        
    },
    {
      id: 4,
      category: 'TUNIS',
      imgSrc: Product4,
      title: 'TUNIS',
      description: 'Lorem ipsum dolor sit amet consectetur. Neque purus egestas in tincidunt ullamcorper ullamcorper sociis habitant',
      likes: 6,
      comments: 18,
      
  },
  {
    id: 5,
    category: 'TUNIS',
    imgSrc: Product5,
    title: 'TUNIS',
    description: 'Lorem ipsum dolor sit amet consectetur. Neque purus egestas in tincidunt ullamcorper ullamcorper sociis habitant',
    likes: 6,
    comments: 18,
    
},
{
  id: 6,
  category: 'TUNIS',
  imgSrc: Product6,
  title: 'TUNIS',
  description: 'Lorem ipsum dolor sit amet consectetur. Neque purus egestas in tincidunt ullamcorper ullamcorper sociis habitant',
  likes: 6,
  comments: 18,
  
}

];

{/*All Peoduct IN Product Page 2*/}
export const productpagetwo = [
  { 
    id: 7,
    category:'DOWING STREET',
    imgSrc: Product7,
    title: 'DOWING STREET',
    description: 'Lorem ipsum dolor sit amet consectetur. Neque purus egestas in tincidunt ullamcorper ullamcorper sociis habitant',
    likes: 6,
    comments: 18,

    

},
{
  id: 7,
  category:'ADOBE',
  imgSrc: Product8,
  title: 'ADOBE',
  description: 'Lorem ipsum dolor sit amet consectetur. Neque purus egestas in tincidunt ullamcorper ullamcorper sociis habitant',
  likes: 6,
  comments: 18,
  savoir: 'SAVOIR PLUS',
},
{
  id: 8,
category:'BURNOS VIBRANT',  
imgSrc: Product6,
title: 'BURANOS VIBRANT',
description: 'Lorem ipsum dolor sit amet consectetur. Neque purus egestas in tincidunt ullamcorper ullamcorper sociis habitant',
likes: 6,
comments: 18,

},
{
  id: 9,
  category: 'TUNIS',
  imgSrc: Product9,
  title: 'TUNIS',
  description: 'Lorem ipsum dolor sit amet consectetur. Neque purus egestas in tincidunt ullamcorper ullamcorper sociis habitant',
  likes: 6,
  comments: 18,
},
{
  id: 10,
  category: 'TUNIS',
  imgSrc: Product10,
  title: 'TUNIS',
  description: 'Lorem ipsum dolor sit amet consectetur. Neque purus egestas in tincidunt ullamcorper ullamcorper sociis habitant',
  likes: 6,
  comments: 18,
  
},
{
  id: 11,
  category: 'TUNIS',
  imgSrc: Product11,
  title: 'TUNIS',
  description: 'Lorem ipsum dolor sit amet consectetur. Neque purus egestas in tincidunt ullamcorper ullamcorper sociis habitant',
  likes: 6,
  comments: 18,
  
}

]


{/*All Peoduct IN Product Page 3*/}
export const productpagethree = [
  { 
    id: 12,
    category:'CARTAGENAS COLORFUL',
    imgSrc: Product12,
    title: 'CARTAGENAS COLORFUL',
    description: 'Lorem ipsum dolor sit amet consectetur. Neque purus egestas in tincidunt ullamcorper ullamcorper sociis habitant',
    likes: 6,
    comments: 18,
    savoir: 'SAVOIR PLUS',
  },
  {
    id: 13,
    category:'COLOMBOS',
    imgSrc: Product13,
    title: 'COLUMBOS',
    description: 'Lorem ipsum dolor sit amet consectetur. Neque purus egestas in tincidunt ullamcorper ullamcorper sociis habitant',
    likes: 6,
    comments: 18,
    
  },
  {
    id: 14,
    category:'ELIZABETH',
    imgSrc: Product14,
    title: 'ELIZABETH',
    description: 'Lorem ipsum dolor sit amet consectetur. Neque purus egestas in tincidunt ullamcorper ullamcorper sociis habitant',
    likes: 6,
    comments: 18,

    
  },
  {
    id: 15,
    category: 'TUNIS',
    imgSrc: Product15,
    title: 'TUNIS',
    description: 'Lorem ipsum dolor sit amet consectetur. Neque purus egestas in tincidunt ullamcorper ullamcorper sociis habitant',
    likes: 6,
    comments: 18,
    
},
{
  id: 16,
  category: 'TUNIS',
  imgSrc: Product3,
  title: 'TUNIS',
  description: 'Lorem ipsum dolor sit amet consectetur. Neque purus egestas in tincidunt ullamcorper ullamcorper sociis habitant',
  likes: 6,
  comments: 18,
  
},
{
  id: 17,
  category: 'TUNIS',
  imgSrc: Product3,
  title: 'TUNIS',
  description: 'Lorem ipsum dolor sit amet consectetur. Neque purus egestas in tincidunt ullamcorper ullamcorper sociis habitant',
  likes: 6,
  comments: 18,
  
}
]

{/*All Peoduct IN Product Page 4*/}
export const productpagefor = [
  {
    category:'SHAKESPEARS',
    imgSrc: Product10,
    title: 'SHAKESPEARS',
    description: 'Lorem ipsum dolor sit amet consectetur. Neque purus egestas in tincidunt ullamcorper ullamcorper sociis habitant',
    likes: 6,
    comments: 18,
    
  },
  { 
    category:'INDIAN',
    imgSrc: Product11,
    title: 'INDIAN',
    description: 'Lorem ipsum dolor sit amet consectetur. Neque purus egestas in tincidunt ullamcorper ullamcorper sociis habitant',
    likes: 6,
    comments: 18,

  },
]
{/*This Bloc For DernierCollection Components */}
const urls = [
  getCldImageUrl({ src: 'CollectionImg1' }),
  getCldImageUrl({ src: 'CollectionImg2' }),
  getCldImageUrl({ src: 'CollectionImg3' }),
  getCldImageUrl({ src: 'CollectionImg4' }),
  getCldImageUrl({ src: 'CollectionImg5' }),
  getCldImageUrl({ src: 'CollectionImg6' }),
  getCldImageUrl({ src: 'CollectionImg7' }),
  getCldImageUrl({ src: 'CollectionImg8' }),
];
export const imageUrls = urls;

 export const imagesCOLL = [
  CollectionImg1,
  CollectionImg2,
  CollectionImg3,
  CollectionImg4,
  CollectionImg5,
  CollectionImg6,
  CollectionImg7,
  CollectionImg8,
];

{/*This Bloc For AiderLesIndividus Components */}
export const imagesINFO = [
  {
    src: AiderImg,
    alt: "Map",
    
  },
  {
    src: AiderImg1,
    alt: "Image 1",
    
  },
  {
    src: AiderImg2,
    alt: "Image 2",
    
  },
];

export type IconType = 'PhoneCall' | 'Phone' | 'Printer' | 'Mail' | 'Info' | 'MapPin';

export const iconMap: Record<IconType, React.ComponentType> = {
  PhoneCall: PhoneCall,
  Phone: Phone,
  Printer: Printer,
  Mail: Mail,
  Info: Info,
  MapPin: MapPin,
};

export interface Contact {
  href: string;
  icon: IconType;
  text: string;
}

export interface ContactSection {
  icon: IconType;
  title: string;
  contacts: Contact[];
}

export const contactSections: ContactSection[] = [
  {
    icon: 'PhoneCall',
    title: 'Appelez-nous Maintenant',
    contacts: [
      {
        href: 'tel:+21612345678',
        icon: 'Phone',
        text: 'téléphone: +(216) 12 345 678',
      },
      {
        href: 'fax:+21612345678',
        icon: 'Printer',
        text: 'Fax : +(216) 12 345 678',
      },
    ],
  },
  {
    icon: 'Info',
    title: 'Information',
    contacts: [
      {
        href: 'mailto:info@example.com',
        icon: 'Mail',
        text: 'Email : info@example.com',
      },
      {
        href: '#',
        icon: 'MapPin',
        text: '5080 Teboulba, Monastir, Tunisie',
      },
    ],
  },
];
{/* Prcourez La GAMME Components*/}
export const imageGAMME = [
  { src: Gamme1, alt: "GAMME1", text: "Hiboun,Ma", className: "" },
  { src: Gamme2, alt: "GAMME2", text: "Hiboun,Ma", className: "" },
  { src: Gamme3, alt: "GAMME3", text: "Hiboun,Ma", className: "" },
  { src: Gamme4, alt: "GAMME4", text: "Hiboun,Ma", className: "" },
  { src: Gamme5, alt: "GAMME5", text: "Hiboun,Ma", className: "hidden sm:block" },
  { src: Gamme5, alt: "GAMME6", text: "Hiboun,Ma", className: "hidden sm:block" },
];
 {/* Footer*/}
export const quickLinks = [
  { href: "#", text: "Home" },
  { href: "#", text: "AboutUS" },
  { href: "#", text: "Blog" },
  { href: "#", text: "Products" },
  { href: "#", text: "Contact" },
];

export const helpfulLinks = [
  { href: "#", text: "Contact" },
  { href: "#", text: "FAQs" },
  { href: "#", text: "Live Chat" },
];

{/*Block Comments in Blog Page */}
export const comments = [
  {
    id: 1,
    name: 'Jenny Wilson',
    time: '1 week ago',
    text: "These running shoes are the best I've ever owned. They're lightweight, supportive, and my feet feel great even after long runs. The cushioning is perfect for absorbing impact.",
    likes: 10,
    replies: 2
  },
  {
    id: 2,
    name: 'Kevin Patel',
    time: '5 days ago',
    text: 'Totally! I ran a half marathon in them last weekend and had zero discomfort. Have you tried them on trails?',
    likes: 5,
    replies: 0
  },
  {
    id: 3,
    name: 'James Anderson',
    time: '2 days ago',
    text: "I've been considering getting these. How do they hold up for indoor workouts?",
    likes: 5,
    replies: 1
  }
];