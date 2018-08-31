const createBook = (name, price, ageRestr)=>{
    this.name = name;
    this.price = `$ ${price}`;
    this.ageRestr = +ageRestr;
    booksCollection.push(this);
};

export { booksCollection, createBook }