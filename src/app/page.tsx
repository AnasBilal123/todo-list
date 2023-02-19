"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Inter } from "@next/font/google";
import TodoList from "./todo-list";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <section
        style={{
          height: "100vh",
          backgroundColor: "#44337A",
        }}
      >
        <Flex
          bg="purple.900"
          height={100}
          boxShadow={"2xl"}
          justifyContent="center"
          alignItems={"center"}
        >
          <Text color={"whiteAlpha.800"} fontSize={"4xl"} fontWeight={"bold"}>
            Todo Application
          </Text>
        </Flex>
        <Box
          height={"100"}
          display="flex"
          mt="5rem"
          justifyContent={"center"}
          alignItems="center"
        >
          <TodoList />
        </Box>
      </section>
    </>
  );
}
