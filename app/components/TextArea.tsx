interface InputProps {
    placeholder?: string;
    value?: string;
    disabled?: boolean;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    label?: string;
  }
  
  const TextArea: React.FC<InputProps> = ({ placeholder, value,  onChange, disabled, label }) => {
    return (
      <div className="w-full">
        {label && <p className="text-xl text-white font-semibold mb-2">{label}</p>}
        <textarea
          disabled={disabled}
            onChange={onChange}
            
          value={value}
          placeholder={placeholder}
       
          className="
            w-full
            p-4 
            text-lg 
            bg-white
            border-2
            border-gray-300 
            rounded-md
            outline-none
            text-black
            focus:border-sky-500
            focus:border-2
            transition
            disabled:bg-neutral-900
            disabled:opacity-70
            disabled:cursor-not-allowed
          "
        
        />
      </div>
     );
  }
   
  export default TextArea;