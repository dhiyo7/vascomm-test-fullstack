'use client';

const Heading = ({ label }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-3xl my-4 font-semibold">{label}</div>
    </div>
  );
};

export default Heading;
