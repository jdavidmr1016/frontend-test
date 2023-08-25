export const Draft = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <textarea
        name="Chat"
        id="chat"
        className="w-full  overflow-x-auto outline-none p-2"
      ></textarea>
    </>
  );
};
