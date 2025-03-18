import { Github } from "lucide-react"
import TaskList from "../components/TaskList"
import { getTasks } from "./actions"
import type { Task } from "@/lib/models/Task"
import Link from "next/link"

export default async function Home() {
  const tasks: Task[] = await getTasks()

  return (
    <main className="min-h-screen text-white flex flex-col justify-between">
      <div className=" mb-4 border-b w-full p-4 px-4 mx-auto flex justify-between items-center align-middle">
        <h1 className="text-3xl text-center">
          Task Management
        </h1>
        <Link  href="https://github.com/Reshmagvs"><Github /></Link>
      </div>
      <TaskList initialTasks={tasks} />
      <div className=" text-xl  border-t p-4 px-8 flex justify-center items-center">Made by <Link href="https://in.linkedin.com/in/reshma-g-v-s-740906295" target="_blank">: Reshma GVS </Link></div>
    </main>
  )
}

