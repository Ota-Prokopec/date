export const getAutoEnv = () => {
  return typeof process !== 'undefined' ? process.env : import.meta?.env ? import.meta?.env : {};
};
