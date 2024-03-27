// ReviewForm.tsx
import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import Box from "../../atoms/Box";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import { Text, TextArea } from "../..";
import { useReviewContext } from "../../organisms/Review/ReviewContext";
import { StarIcon } from "../Icons/StarIcon";

interface ReviewFormProps {
  onSubmit: (review: any) => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ onSubmit }) => {
  const theme = useTheme();
  const { reviews, addReview } = useReviewContext();
  const [formData, setFormData] = useState({
    rating: 0,
    text: "",
    reviewer: "",
    title: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Function to handle user click on stars
  const handleRatingChange = (newRating: number) => {
    setFormData((prevData) => ({ ...prevData, rating: newRating }));
  };

  const handleReviewSubmit = async () => {
    try {
      const apiUrl = "/api/sendReviewMail";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        onSubmit(response.formData);
        console.log("Email sent successfully!");
      } else {
        console.error("Failed to send email.");
      }
    } catch (error: any) {
      console.error("Error sending email:", error.message);
    }
  };

  return (
    <StyledReviewForm>
      <form
        onSubmit={handleReviewSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: theme.media.isMobile ? 20 : 60,
          alignItems: theme.media.isMobile ? "normal" : "center",
          flex: 1,
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <StyledRatingInput>
            {[1, 2, 3, 4, 5].map((index) => (
              <StarIcon
                size={20}
                key={index}
                onClick={() => handleRatingChange(index)}
                filled={index <= formData.rating}
              />
            ))}
          </StyledRatingInput>

          <TextArea
            id="reviewFormMessage"
            placeholder="Mesajul tau aici ..."
            value={formData.text}
            onChange={(value) =>
              handleChange({
                target: { name: "text", value },
              } as React.ChangeEvent<HTMLTextAreaElement>)
            }
          ></TextArea>

          <Input
            id="reviewFormReviewer"
            placeholder="Nume:"
            type="text"
            name="reviewer"
            value={formData.reviewer}
            onChange={handleChange}
          />

          <Input
            id="reviewFormTitle"
            placeholder="Ocupație:"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </Box>
        <FormButton onClick={handleReviewSubmit}>Postează</FormButton>
      </form>
    </StyledReviewForm>
  );
};

const FormButton = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacings.tiny}px;
  align-items: center;
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.secondary};
  padding-top: ${({ theme }) =>
    theme.media.isMobile ? theme.spacings.tiny : theme.spacings.small}px;
  padding-bottom: ${({ theme }) =>
    theme.media.isMobile ? theme.spacings.tiny : theme.spacings.small}px;
  padding-left: ${({ theme }) =>
    theme.media.isMobile ? theme.spacings.medium : theme.spacings.medium}px;
  padding-right: ${({ theme }) =>
    theme.media.isMobile ? theme.spacings.medium : theme.spacings.medium}px;
  border-radius: 20px;
  cursor: pointer;
  border-style: solid;
  border-color: ${({ theme }) => theme.color.secondary};
  transition: transform 0.3s ease;
  max-width: fit-content;
  font-size: ${({ theme }) =>
    theme.media.isMobile ? theme.text.small : theme.text.medium}px;

  &:hover {
    background: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.secondary};
    border-color: ${({ theme }) => theme.color.secondary};
    transform: scale(1.1);
    svg {
      fill: ${({ theme }) => theme.color.secondary};
    }
  }
`;

const StyledRatingInput = styled.div`
  display: flex;
  gap: 5px;
  justify-content: ${({ theme }) =>
    theme.media.isMobile ? "normal" : "center"};
  // padding: 10px;
  // border-style: solid;
  // border-width: 2px;
  // border-color: white;
  // border-radius: 10px;
  align-items: center;
`;

const StyledReviewForm = styled.div`
  display: flex;
`;

export default ReviewForm;
