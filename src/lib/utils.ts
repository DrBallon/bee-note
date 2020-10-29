import { NoteNode } from '../store/store';
export function node2Markdown(node: NoteNode, level: number) {
  let text = '';
  const pre = '#'.repeat(level);
  text += `${pre} ${node.title}\n`;
  text += `${node.content}\n`;
  node.sub.forEach((subNode) => {
    text += node2Markdown(subNode, level + 1);
  });
  return text;
}
