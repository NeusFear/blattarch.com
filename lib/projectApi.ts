import { readdirSync } from "fs";
import { join } from "path";
import { ProjectType } from "../data/ProjectData";

export function getImages(project: ProjectType | undefined) { 
  const category: string = project?.category?.path ?? "any";
  const projectRoute: string = project?.route ?? "404";
  const directory = join(process.cwd(), 'public', 'images', 'projects', category, projectRoute)
  return readdirSync(directory)
}

export function getImageLocations(project: ProjectType | undefined) { 
  const foundImages = getImages(project);
  const images: string[] = foundImages?.map((image) => "/images/projects/" + project?.category.path + "/" + project?.route + "/" + image);
  return images;
}