export interface IIMagesData {
  readonly link: string; // readonly для неизменности
  location: string;
  description: string;
  photographer: string;
  title: string;
  date_created: Date;
}
