export type NavLink = {
  id: string;
  title: string;
};

export type Feature = {
  id: string;
  icon: string;
  title: string;
  content: string;
};

export type Feedback = {
  id: string;
  content: string;
  name: string;
  title: string;
  img: string;
};

export type Stat = {
  id: string;
  title: string;
  value: string;
};

export type FooterLink = {
  title: string;
  links: { name: string; link: string }[];
};

export type SocialMedia = {
  id: string;
  icon: string;
  link: string;
};

export type Client = {
  id: string;
  logo: string;
};
