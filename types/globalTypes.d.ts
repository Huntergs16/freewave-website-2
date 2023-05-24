interface productItem {
    id: string;
    img: string;
    large: string;
    medium: string;
    small: string;
    'x-large': string;
    'x-small': string;
    price: string;
    discount: [boolean, string];
  }

export default productItem;