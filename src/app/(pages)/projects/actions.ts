'use server';
import { MOCK_PROJECTS, ProjectsResponse } from '@/types/constants';

const fetchProjects = async (): Promise<ProjectsResponse> => {
  // NOTE(hajae): github pages 정적 페이지 배포를 위해 임시 삭제
  // const res = await fetch(`${API_URL}/apis/projects`, {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // });

  return MOCK_PROJECTS;
};

export default fetchProjects;
