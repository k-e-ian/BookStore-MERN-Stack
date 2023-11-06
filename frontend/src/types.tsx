export interface Book {
  _id: string;
  title: string;
  author: string;
  publishYear: number;
}

export interface BackButtonProps {
  destination?: string;
}

export interface BookDetails {
  _id: string;
  title: string;
  author: string;
  publishYear: number;
  createdAt: string;
  updatedAt: string;
}
