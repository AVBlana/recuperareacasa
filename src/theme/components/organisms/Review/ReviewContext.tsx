// ReviewContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";

interface ReviewContextProps {
  reviews: any[];
  addReview: (review: any) => void;
}

const ReviewContext = createContext<ReviewContextProps | undefined>(undefined);

export const ReviewProvider = ({ children }: { children: React.ReactNode }) => {
  // Function to initialize the state
  const initializeState = () => {
    // Check if localStorage is available
    if (typeof window !== "undefined") {
      // Initialize reviews state with data from localStorage or an empty array
      const storedReviews = localStorage.getItem("reviews");
      return storedReviews ? JSON.parse(storedReviews) : [];
    } else {
      // If localStorage is not available (e.g., during SSR), return an empty array
      return [];
    }
  };

  const [reviews, setReviews] = useState<any[]>(initializeState);

  const addReview = (review: any) => {
    setReviews([...reviews, review]);
  };

  // useEffect(() => {
  //   // Save reviews to localStorage whenever the reviews state changes
  //   if (typeof window !== "undefined") {
  //     localStorage.setItem("reviews", JSON.stringify(reviews));
  //   }
  // }, [reviews]);

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
