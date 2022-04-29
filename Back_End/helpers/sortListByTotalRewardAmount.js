export default function sortListByTotalRewardAmount(x, y) {
  if (x.totalRewardAmount > y.totalRewardAmount) {
    return -1;
  }
  if (x.totalRewardAmount < y.totalRewardAmount) {
    return 1;
  }
  return 0;
}
