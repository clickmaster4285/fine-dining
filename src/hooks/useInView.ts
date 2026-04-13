import { useInView } from 'framer-motion';

export function useScrollInView(options = { margin: '-100px 0px' }) {
  return useInView(options);
}

