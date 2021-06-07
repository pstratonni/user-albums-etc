

const sortPerson = (sortPersons) => {

  sortPersons.sort((a, b) => a.lName.localeCompare(b.lName)||a.fName.localeCompare(b.fName));

  return sortPersons;
};

export default sortPerson;
