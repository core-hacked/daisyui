export const ssr = false
import { redirect } from "@sveltejs/kit"
export function load() {
  throw redirect(301, "https://codepen.io/pen?template=BaqgrNP")
}
