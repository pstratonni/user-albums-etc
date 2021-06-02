import { setPersonsToStorage } from "../data/person";

const sortPerson = (sortPersons) => {
  // sortPersons.sort((a, b) => {
  //   if (a.lName < b.lName) {
  //     return -1;
  //   }
  //   if (a.lName === b.lName) {
  //     if (a.fName < b.fName) {
  //       return -1;
  //     }
  //     if (a.fName === b.fName) {
  //       return 0;
  //     }
  //     if (a.fName > b.fName) {
  //       return 1;
  //     }
  //   }
  //   if (a.lName > b.lName) {
  //     return 1;
  //   }
  // });

  // return sortPersons;
  sortPersons.sort((a, b) => a.lName.localeCompare(b.lName)||a.fName.localeCompare(b.fName));
  setPersonsToStorage(sortPersons);
  return sortPersons;
};

export default sortPerson;
