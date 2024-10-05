import { useState } from "react";
import ReviewItem from "./ReviewItem";
//connect this to db and dave the reviews in db
export default function Review() {
    const [review, setReview] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        const reviewText = event.target.review.value; 
        setReview(prevItems => (
            [reviewText, ...prevItems] 
        ));
        event.target.review.value = ''; 
    }

    return (
      <>
        <div className="p-4 mx-auto bg-white rounded-lg shadow-md max-w-4xl sm:p-6 grid grid-cols-1 lg:grid-cols-6 gap-6">
          <div className="lg:col-span-4 col-span-1">
            <form onSubmit={handleSubmit} className="space-y-4" dir="rtl">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                כאן אפשר לכתוב מה דעתך על המוצרים שלנו
              </h2>
              <div className="flex justify-start items-center space-x-1 mb-4">
                <input type="radio" id="5-stars" name="rating" value="5" className="hidden" />
                <label htmlFor="5-stars" className="text-yellow-400 text-2xl cursor-pointer hover:scale-110">★</label>
  
                <input type="radio" id="4-stars" name="rating" value="4" className="hidden" />
                <label htmlFor="4-stars" className="text-yellow-400 text-2xl cursor-pointer hover:scale-110">★</label>
  
                <input type="radio" id="3-stars" name="rating" value="3" className="hidden" />
                <label htmlFor="3-stars" className="text-yellow-400 text-2xl cursor-pointer hover:scale-110">★</label>
  
                <input type="radio" id="2-stars" name="rating" value="2" className="hidden" />
                <label htmlFor="2-stars" className="text-yellow-400 text-2xl cursor-pointer hover:scale-110">★</label>
  
                <input type="radio" id="1-star" name="rating" value="1" className="hidden" />
                <label htmlFor="1-star" className="text-yellow-400 text-2xl cursor-pointer hover:scale-110">★</label>
              </div>
  
              <textarea
                id="review"
                name="review" 
                rows="4"
                required
                className="block w-full p-3 text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="תקליד/י כאן"
              ></textarea>
  
              <div className="text-right py-4">
                <button
                  type="submit"
                  className="text-white bg-stone-600 hover:bg-stone-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-3"
                >
                  לחץ כאן על מנת לפרסם
                </button>
              </div>
            </form>
          </div>
        </div>
        <div>
        {review.map((r, index) => (
                <ReviewItem key={index} text={r} >
                </ReviewItem>
            ))}
        </div>

        
      </>
    );
}
