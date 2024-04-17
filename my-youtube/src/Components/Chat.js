import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Message from "./Message";
import { addMessage, toggleMessage } from "../utils/Store/chatSlice";
import { chatArray } from "../utils/constants";
import { arrowDown, arrowUp } from "../assets";

const Chat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const { messages } = useSelector((store) => store.chat);

  const [showMessages, setShowMessages] = useState(false);

  const dispatch = useDispatch();

  const inputChangeHandler = (e) => {
    setLiveMessage(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setLiveMessage(e.target.message.value);
    dispatch(
      addMessage({
        name: "clement",
        message: e.target.message.value,
      })
    );

    setLiveMessage("");
  };

  const toggleMessage = () => {
    setShowMessages((prev) => !prev);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const rand = Math.floor(Math.random() * 50);
      dispatch(
        addMessage({
          name: chatArray[rand].name,
          message: chatArray[rand].message,
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={` ${
        showMessages ? "min-h-[600px]" : "min-h-[140px]"
      } w-full   border-[2.5px] border-gray-300 mb-8 rounded-lg overflow-hidden`}
    >
      <div className="w-full py-2 bg-gray-100 flex justify-center gap-[6rem] shadow-md items-center">
        <h1 className="font-sans font-semibold text-lg">Live Chat</h1>

        {showMessages ? (
          <img
            src={arrowDown}
            alt="hide messages"
            width={28}
            height={24}
            onClick={toggleMessage}
          />
        ) : (
          <img
            src={arrowUp}
            alt="show messages"
            width={28}
            height={24}
            onClick={toggleMessage}
          />
        )}

        <img />
      </div>

      <div
        className={`my-4 mx-6  ${
          showMessages ? "h-[460px]" : "h-[0px]"
        } overflow-scroll overflow-y-scroll flex flex-col-reverse`}
      >
        <div>
          {messages &&
            showMessages &&
            messages.length > 0 &&
            messages.map((item, index) => (
              <Message
                key={item.name + " " + index}
                name={item.name}
                message={item.message}
              />
            ))}
        </div>
      </div>

      <form className="mx-4 flex gap-4" onSubmit={formSubmitHandler}>
        <input
          placeholder="share your thoughts"
          className="py-2 px-4 min-w-[75%] border-2 border-gray-200 rounded-lg outline-red-200"
          value={liveMessage}
          onChange={inputChangeHandler}
          name="message"
        />
        <button className="font-sans py-2 px-4 bg-black text-white rounded-lg">
          Share
        </button>
      </form>
    </div>
  );
};

export default Chat;
