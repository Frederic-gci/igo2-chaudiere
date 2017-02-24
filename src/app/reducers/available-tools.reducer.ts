import { Tool } from '../tool/shared/tool.interface';

export function availableTools(state: Tool[] = [], {type, payload}) {
  switch (type) {
    case 'UPDATE_TOOLS':
      return payload;
    default:
      return state;
  }
};