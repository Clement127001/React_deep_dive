import { user } from "../assets";
const Message = ({ name, message }) => {
  return (
    <div className="flex max-h-[100%] gap-4 w-full mb-4">
      <img src={user} alt={name + "image"} className="w-8 h-8" />
      <div>
        <h3 className="font-sans font-semibold capitalize">{name}</h3>
        <p className="font-sans text-gray-400">{message}</p>
      </div>
    </div>
  );
};

export default Message;
