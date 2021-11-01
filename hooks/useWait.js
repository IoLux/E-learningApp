const useWait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default useWait;
