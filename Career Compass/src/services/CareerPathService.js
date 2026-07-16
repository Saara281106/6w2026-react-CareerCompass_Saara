import { collection, addDoc, getDoc, getDocs } from "firebase/firestore";
import { CareerPath } from "../models/CareerPath";
import { db } from "../Firebase";
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
    return CareerPath;
  }

  async all(){
    const querySnapshot = await getDocs(collection(db , dbPath));
    var careerPath = []
    querySnapshot.forEach((doc) => {
      careerPath.push({ id: doc.id, ...doc.data()})
    });
    return careerPath;
  }
}

export default new CareerPathService();
