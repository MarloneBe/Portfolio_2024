import { supabase } from '$lib/supabase';

let projects: any = [];
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
export async function load(){
    const projects = await fetchProjects();
    return {projects};
}