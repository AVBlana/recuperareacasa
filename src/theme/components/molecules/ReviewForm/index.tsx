// ReviewForm.tsx
import React, { useState } from "react";
import styled from "styled-components";
import Box from "../../atoms/Box";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import { Text, TextArea } from "../..";
import { useReviewContext } from "../../organisms/Review/ReviewContext";

interface ReviewFormProps {
  onSubmit: (review: any) => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ onSubmit }) => {
  const { reviews, addReview } = useReviewContext();
  const [formData, setFormData] = useState({
    rating: "",
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
        style={{ display: "flex", flexDirection: "column", gap: 20 }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <Input
            id="reviewFormRating"
            placeholder="Rating de la 1 la 5"
            type="text"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
          />

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

const StyledFormText = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.color.white};
  fontsize: ${({ theme }) =>
    theme.media.isMobile ? theme.text.small : theme.text.medium};
`;

const FormButton = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacings.tiny}px;
  align-items: center;
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.secondary};
  padding-top: ${({ theme }) =>
    theme.media.isMobile ? theme.spacings.tiny : theme.spacings.medium}px;
  padding-bottom: ${({ theme }) =>
    theme.media.isMobile ? theme.spacings.tiny : theme.spacings.medium}px;
  padding-left: ${({ theme }) =>
    theme.media.isMobile ? theme.spacings.medium : theme.spacings.bigger}px;
  padding-right: ${({ theme }) =>
    theme.media.isMobile ? theme.spacings.medium : theme.spacings.bigger}px;
  border-radius: 20px;
  cursor: pointer;
  border-style: solid;
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

const StyledReviewForm = styled.div`
  display: flex;
`;

export default ReviewForm;
