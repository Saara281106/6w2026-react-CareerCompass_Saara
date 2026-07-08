import { collection, addDoc } from "firebase/firestore";
import { CareerPath } from "../models/CareerPath";
import { db } from "../Firebase";
const dbPath = "careerPaths";

class CareerPathService {
  async add(Data) {
    const newCareerPath = new CareerPath();
    newCareerPath.name = Data.name;
    newCareerPath.description = Data.description;
    newCareerPath.programType = Data.programType;
    newCareerPath.price = Data.price;
    newCareerPath.imageUrl = Data.imageUrl;
    
    const docRef = await addDoc(collection(db , dbPath), {
      ...newCareerPath
    });
  }
}

export default new CareerPathService()