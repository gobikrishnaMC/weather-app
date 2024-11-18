export default function PlaceHolderCard({ mainHeading, SubHeading }) {
  return (
    <>
      <div className="block max-w-md p-6 mt-10 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {mainHeading}
        </h5>
        <p className="font-normal text-gray-700">{SubHeading}</p>
      </div>
    </>
  );
}
