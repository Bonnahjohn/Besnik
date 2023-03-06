const Button = (props) => {
  return (
    <>
      <div className="flex justify-evenly ">
        <button
          type="button"
          className="bg-transparent  text-red-500 ring-1 py-2 px-2 rounded-full ring-red-500 mr-4"
        >
          {props.children}
        </button>
        <button
          type="button"
          className="bg-transparent  text-red-500 ring-1 py-2 px-2 rounded-full ring-red-500"
        >
          {props.children}
        </button>
      </div>
    </>
  );
};

export default Button;
