function getArrayOfObject(object) {
  return Object.keys(object).map(key => object[key]);
}

export default function getNotifications(state) {
  return getArrayOfObject(state.notificationState);
}
