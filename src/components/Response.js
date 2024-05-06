import { useSelector } from "react-redux";

const style = {
  userMes: `flex flex-col w-full h-fit justify-end items-end`,
  resMes: `flex flex-col w-full h-fit justify-end items-start`,
};

const Response = ({ item, index }) => {
  const { responses } = useSelector((state) => state.responseData);
  //   console.log(responses);
  return (
    <>
      {responses.map((item, index) => {
        return (
          <div
            key={index}
            className={item.type === "user" ? style.userMes : style.resMes}
          >
            <div
              key={index}
              className="response-recieved m-2 w-fit h-fit p-5 bg-gray-500"
            >
              <p>{item.text}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Response;
