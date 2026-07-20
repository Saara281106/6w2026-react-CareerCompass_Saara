import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase";
import { MentorshipSession } from "../models/MentorshipSession";
const dbPath = "mentorshipSession";

class MentorshipSessionService {
  async add(Data) {
    const newMentorshipSession = new MentorshipSession();
    newMentorshipSession.title = Data.title;
    newMentorshipSession.description = Data.description;
    newMentorshipSession.mentorName = Data.mentorName;
    newMentorshipSession.sessionStatus = Data.sessionStatus;
    newMentorshipSession.sessionDate = Data.sessionDate;
    newMentorshipSession.sessionTime = Data.sessionTime;
    newMentorshipSession.duration = Data.duration;
    newMentorshipSession.meetingLink = Data.meetingLink;

    const docRef = await addDoc(collection(db, dbPath), {
      ...newMentorshipSession,
    });
    return newMentorshipSession;
  }

  async all() {
    const querySnapshot = await getDocs(collection(db, dbPath));
    var mentorshipSession = [];
    querySnapshot.forEach((doc) => {
      mentorshipSession.push({ id: doc.id, ...doc.data() });
    });
    return mentorshipSession;
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
    const mentorshipSessionRef = doc(db, dbPath, id);
    return await updateDoc(mentorshipSessionRef, payload);
  }

  async delete(id) {
    return await deleteDoc(doc(db, dbPath, id));
  }
}

export default new MentorshipSessionService();
