'use server';

export type CreateUserState = {
  message: string;
};

const API_URL = process.env.APIS_URL;

const fetchProjects = async () => {
  const res = await fetch(`${API_URL}/apis/projects`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return await res.json();
};

export default fetchProjects;
