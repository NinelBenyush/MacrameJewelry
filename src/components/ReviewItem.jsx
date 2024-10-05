
export default function ReviewItem({text}){
    return (
        <>
        <div className="flex grid-flow-row p-4 bg-white shadow-md rounded-lg my-4 border border-gray-200">
        <ul className="flex flex-col gap-1">
          <li className="text-sm text-stone-700">
            {text}
          </li>
        </ul>
      </div>
      
      </>
    )
}