'use server';

import { ProjectsResponse } from '@/app/apis/projects/route';

const API_URL = process.env.APIS_URL;

const fetchProjects = async (): Promise<ProjectsResponse> => {
  const res = await fetch(`${API_URL}/apis/projects`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return await res.json();
};

export default fetchProjects;
