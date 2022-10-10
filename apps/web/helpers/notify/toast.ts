import { toast } from 'react-hot-toast';

const notify = (message: string, type: 'success' | 'error') => {
  toast[type](message, {
    position: 'top-center',
    duration: 3000,
  });
};

export { notify };
