export interface productItem {
  id: string;
  img: string;
  large: number;
  medium: number;
  small: number;
  'x-large': number;
  'x-small': number;
  price: string;
  discount: [boolean, string];
  [key: string];
}

export interface cartItem {
  id: string;
  img: string;
  size: string;
  quantity: number;
  price: string;
  [key: string];
}
