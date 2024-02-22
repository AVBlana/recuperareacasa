import styled from "styled-components";
import { Text } from "../..";
import Box from "../../atoms/Box";
import Flex from "../../atoms/Flex";
import GalleryItem from "../../molecules/GalleryItem";
import { theme } from "@/theme/constants";
import FilterItem from "../../atoms/FilterItem";
import { useState } from "react";

const Gallery = () => {
  const initialData = [
    { url: "/assets/img1.jpg", title: "img1", label: "Kinetoterapie" },
    { url: "/assets/img2.jpg", title: "img2", label: "Sportiv și Recuperare" },
    { url: "/assets/img3.jpg", title: "img3", label: "Sportiv și Recuperare" },
    { url: "/assets/img4.jpg", title: "img4", label: "Relaxare" },
    { url: "/assets/img5.jpg", title: "img5", label: "Kinesio Tape" },
    { url: "/assets/img6.jpg", title: "img6", label: "Electroterapie" },
    {
      url: "/assets/img7.jpg",
      title: "img7",
      label: "Evaluare Neuro-Musculo-Scheletală",
    },
    {
      url: "/assets/img8.jpg",
      title: "img8",
      label: "Eliberare Fascială IATSM",
    },
    { url: "/assets/img8.jpg", title: "img8", label: "Cupping" },
    { url: "/assets/img8.jpg", title: "img8", label: "Flossing" },
  ];

  const [selectedLabel, setSelectedLabel] = useState("Toate");
  const [data, setData] = useState(initialData);

  const filter = ({ label }: { label: string }) => {
    setSelectedLabel(label);

    if (label === "Toate") {
      setData(initialData);
    } else {
      const filteredData = initialData.filter((item) => item.label === label);
      setData(filteredData); // Create a copy of filtered data
    }
  };

  return (
    <>
      <SectionBox id="galerie">
        <Box style={{ width: "100%", alignItems: "center", gap: 10 }}>
          <Text
            secondaryFont
            bigger
            semiBold
            style={{ color: theme.color.secondary }}
          >
            Povesti pentru pacienti
          </Text>
          <Text primary secondaryFont huge bolder>
            Galerie Foto Video
          </Text>
          <Flex
            style={{
              flexWrap: "wrap",
              paddingLeft: 80,
              paddingRight: 80,
              gap: 10,
              justifyContent: "center",
              paddingBottom: 40,
              paddingTop: 24,
              cursor: "pointer",
            }}
          >
            {[
              "Toate",
              "Kinetoterapie",
              "Sportiv și Recuperare",
              "Relaxare",
              "Kinesio Tape",
              "Electroterapie",
              "Dry Needling",
              "Evaluare Neuro-Musculo-Scheletală",
              "Eliberare Fascială IATSM",
              "Cupping",
              "Flossing",
            ].map((label) => (
              <FilterItem
                key={label}
                label={label}
                onClick={() => filter({ label })}
                selected={label === selectedLabel}
              />
            ))}
          </Flex>
          <Flex style={{ flexWrap: "wrap", width: "100%" }}>
            {data.map((item) => (
              <GalleryItem
                key={item.url}
                item={item}
                itemsWithSelectedLabelCount={
                  initialData.filter((i) => i.label === item.label).length
                }
              />
            ))}
          </Flex>
        </Box>
      </SectionBox>
    </>
  );
};

const SectionBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Gallery;
