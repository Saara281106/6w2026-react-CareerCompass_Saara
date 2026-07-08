import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase";
import { Booking } from "../models/Booking";
const dbPath = "careerPaths";

class CareerPathService {
  async add(Data) {
    const newCareerPath = new Booking();
    newCareerPath.userId = Data.userId;
    newCareerPath.sessionId = Data.sessionId;
    newCareerPath.bookingStatus = "Pending/Approved/Rejected/Completed";
    newCareerPath.adminRemark = Data.pradminRemarkice;
    
    const docRef = await addDoc(collection(db , dbPath), {
      ...newCareerPath
    });
  }
}

export default new CareerPathService()