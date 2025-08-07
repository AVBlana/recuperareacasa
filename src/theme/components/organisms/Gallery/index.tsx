import styled, { useTheme } from "styled-components";
import { Text, StyledText } from "../..";
import Box from "../../atoms/Box";
import Flex from "../../atoms/Flex";
import GalleryItem from "../../molecules/GalleryItem";
import FilterItem from "../../atoms/FilterItem";
import { useState } from "react";
import Button from "../../atoms/Button";

const Gallery = () => {
  const theme = useTheme();

  const initialData = [
    {
      type: "image",
      url: "/assets/galerieKineto.jpg",
      title: "Kineto1",
      label: "Kinetoterapie",
    },
    {
      type: "image",
      url: "/assets/galerieKineto2.jpg",
      title: "Kineto2",
      label: "Kinetoterapie",
    },
    {
      type: "image",
      url: "/assets/galerieKineto3.jpg",
      title: "Kineto3",
      label: "Kinetoterapie",
    },
    {
      type: "image",
      url: "/assets/serviciiMasajSportiv.jpg",
      title: "Masaj Sportiv și de Recuperare",
      label: "Sportiv și Recuperare",
    },

    {
      type: "image",
      url: "/assets/galerieMasajDeRelaxare.jpg",
      title: "Masaj De Relaxare",
      label: "Relaxare",
    },
    {
      type: "image",
      url: "/assets/galerieMasajDeRelaxare2.jpg",
      title: "Masaj De Relaxare 2",
      label: "Relaxare",
    },
    {
      type: "image",
      url: "/assets/serviciiKinesioTape.jpg",
      title: "Servicii Kinesio Tape",
      label: "Kinesio Tape",
    },
    {
      type: "image",
      url: "/assets/galerieElectroTerapie.jpg",
      title: "Electroterapie",
      label: "Electroterapie",
    },
    {
      type: "image",
      url: "/assets/galerieDryNeedling.jpg",
      title: "Dry Needling",
      label: "Dry Needling",
    },
    {
      type: "image",
      url: "/assets/galerieDryNeedling2.jpg",
      title: "Dry Needling 2",
      label: "Dry Needling",
    },
    {
      type: "image",
      url: "/assets/planRecuperare1.jpg",
      title: "Evaluare",
      label: "Evaluare Neuro-Musculo-Scheletală",
    },
    {
      type: "image",
      url: "/assets/galerieEliberareFasciala.jpg",
      title: "Eliberare Fascială ",
      label: "Eliberare Fascială IATSM",
    },
    {
      type: "image",
      url: "/assets/galerieEliberareFasciala2.jpg",
      title: "Eliberare Fascială 2",
      label: "Eliberare Fascială IATSM",
    },
    {
      type: "image",
      url: "/assets/galerieCupping.jpg",
      title: "Cupping",
      label: "Cupping",
    },
    {
      type: "image",
      url: "/assets/galerieFlossing.jpg",
      title: "Flossing",
      label: "Flossing",
    },
    {
      type: "image",
      url: "/assets/galerieTerapieManuala.jpg",
      title: "Terapie manuala",
      label: "Terapie Manuală",
    },
    {
      type: "image",
      url: "/assets/galerieTerapieManuala2.jpg",
      title: "Terapie manuala 2",
      label: "Terapie Manuală",
    },
    {
      type: "image",
      url: "/assets/galerieTerapieManuala3.jpg",
      title: "Terapie manuala 3",
      label: "Terapie Manuală",
    },
    {
      type: "image",
      url: "/assets/galerieTerapieManuala4.jpg",
      title: "Terapie manuala 4",
      label: "Terapie Manuală",
    },

    {
      type: "video",
      posterUrl: "/assets/exFoamRoller.png",
      url: "6MONburOfb8",
      title: "Exerciții Foam Roller",
      label: "Exerciții Video",
    },
    {
      type: "video",
      posterUrl: "/assets/exToracal.png",
      url: "LYxnQdJAsCk",
      title: "Exerciții pentru Durerea Toracală",
      label: "Exerciții Video",
    },
    {
      type: "video",
      posterUrl: "/assets/exCervical.png",
      url: "2wUhPPRv9_k",
      title: "Exerciții pentru Durerea Cervicală",
      label: "Exerciții Video",
    },
  ];

  const [selectedLabel, setSelectedLabel] = useState("Toate");
  const [data, setData] = useState(initialData);
  const itemsPerPage = 8; // Number of items to show initially
  const [visibleItems, setVisibleItems] = useState(itemsPerPage);
  const [isFilterMenuOpen, setFilterMenuOpen] = useState(false);

  const loadMore = () => {
    // Increase the number of visible items
    setVisibleItems((prevVisibleItems) => prevVisibleItems + itemsPerPage);
  };

  const filter = ({ label }: { label: string }) => {
    setSelectedLabel(label);

    if (label === "Toate") {
      setData(initialData);
    } else {
      const filteredData = initialData.filter((item) => item.label === label);
      setData(filteredData); // Create a copy of filtered data
    }
  };

  const toggleFilterMenu = () => {
    setFilterMenuOpen((prevOpen) => !prevOpen);
  };

  const filterItemsArray = [
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
    "Terapie Manuală",
    "Exerciții Video",
  ];

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
            Recuperare Acasă
          </Text>
          <Text primary secondaryFont huge bolder>
            Galerie Foto Video
          </Text>
          <Flex
            style={{
              flexWrap: "wrap",
              paddingLeft: theme.media.isMobile
                ? 20
                : theme.media.isTablet
                ? 20
                : 80,
              paddingRight: theme.media.isMobile
                ? 20
                : theme.media.isTablet
                ? 20
                : 80,
              gap: 10,
              justifyContent: "center",
              paddingBottom: theme.media.isMobile ? 20 : 40,
              paddingTop: theme.media.isMobile ? 12 : 24,
              cursor: "pointer",
            }}
          >
            {theme.media.isMobile ? (
              <>
                <FilterButton onClick={toggleFilterMenu}>
                  {selectedLabel}
                </FilterButton>
                {isFilterMenuOpen && (
                  <FilterMenu>
                    {filterItemsArray.map((label) => (
                      <FilterItem
                        key={label}
                        label={label}
                        onClick={() => {
                          filter({ label });
                          toggleFilterMenu();
                        }}
                        selected={label === selectedLabel}
                      />
                    ))}
                  </FilterMenu>
                )}
              </>
            ) : (
              // Display desktop filter items
              filterItemsArray.map((label) => (
                <FilterItem
                  key={label}
                  label={label}
                  onClick={() => filter({ label })}
                  selected={label === selectedLabel}
                />
              ))
            )}
          </Flex>

          <Flex style={{ flexWrap: "wrap", width: "100%" }}>
            {data.slice(0, visibleItems).map((item) => (
              <GalleryItem
                key={item.url}
                item={item}
                itemsWithSelectedLabelCount={
                  initialData.filter((i) => i.label === item.label).length
                }
              />
            ))}
          </Flex>
          {data.length > visibleItems && (
            <Flex
              style={{
                justifyContent: "center",
                paddingTop: 20,
                paddingBottom: 20,
              }}
            >
              <GalleryButton>
                <Button label="Afișează mai multe" onClick={loadMore} />
              </GalleryButton>
            </Flex>
          )}
        </Box>
      </SectionBox>
    </>
  );
};

const StyledFilterText = styled(StyledText)`
  transition: color 0.2s ease;
`;

const FilterButton = styled.div`
  /* Your styling for the filter button */
  display: flex;
  align-items: center;
  border-radius: 20px;
  padding: 8px 24px;
  background: ${({ theme }) => theme.color.primary};
  ${StyledFilterText} {
    font-size: ${({ theme }) => theme.text.medium};
    color: ${({ theme }) => theme.color.white};
  }
`;

const FilterMenu = styled.div`
  /* Your styling for the filter menu */
  padding: 20px;
`;

const GalleryButton = styled.div`
  display: flex;
  flex-direction: row;
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

const SectionBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Gallery;
