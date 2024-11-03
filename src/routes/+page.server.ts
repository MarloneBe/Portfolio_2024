import { supabase } from '$lib/supabase';

let projects: any = [];
let skills: any = [];
async function fetchProjects() {
const { data, error } = await supabase
  .from('project')
  .select('*');

if (error) {
  console.error('Error fetching projects:', error.message);
} else {
  projects = data;
  return projects;
}
}
async function fetchSkills() {
  const { data, error } = await supabase
    .from('skill')
    .select('*');
  
  if (error) {
    console.error('Error fetching skills:', error.message);
  } else {
    skills = data;
    return skills;
  }
  }
export async function load(){
    const projects = await fetchProjects();
    const skills = await fetchSkills();
    return {projects, skills};
}