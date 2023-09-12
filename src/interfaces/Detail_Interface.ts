export interface DetailPage {
  path: string;
  content: Detail;
}
export interface Detail {
  imageHeader: string;
  headerColor: string;
  image1: string;
  image2: string;
  header: string;
  myRoles: MyRole[];
  platforms: Platform[];
  backgroundInfo: string;
  problems: Problem[];
  solutions: Solution[];
  features: Feature[];
  video: string;
}

export interface MyRole {
  item: string;
}

export interface Platform {
  item: string;
  link: string;
}

export interface Problem {
  item: string;
}
export interface Solution {
  item: string;
}
export interface Feature {
  image: string;
  title: string;
  text: string;
}
