interface productItem {
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

export default productItem;