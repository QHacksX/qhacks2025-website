export default function FormHeader({
  title,
  subheader,
}: {
  title: string;
  subheader: string;
}) {
  return (
    <div className='border rounded-lg bg-orange-50 p-2'>
      <div className='flex justify-center font-semibold text-lg text-black pb-2'>
        {title}
      </div>
      <div className='flex justify-center font-semibold text-md text-gray-500'>
        {subheader}
      </div>
    </div>
  );
}
