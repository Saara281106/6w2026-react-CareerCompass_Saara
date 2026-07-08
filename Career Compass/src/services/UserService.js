import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase";
import { Users } from "../models/Users";
const dbPath = "careerPaths";

class CareerPathService {
  async add(Data) {
    const newCareerPath = new Users();
    newCareerPath.name = Data.name;
    newCareerPath.email = Data.email;
    newCareerPath.phone = Data.phone;
    newCareerPath.address = Data.address;
    newCareerPath.profileImage = Data.profileImage;
    newCareerPath.userType = "admin/student";
    const docRef = await addDoc(collection(db, dbPath), {
      ...newCareerPath,
    });
  }
}

export default new CareerPathService();
