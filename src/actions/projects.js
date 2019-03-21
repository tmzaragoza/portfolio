import { createAction } from 'promise-middleware-redux';
import { getProjects } from '../services/projects';

export const [
  fetchProjects,
  FETCH_PROJECTS,
  FETCH_PROJECTS_PENDING
] = createAction('FETCH_PROJECTS', getProjects);
