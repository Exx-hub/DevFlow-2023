import { addDoc, collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../config/firebase-config";
import AddItemForm from "./AddItemForm";
import { HiOutlineCheck, HiOutlineCheckCircle, HiOutlineTrash } from "react-icons/hi";

function CurrentTask() {
  const [currentTask, setCurrentTask] = useState({} as { task?: string; id: string });
  const [currentTaskInput, setCurrentTaskInput] = useState("");
  console.log(currentTask);

  const [loading, setLoading] = useState(false); // better if suspense is used.

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await addDoc(collection(db, "current-task"), { task: currentTaskInput });
    setCurrentTaskInput("");
    console.log("task set");
  };

  const handleDelete = async (id: string) => {
    try {
      const docToDelete = doc(db, "current-task", id);
      await deleteDoc(docToDelete);
      console.log("task deleted");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setLoading(true);

    const unsubscribe = onSnapshot(collection(db, "current-task"), (snapshot) => {
      console.log(snapshot.docs[0]?.data()?.task);

      setCurrentTask({ task: snapshot.docs[0]?.data()?.task, id: snapshot.docs[0]?.id });
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : currentTask.task && currentTask.id ? (
        <div className="flex items-center space-x-1">
          <span className="cursor-pointer" onClick={() => handleDelete(currentTask.id)}>
            <HiOutlineCheckCircle />
          </span>
          <h2 className="font-semibold text-sm md:text-lg">{currentTask.task}</h2>
        </div>
      ) : (
        <AddItemForm
          value={currentTaskInput}
          onChange={setCurrentTaskInput}
          onSubmit={handleSubmit}
          placeholder="Set task..."
        />
      )}
    </div>
  );
}

export default CurrentTask;
