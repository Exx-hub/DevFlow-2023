import { useEffect, useState } from "react";
import { HiOutlinePlusCircle, HiOutlineTrash } from "react-icons/hi";
import AddItemForm from "../components/AddItemForm";
import { addDoc, collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../config/firebase-config";
import useTitle from "../hooks/useTitle";

interface Goal {
  id: string;
  title?: string;
  type?: string;
}

const Goals = () => {
  const [currentDisplay, setCurrentDisplay] = useState<"career" | "life">("career");
  const [isAdding, setisAdding] = useState(false);
  const [input, setInput] = useState("");
  const [goals, setGoals] = useState<Goal[] | null>([]);

  useTitle("DevFlow AI - Goals");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isAdding || !input) {
      console.log("please enter an input");
      return;
    }

    try {
      await addDoc(collection(db, "goals"), { title: input, type: currentDisplay });
      console.log("new goal added");

      console.log({ input, submittedBy: currentDisplay });
      setInput("");
      setisAdding(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleCancel = () => {
    setisAdding(false);
    setInput("");
  };

  useEffect(() => {
    console.log(`fetching goals for ${currentDisplay}`);

    setGoals(null);

    // GET DOCS - if you need data once!
    // const getGoals = async () => {
    //   const data = await getDocs(collection(db, "goals"));

    //   const parsedData: Goal[] = data.docs.map((doc) => {
    //     return { ...doc.data(), id: doc.id };
    //   });

    //   const filteredGoals = parsedData.filter((goal) => goal.type === currentDisplay);
    //   setGoals(filteredGoals);
    // };

    // getGoals();

    // SNAP SHOT IF YOU NEED IT TO UPDATE
    const unsubscribe = onSnapshot(collection(db, "goals"), (snapshot) => {
      const parsedData: Goal[] = snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      const filteredGoals = parsedData.filter((goal) => goal.type === currentDisplay);
      setGoals(filteredGoals);
    });

    return () => unsubscribe();
  }, [currentDisplay]);

  const deleteGoal = async (id: string) => {
    try {
      const docToDelete = doc(db, "goals", id);
      await deleteDoc(docToDelete);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-[calc(100vh-58px)] pt-20 xl:pt-32 animate-fadeIn">
      <div className="w-full lg:w-[60%] mx-auto">
        <div className="flex space-x-4 translate-x-5">
          <button
            className={`tab  ${
              currentDisplay === "career"
                ? "bg-gray-100 border-t-[3px] border-[#333]"
                : "bg-[#333] text-white"
            }`}
            onClick={() => {
              setInput("");
              setisAdding(false);
              setCurrentDisplay("career");
            }}
          >
            Career Goals
          </button>
          <button
            className={`tab  ${
              currentDisplay === "life"
                ? "bg-gray-100 border-t-[3px] border-[#333]"
                : "bg-[#333] text-white"
            }`}
            onClick={() => {
              setInput("");
              setisAdding(false);
              setCurrentDisplay("life");
            }}
          >
            Life Goals
          </button>
        </div>

        <div className="p-4 bg-gray-100 shadow-lg rounded">
          {currentDisplay === "career" ? (
            <div className="flex flex-col">
              <h2 className="text-xl lg:text-2xl font-bold mb-2 black_gradient animate-slide-from-top">
                Daily Grind.
              </h2>
              <ul className="px-1">
                {goals?.map((goal) => (
                  <div key={goal.id} className="flex items-center space-x-1 mb-1">
                    <h2 className="text-xs md:text-sm lg:text-lg">{goal.title}</h2>
                    <span
                      onClick={() => deleteGoal(goal.id)}
                      className="cursor-pointer text-[#5b5861] text-sm lg:text-lg"
                    >
                      <HiOutlineTrash />
                    </span>
                  </div>
                ))}
              </ul>
              {isAdding ? (
                <AddItemForm
                  onSubmit={handleSubmit}
                  onCancel={handleCancel}
                  onChange={setInput}
                  value={input}
                  forGoals
                  placeholder="Add a goal..."
                />
              ) : (
                <button
                  onClick={() => setisAdding(true)}
                  className="self-end text-2xl text-[#8d839c] hover:scale-[1.15] transition-all duration-300"
                >
                  <HiOutlinePlusCircle />
                </button>
              )}
            </div>
          ) : (
            <div className="flex flex-col">
              <h2 className="text-xl lg:text-2xl font-bold mb-2 black_gradient animate-fadeIn">
                Closer today.
              </h2>
              <ul className="px-1 animate-fadeIn">
                {goals?.map((goal) => (
                  <div key={goal.id} className="flex items-center space-x-1 mb-1">
                    <h2 className="text-xs md:text-sm lg:text-lg">{goal.title}</h2>
                    <span
                      onClick={() => deleteGoal(goal.id)}
                      className="cursor-pointer text-[#5b5861] text-sm lg:text-lg"
                    >
                      <HiOutlineTrash />
                    </span>
                  </div>
                ))}
              </ul>
              {isAdding ? (
                <AddItemForm
                  onSubmit={handleSubmit}
                  onCancel={handleCancel}
                  onChange={setInput}
                  value={input}
                  forGoals
                  placeholder="Add a goal..."
                />
              ) : (
                <button
                  onClick={() => setisAdding(true)}
                  className="self-end text-2xl text-[#8d839c] hover:scale-[1.15] transition-all duration-300"
                >
                  <HiOutlinePlusCircle />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Goals;
