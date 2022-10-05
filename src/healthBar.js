/* eslint no-else-return: "error" */
export default function healthCheck(charObj) {
  if (charObj.health > 50) {
    return 'healthy';
  } else if (charObj.health <= 50 && charObj.health >= 15) return 'wounded';
  return 'critical';
}
