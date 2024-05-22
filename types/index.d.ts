declare type ProductCardProps = {
  id: string;
  title?: string;
  description?: string;
  tag?: "New" | "Highlight" | "Sponsored" | "";
  category?: string;
  image?: string;
};
declare type CategoryLabel =
  | "All"
  | "AI"
  | "Administration"
  | "Analytics"
  | "APIs"
  | "Bug Hunt"
  | "Business"
  | "CMS"
  | "Education"
  | "Developers"
  | "Finance"
  | "Logistic"
  | "News"
  | "Payments"
  | "Privacy"
  | "Repairment"
  | "Services"
  | "Shopping"
  | "Web Tools";

declare type NavLinksLabel = "Home" | "About" | "Sponsor" | "Contact";
declare interface IStackCard {
  title: string;
  description: string;
  image: StaticImageData;
}
