import { getDocs, collection, doc, getDoc } from "firebase/firestore"; 
import { db, storage } from "../../firebase/config";
import productItem from "@/types/globalTypes";
import { getDownloadURL, ref } from "firebase/storage";

const collection_name = "stock"

export const getItem = async ({id}: {id:string}): Promise<productItem | undefined> => {
    
    const docRef = doc(db, collection_name, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    const imageURL = await getDownloadURL(ref(storage, docSnap.data().img));
    const product: productItem = {
        id: id,
        img: imageURL,
        large: docSnap .data().large,
        medium: docSnap.data().medium,
        small: docSnap.data().small,
        'x-large': docSnap.data()['x-large'],
        'x-small': docSnap.data()['x-small'],
        price: docSnap.data().price,
        discount: docSnap.data().discount,
      };
    return product;
    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
        return undefined;
    }

}

