const Contact = () => {
  return (
    <div className="h-screen max-w-screen-xl m-auto flex items-center gap-10">
      <div className="flex-1 flex flex-col gap-10">
        <h1 className="text-7xl font-bold">Let's Work Together</h1>
        <div className="">
          <h2 className="font-bold">Mail</h2>
          <span>vedantyede@gmail.com</span>
        </div>
        <div className="">
          <h2 className="font-bold">Address</h2>
          <span>Gondia, Maharashtra - 441614</span>
        </div>
        <div className="">
          <h2 className="font-bold">Phone</h2>
          <span>+91 9604065882</span>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-10">
        <form className="flex flex-col">
          <input className="p-5 bg-transparent border text-white rounded-md m-2" type="text" placeholder="Name" required />
          <input className="p-5 bg-transparent border text-white rounded-md m-2" type="email" placeholder="Email" required />
          <textarea className="p-5 bg-transparent border text-white rounded-md m-2" rows={8} placeholder="Message"></textarea>
          <button className="bg-orange-500 border-none rounded-lg w-48 text-black m-2 p-2 cursor-pointer font-semibold">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
