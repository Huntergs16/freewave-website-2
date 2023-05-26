import { getDocs, collection } from "firebase/firestore"; 
import { db, storage } from "../../firebase/config";
import { productItem } from "@/types/globalTypes";
import { getDownloadURL, ref } from "firebase/storage";

const collection_name = "stock"

export const findAll = async (): Promise<productItem[]> => {
  const docRefs = await getDocs(collection(db, collection_name));

  const promises = docRefs.docs.map(async (item) => {
    try {
      const imageURL = await getDownloadURL(ref(storage, item.data().img));
      const product: productItem = {
        id: item.id,
        img: imageURL,
        large: item.data().large,
        medium: item.data().medium,
        small: item.data().small,
        'x-large': item.data()['x-large'],
        'x-small': item.data()['x-small'],
        price: item.data().price,
        discount: item.data().discount,
      };
      console.log(product);
      return product;
    } catch (error) {
      console.error('Error fetching image URL:', error);
      throw error; // Rethrow the error to be handled later
    }
  });

  try {
    const res = await Promise.all(promises);
    return res;
  } catch (error) {
    // Handle any errors that occur during the Promise.all operation
    console.error('Error fetching products:', error);
    return []; // Return an empty array or handle the error as needed
  }
};

