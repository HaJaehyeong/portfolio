'use server';
import { MOCK_PROJECT_INFO_LIST, ProjectResponse } from '@/types/constants';

const fetchProjectInfo = async (projectId: string): Promise<ProjectResponse | undefined> => {
  // NOTE(hajae): github pages 정적 페이지 배포를 위해 임시 삭제
  // const res = await fetch(`${API_URL}/apis/project/${projectId}`, {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // });
  // if (!res.ok) {
  //   return undefined;
  // }
  // return await res.json();

  return MOCK_PROJECT_INFO_LIST.find((project) => project.projectId === projectId);
};

export default fetchProjectInfo;
