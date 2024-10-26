import { motion } from "framer-motion";

export const ContactForm = () => {
  return (
    <div
      className='mx-auto bg-transparent p-6 sm:w-1/2 w-3/4 pt-16 z-20 flex flex-col justify-center items-center'
      id='contact'
    >
      <h2 className='font-bold text-center my-6 title '>
        More Questions?
      </h2>
      <motion.a
        className='w-3/5 p-3 mt-4 font-bold text-xl text-white bg-red-500 rounded-full z-20 text-center'
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
        href="mailto:hello@qhacks.io"
      >
        Send us a Message!
      </motion.a>
    </div>
  );
};

const Button = ({ label }: { label: string }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
      }}
      className='px-14 bg-brand-dark-red text-white py-1 rounded-xl font-bold hover:bg-red-600 transition duration-100'
    >
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
