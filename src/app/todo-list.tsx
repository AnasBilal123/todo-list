"use client";
import React from "react";
import { TodoInterface } from "./interfaces/interfaces";
import Todo from "./todo";
import { useRouter } from "next/navigation";
import { Input, Button, Flex, Box, Divider } from "@chakra-ui/react";

function HeadTodo() {
  let inputValue: string = "";
  const router = useRouter();
  return (
    <Flex mt={"4rem"} justifyContent={"center"} alignItems="center">
      <Input
        type="text"
        fontSize={"1.3rem"}
        color="whiteAlpha.700"
        width={"2xl"}
        mr="1rem"
        onChange={(e) => {
          inputValue = e.target.value;
        }}
      />
      <Button
        margin={"0"}
        onClick={() => {
          addTodo(inputValue, router.refresh);
        }}
      >
        Add Task
      </Button>
    </Flex>
  );
}
function addTodo(name: string, refresh: Function) {
  if (name) {
    initializeList.push({ id: Math.random().toString(), name, isDone: false });
    refresh();
  }
}

function deleteTodo(todo: TodoInterface, refresh: Function) {
  initializeList = initializeList.filter((item: TodoInterface) => {
    return todo.id != item.id;
  });
  refresh();
}
let initializeList: TodoInterface[] = [
  {
    id: "1",
    name: "Task 1",
    isDone: false,
  },
  {
    id: "2",
    name: "Task 2",
    isDone: false,
  },
  {
    id: "3",
    name: "Task 3",
    isDone: false,
  },
];

function TodoList() {
  return (
    <div>
      <HeadTodo />
      {initializeList.length > 0 && (
        <Box
          as="ul"
          style={{ listStyleType: "none", padding: "1rem" }}
          bg="gray.600"
          borderRadius="1rem"
          mt="2rem"
          maxHeight={"26rem"}
          overflow="auto"
        >
          {initializeList.map((item) => {
            return (
              <Box as="li" key={item.id} style={{ padding: "5px 0" }}>
                <Todo todo={item} delete={deleteTodo}></Todo>
                <Divider width={"80%"} />
              </Box>
            );
          })}
        </Box>
      )}
    </div>
  );
}

export default TodoList;
