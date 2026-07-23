import { setDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../Firebase";
import { Users } from "../models/Users";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "react-toastify";
import AuthService from "./AuthService";
const dbPath = "users";

class UserService {
  async register(data) {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password,
    );

    const newUser = new Users();
    newUser.userType = "student";
    newUser.name = data.name;
    newUser.email = data.email;
    newUser.phone = data.phone;
    newUser.address = data.address;
    newUser.uid = userCredential.user.uid;
    // newCareerPath.profileImage = Data.profileImage;
    const docRef = await setDoc(doc(db, dbPath, userCredential.user.uid), {
      ...newUser,
    });
    return newUser;
  }

  async login(data) {
    let userCredential = await signInWithEmailAndPassword(
      auth,
      data.email,
      data.password,
    );
    const docRef = doc(db, dbPath, userCredential.user.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      let user = docSnap.data();
      let authData = {
        name: user.name,
        email: user.email,
        uid: user.uid,
        userType: user.userType,
      };
      AuthService.setData(authData);
      return user;
    } else {
      toast.error("No such document");
      console.log("No such document");
      return false;
    }
  }

  async single(id) {
    const docRef = doc(db, dbPath, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return false;
    }
  }

  async update(id, data) {
    const docRef = doc(db, dbPath, id);
    await updateDoc(docRef, data);
    return true;
  }
}

export default new UserService();
