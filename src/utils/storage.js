/**
 * pushes all new notifications to localStorage
 * @param {Array<number>} ids array of notification id
 */
export const addNotifications = (ids) => {
  const notificationIds =
    JSON.parse(localStorage.getItem('gfw-notification-ids')) || [];
  let needsUpdate = false;

  ids.forEach((id) => {
    if (!notificationIds.includes(id)) {
      needsUpdate = true;
      notificationIds.push(id);
    }
  });

  if (needsUpdate) {
    localStorage.setItem(
      'gfw-notification-ids',
      JSON.stringify(notificationIds)
    );
  }
};

/**
 * Checks if all notification ids exist in the localStorage object
 * @param {Array<number>} ids array of notification id
 * @returns boolean
 */
export const notificationsExists = (ids) => {
  const notificationIds =
    JSON.parse(localStorage.getItem('gfw-notification-ids')) || [];

  return ids.every((id) => notificationIds.includes(id));
};
