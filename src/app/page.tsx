import { redirect } from "next/navigation";

export default function Home() {
  redirect("/your-to-do", 'replace')
}
