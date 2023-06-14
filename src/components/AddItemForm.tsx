import { HiOutlineCheckCircle, HiOutlineXCircle } from "react-icons/hi";

interface AddItemFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  onCancel: () => void;
  value: string;
}

function AddItemForm({ onSubmit, onChange, onCancel, value }: AddItemFormProps) {
  return (
    <form onSubmit={onSubmit} className="flex items-center space-x-1 mt-2 animate-fadeIn">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border border-gray-200 rounded outline-none px-2 text-black text-xs md:text-sm lg:text-lg"
        placeholder="Add a goal..."
      />
      <button className="text-[#8d839c] text-lg" type="submit">
        <HiOutlineCheckCircle />
      </button>
      <button className="text-[#8d839c] text-lg" type="button" onClick={onCancel}>
        <HiOutlineXCircle />
      </button>
    </form>
  );
}

export default AddItemForm;
