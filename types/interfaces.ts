export interface Service {
  id: string;
  title: string;
  text: string;
  icon: string;
}

export interface NavLink {
  id: number;
  title: string;
  href: string;
}

export interface FAQTablist {
  id: number;
  title: string;
}

export interface FAQI {
  id: number;
  question: string;
  answer: string;
}

export interface FooterLinks {
  id: number;
  title: string;
  href: string;
}

export interface OurPromises {
  id: number;
  title: string;
  text: string;
  icon: string;
}
