import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase";
import { MentorshipSession } from "../models/MentorshipSession";
const dbPath = "careerPaths";

class CareerPathService {
  async add(Data) {
    const newCareerPath = new MentorshipSession();
    newCareerPath.title = Data.title;
    newCareerPath.description = Data.description;
    newCareerPath.mentorName = Data.mentorName;
    newCareerPath.sessionStatus = "Available/Completed/Cancelled";
    newCareerPath.sessionDate = Data.sessionDate;
    newCareerPath.sessionTime = Data.sessionTime;
    newCareerPath.duration = Data.duration;
    newCareerPath.meetingLink = Data.meetingLink;
    
    const docRef = await addDoc(collection(db , dbPath), {
      ...newCareerPath
    });
  }
}

export default new CareerPathService()