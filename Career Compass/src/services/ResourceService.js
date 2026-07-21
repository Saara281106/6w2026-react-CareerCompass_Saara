import { collection, addDoc, getDocs, getDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../Firebase";
import { Resource } from "../models/Resource";
import { toast } from "react-toastify";
const dbPath = "careerPaths";

class ResourceService {
  async add(Data) {
    const newResource = new Resource();
    newResource.title = Data.title;
    newResource.description = Data.description;
    newResource.resourceType = Data.resourceType;
    newResource.resourceUrl = Data.resourceUrl;

    const docRef = await addDoc(collection(db, dbPath), {
      ...newResource,
    });
  }

  async all() {
    const querySnapshot = await getDocs(collection(db, dbPath));
    var resource = [];
    querySnapshot.forEach((doc) => {
      resource.push({ id: doc.id, ...doc.data() });
    });
    return resource;
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
    const resourceRef = doc(db, dbPath, id);
    return await updateDoc(resourceRef, payload);
  }

  async delete(id) {
    return await deleteDoc(doc(db, dbPath, id));
  }
}

export default new ResourceService();
