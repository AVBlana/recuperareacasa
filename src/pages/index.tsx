import { HomeScreen } from "@/screens/Home";
import { Text } from "@/theme/components";
import Box from "@/theme/components/atoms/Box";

export default function Home() {
  if (process.env.NODE_ENV === "production") {
    return (
      <Box
        style={{
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Text white>Coming soon</Text>
      </Box>
    );
  }
  return <HomeScreen />;
}
