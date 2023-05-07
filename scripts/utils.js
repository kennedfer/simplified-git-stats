export const getDaysDifference = (createdAt) => {
  const createdDateMs = new Date(createdAt).getTime();
  const currentDateMs = Date.now();
  const msInDay = 1000 * 3600 * 24;

  const diffInMs = currentDateMs - createdDateMs;
  return Math.floor(diffInMs / msInDay);
};
