type string_or_num = string | number
type obj_with_name = { name: string, uid: string_or_num }
// 
const logDetails = (uid: string_or_num, item: string) => {
  console.log(`${item} has a uid of ${uid}`)
}

const greet = (user: obj_with_name) => {
  console.log(`${user.name} says dope`)
}

// const greet = (user: { name: string, uid: string_or_num }) => {
//   console.log(`${user.name} says dope`)
// }



greet({ name: 'Icha', uid: 20 })