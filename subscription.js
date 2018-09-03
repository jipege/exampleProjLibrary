const checkSub = (age, passport) => {
    let promise = new Promise((resolve, reject)=>{
        if ((age > 13 && passport)||(age<14)) resolve(`Доступ получен`)
        else reject(`В доступе отказано`);
    });
    return promise;
};

checkSub(13, true)
    .then (console.log(`Добро пожаловать!`))
    .catch (console.log(`Приносим свои извинения`));

export { checkSub };