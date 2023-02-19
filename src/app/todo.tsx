"use client";
import React from "react";
import { TodoInterface } from "./interfaces/interfaces";

import { useRouter } from "next/navigation";
import { Button, Flex, Box, Divider } from "@chakra-ui/react";

function updateList(todo: TodoInterface, e: any, refresh: Function) {
  todo.isDone = e.target.checked;
  refresh();
}

function Todo(props: any) {
  const { todo } = props;
  const router = useRouter();
  return (
    <>
      <Flex justifyContent={"space-between"} ml="1rem">
        <Box display={"flex"} justifyContent={"center"} alignItems="center">
          <Box color={"white"} fontSize="2xl">
            {todo.name}
          </Box>
        </Box>
        <Button
          style={{ marginInlineStart: "1rem" }}
          onClick={() => props.delete(todo, router.refresh)}
        >
          delete
        </Button>
      </Flex>
    </>
  );
}

export default Todo;
