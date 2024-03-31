export default function Card({ item, onClickCard }) {
  return (
    <div
      onClick={() => onClickCard(item)}
      className={`${item.className} select-none max-w-xl transform transition hover:scale-105 cursor-pointer`}
    >
      <div className="p-8">
        <div className="text-2xl font-bold">{item.title}</div>
        <div className="mt-10 font-semibold underline underline-offset-4">
          SHOP NOW+
        </div>
      </div>
      <img className="w-56 h-40 absolute left-[40%] top-5" src={item.src} />
    </div>
  );
}
