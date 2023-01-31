import { projects } from "../data/projects"
import { hyphenator } from "./hyphenateWords"

export const projectFinder = (str) => projects.find(project => hyphenator(project.title) === str)