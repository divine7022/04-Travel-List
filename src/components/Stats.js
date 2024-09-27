export default function Stats({ item }) {
  if (!item.length)
    return (
      <p className="stats">
        <em>Start addding some items to your packing list 🚀</em>
      </p>
    );

  const numItems = item.length;
  const numPacked = item.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️ "
          : `💼 You have ${numItems} items on your list, and you alredy packed
        ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
