import { getDocs, collection } from "firebase/firestore"; 
import { db, storage } from "../../firebase/config";
import productItem from "@/types/globalTypes";
import { getDownloadURL, ref } from "firebase/storage";

const collection_name = "stock"

export const findAll = async (): Promise<productItem[]> => {
    const doc_refs = (await getDocs(collection(db, collection_name)));

    const res: productItem[] = [];
    
    doc_refs.forEach(async (item) => {
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
        res.push(product);
      } catch (error) {
        // Handle any errors that occur during the getDownloadURL operation
        console.error('Error fetching image URL:', error);
      }
    });

    return res
}

