'use server';

import { ProjectResponse } from '@/app/apis/project/[id]/route';

const API_URL = process.env.APIS_URL;

const fetchProjectInfo = async (projectId: string): Promise<ProjectResponse | undefined> => {
  const res = await fetch(`${API_URL}/apis/project/${projectId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    return undefined;
  }

  return await res.json();
};

export default fetchProjectInfo;
