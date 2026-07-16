import {collection,addDoc,getDoc,getDocs,doc,updateDoc,deleteDoc,} from "firebase/firestore";
import { CareerPath } from "../models/CareerPath";
import { db } from "../Firebase";
import { toast } from "react-toastify";
const dbPath = "careerPaths";

class CareerPathService {
  async add(Data) {
    const newCareerPath = new CareerPath();
    newCareerPath.name = Data.name;
    newCareerPath.description = Data.description;
    newCareerPath.programType = Data.programType;

    // newCareerPath.imageUrl = Data.imageUrl;
    if (Data.programType === "Paid") {
      newCareerPath.price = Data.price;
    }

    const docRef = await addDoc(collection(db, dbPath), {
      ...newCareerPath,
    });
    return newCareerPath;
  }

  async all() {
    const querySnapshot = await getDocs(collection(db, dbPath));
    var careerPath = [];
    querySnapshot.forEach((doc) => {
      careerPath.push({ id: doc.id, ...doc.data() });
    });
    return careerPath;
  }

  async single(id) {
    const docRef = doc(db, dbPath, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      toast.error("no such document!");
      console.log("no such document!");
      return false;
    }
  }

  async update(id, payload) {
    const careerPathRef = doc(db, dbPath, id);
    return await updateDoc(careerPathRef, payload);
  }

  async delete(id) {
    return await deleteDoc(doc(db, dbPath, id));
  }
}

export default new CareerPathService();
