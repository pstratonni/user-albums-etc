const personArray = JSON.parse(localStorage.getItem("person"));
export default personArray || [];
export const setPersonsToStorage = (persons) =>
  localStorage.setItem("person", JSON.stringify(persons));
export const activePersonId = JSON.parse(localStorage.getItem("activePersonId"));
export const setActivePersonIdToStorage = (id) =>
  localStorage.setItem("activePersonId", JSON.stringify(id));
