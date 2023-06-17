import { useEffect, useState } from "react";
import AddItemForm from "../components/AddItemForm";
import { HiOutlineTrash } from "react-icons/hi";
import { addDoc, collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { getMissingOrdinal } from "../helpers/getMissingOrdinal";

interface Note {
  text?: string;
  ordinal?: number;
  id: string;
}

function StickyNotes() {
  const [todos, setTodos] = useState([] as Note[]);
  const [input, setInput] = useState("");

  const [currentOrdinals, setCurrentOrdinals] = useState<(number | undefined)[]>([]);

  const ordinalToAdd = getMissingOrdinal(currentOrdinals);

  console.log(ordinalToAdd);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "notes"), (snapshot) => {
      const notes: Note[] = snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });

      setTodos(notes);

      const numbers = notes.map((note) => note.ordinal);

      setCurrentOrdinals(numbers);
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input) {
      console.log("please enter an input");
      return;
    } else if (todos.length === 6) {
      console.log("Delete one first");
      return;
    }

    try {
      await addDoc(collection(db, "notes"), { text: input, ordinal: ordinalToAdd });
      console.log("added note");
      setInput("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id: string) => {
    const noteToDelete = doc(db, "notes", id);

    try {
      await deleteDoc(noteToDelete);
      console.log("note deleted");
    } catch (error) {
      console.log(error);
    }
  };

  const getClassName = (index: number | undefined) => {
    switch (index) {
      case 0:
        return "first";
      case 1:
        return "second";
      case 2:
        return "third";
      case 3:
        return "fourth";
      case 4:
        return "fifth";
      case 5:
        return "sixth";
    }
  };

  return (
    <div className="w-full h-[calc(100vh-58px)] pt-10 xl:pt-20 2xl:pt-32 animate-fadeIn">
      <div className="w-full lg:w-[80%] max-w-3xl  mx-auto p-8 rounded-md bg-gray-100 shadow-[0px_0px_20px_rgba(0,0,0,0.055)]">
        <h2 className="text-xl lg:text-2xl font-bold mb-2 black_gradient animate-slide-from-top">
          Sticky Notes
        </h2>
        {todos.length > 0 ? (
          <div className="grid-container">
            {todos.map((todo) => (
              <div key={todo.id} className={`${getClassName(todo.ordinal)} todo-card relative`}>
                <p>{todo.text}</p>
                <div
                  className="cursor-pointer text-gray-500 text-sm absolute bottom-1 right-1"
                  onClick={() => handleDelete(todo.id)}
                >
                  <HiOutlineTrash />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h4>No notes posted. Add a new one!</h4>
        )}

        {todos.length < 6 ? (
          <AddItemForm
            value={input}
            onChange={setInput}
            onSubmit={handleSubmit}
            placeholder="Add a sticky..."
          />
        ) : null}
      </div>
    </div>
  );
}

export default StickyNotes;
