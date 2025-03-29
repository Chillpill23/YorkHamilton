import { LinkType } from "../components/types/data";

export const MainLinks:LinkType[] = [
  {
    name:"Home",
    title:"Homepage",
    url:"/",
    dropdown:false,
  },
  {
    name:"Story",
    title:"Story",
    url:"/",
    dropdown:true,
    children:[
      {
        name:"Who Are We",
        url:"/",
        title:"Who Are We",
        dropdown:false,
      },
      {
        name:"Our People",
        url:"/",
        title:"Our People",
        dropdown:false,
      },
      {
        name:"Testimonials",
        url:"/",
        title:"Testimonials",
        dropdown:false,
      },
    ]
  },
  {
    name:"Services",
    title:"Services",
    url:"/",
    dropdown:true,
    children:[
      {
        name:"Finance Talent",
        url:"/",
        title:"Finance Talent",
        dropdown:false,
      },
      {
        name:"Legal Talent",
        url:"/",
        title:"Legal Talent",
        dropdown:false,
      },
      {
        name:"Real Estate Talent",
        url:"/",
        title:"Real Estate Talent",
        dropdown:false,
      },
      {
        name:"Other Talent",
        url:"/",
        title:"Other Talent",
        dropdown:false,
      },
    ]
  },
  {
    name:"Articles",
    title:"Check our articles",
    url:"/",
    dropdown:false,
  },
]
