import { FC } from "react";
import type { TodoType } from "./types/todo";

export const Todo: FC<Omit<TodoType, "id">> = (
  props
  // props: Pick<TodoType, "userId" | "title" | "completed">
  // props: Omit<TodoType, "id">
) => {
  const { title, userId, completed = false } = props;
  const completMark = completed ? "[完]" : "[未]";
  return <p>{`${completMark} ${title}(ユーザー:${userId})`}</p>;
};
