export const ContactForm = () => {
  return (
    <div className='max-w-lg mx-auto bg-transparent p-6 w-1/2 pt-16'>
      <h2 className='text-2xl font-bold text-center mb-6'>
        More Questions?
        <br /> Send us a Message!
      </h2>
      <form className='flex flex-col items-center justify-center w-full'>
        <InputField type='text' placeholder='Name' />
        <InputField type='email' placeholder='Email' />
        <InputField type='text' placeholder='Message' rows={5} />
        <Button label='Send' />
      </form>
    </div>
  );
};

const Button = ({ label }: { label: string }) => {
  return (
    <button onClick={(e)=>{e.preventDefault()}} className='px-14 bg-brand-dark-red text-white py-1 rounded-xl font-bold hover:bg-red-600 transition duration-100'>
      {label}
    </button>
  );
};

const InputField = ({
  type = "text",
  placeholder = "",
  rows,
}: {
  type: string;
  placeholder: string;
  rows?: number;
}) => {
  return (
    <div className='mb-4 w-full'>
      {rows ? (
        <textarea
          className='w-full text-black p-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black bg-transparent'
          placeholder={placeholder}
          rows={rows}
        />
      ) : (
        <input
          type={type}
          className='w-full text-black p-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black bg-transparent '
          placeholder={placeholder}
        />
      )}
    </div>
  );
};
