var ID = 1;
const createUser = (age, name) => {
    this.ID = +ID;
    ID+=1;
    this.age = +age;
    this.name = name;
    this.collection = [];
};

export { createUser };