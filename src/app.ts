// Generics

const addUID = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
}


let docOne = addUID({ name: 'yoshi', age: 40 })

console.log(docOne.name);


// Generics with Interfaces

interface Resource <T>{
  uid: number;
  resourceName: string,
  data: T
}


const payOne: Resource<object> =  {
  uid: 1,
  resourceName: 'Icha',
  data: {name: 'shaun'}
}

const payTwo: Resource<string[]> = {
  uid: 1,
  resourceName: 'Icha',
  data: ['mk1', 'Fifa']
}
