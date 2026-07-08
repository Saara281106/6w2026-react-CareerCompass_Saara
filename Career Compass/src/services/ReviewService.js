import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase";
import { Review } from "../models/Review";
const dbPath = "careerPaths";

class CareerPathService {
  async add(Data) {
    const newCareerPath = new Review();
    newCareerPath.userId = Data.userId;
    newCareerPath.sessionId = Data.sessionId;
    newCareerPath.rating = Data.rating;
    newCareerPath.review = Data.review;
    const docRef = await addDoc(collection(db , dbPath), {
      ...newCareerPath
    });
  }
}

export default new CareerPathService()