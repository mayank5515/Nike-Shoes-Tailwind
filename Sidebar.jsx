export default function Sidebar({ children, isOpen, onClickClose }) {
  // console.log("isOPen in sidebar", isOpen);
  return (
    <div>
      <div
        className={` dark:bg-night  overflow-y-auto  no-scrollbar p-5 fixed h-full w-full  md:w-[50%] lg:w-[30%] top-0 right-0 z-50 shadow-lg bg-white transform transition ease-in-out delay-200 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          onClick={onClickClose}
          className="absolute right-4 top-4 p-2 font-bold  dark:text-white"
        >
          X
        </button>
        {children}
      </div>
      {isOpen && (
        <div className="w-full h-full top-0 left-0 fixed  bg-black opacity-50 z-20"></div>
      )}
    </div>
  );
}
