import { ButtonProps } from "../ui/Button/Button";

export interface BaseLink {
  name:string;
  title:string;
  url:string;
}

export interface DropdownLink extends BaseLink {
  dropdown:true;
  children: LinkType[];
}

export interface NonDropdownLink extends BaseLink {
  dropdown?: false;
  children?: never;
}

export type LinkType = DropdownLink | NonDropdownLink;


export interface AccordionItem {
  title:string;
  content:string;
}

export interface ServicesType extends ButtonProps{
  icon:React.FC;
  title:string;
  content:string;
}

export interface SolutionsType extends ButtonProps{
  icon:React.FC;
  title:string;
  content:string;
}

export interface StatsType{
  stat:number;
  title:string;
  content:string;
}

