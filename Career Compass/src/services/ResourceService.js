import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase";
import { Resource } from "../models/Resource";
const dbPath = "careerPaths";

class CareerPathService {
  async add(Data) {
    const newCareerPath = new Resource();
    newCareerPath.title = Data.title;
    newCareerPath.description = Data.description;
    newCareerPath.resourceType = "PDF/Link/Video/Notes";
    newCareerPath.resourceUrl = Data.resourceUrl;
    
    const docRef = await addDoc(collection(db , dbPath), {
      ...newCareerPath
    });
  }
}

export default new CareerPathService()