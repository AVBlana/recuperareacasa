// ReviewContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";

interface ReviewContextProps {
  reviews: any[];
  addReview: (review: any) => void;
}

const ReviewContext = createContext<ReviewContextProps | undefined>(undefined);

export const ReviewProvider = ({ children }: { children: React.ReactNode }) => {
  const [reviews, setReviews] = useState<any[]>([]);

  const addReview = (review: any) => {
    setReviews([...reviews, review]);
  };

  useEffect(() => {
    // Save reviews to localStorage
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  return (
    <ReviewContext.Provider value={{ reviews, addReview }}>
      {children}
    </ReviewContext.Provider>
  );
};

export const useReviewContext = () => {
  const context = useContext(ReviewContext);

  if (!context) {
    throw new Error("useReviewContext must be used within a ReviewProvider");
  }

  return context;
};
