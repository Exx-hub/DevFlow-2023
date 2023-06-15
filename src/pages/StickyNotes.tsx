import { useState } from "react";
import AddItemForm from "../components/AddItemForm";
import { HiOutlineTrash } from "react-icons/hi";

function StickyNotes() {
  const [todos, setTodos] = useState([] as { text: string }[]);
  const [input, setInput] = useState("");

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
      console.log({ todo: input });
      setTodos([...todos, { text: input }]);
    } catch (error) {
      console.log(error);
    }
  };

  const getClassName = (index: number) => {
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
      <div className="w-full lg:w-[80%] max-w-2xl  mx-auto p-8 rounded-md bg-gray-100 shadow-[0px_0px_20px_rgba(0,0,0,0.055)]">
        <h2 className="text-xl lg:text-2xl font-bold mb-2 black_gradient animate-slide-from-top">
          Sticky Notes
        </h2>
        {todos.length ? (
          <div className="grid-container">
            {todos.map((todo, i) => (
              <div key={i} className={`${getClassName(i)} todo-card relative`}>
                <p>{todo.text}</p>
                <div className="cursor-pointer text-gray-500 text-sm absolute bottom-1 right-1">
                  <HiOutlineTrash />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h4>No notes posted. Add a new one!</h4>
        )}

        {todos.length < 6 ? (
          <AddItemForm value={input} onChange={setInput} onSubmit={handleSubmit} />
        ) : null}
      </div>
    </div>
  );
}

export default StickyNotes;
