import config from "@config/index";
import parseToken from "@utils/parseToken";

const cache = {
  token: "",
  courses: null,
};
const getCourseFromMatricula = async ({ tbl_curso_curso_id: cursoId }) => {
  const { baseUrlBackend } = config;
  const headers = new Headers();
  headers.set("Content-Type", "application/json; charset=utf-8");
  const response = await fetch(`${baseUrlBackend}/curso/${cursoId}`, {
    method: "GET",
    headers,
  });
  const { data: course } = await response.json();
  return course;
};

const getCourses = async (token, options) => {
  if (cache.token === token) return cache.courses;
  const { baseUrlBackend } = config;
  let courses = [];
  if (options.matriculas) {
    const { matriculas } = options;
    courses = await Promise.all(matriculas.map(getCourseFromMatricula));
  } else { 
    const headers = new Headers();
    headers.set("Content-Type", "application/json; charset=utf-8");
    const response = await fetch(`${baseUrlBackend}/curso/`, {
    method: "GET",
    headers,
  });
    const { data } = await response.json();
    courses = data;
  }
  cache.token = token;
  cache.courses = courses;
  return courses;
};

export default getCourses;
