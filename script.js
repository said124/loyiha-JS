// let name = prompt('Ismingizni kiriting')
// let age = prompt('Yoshingizni kiriting')

// alert(`Salom ${name}`)

// if (age >= 18) {
//     alert('Siz voyaga yetgan shaxs siz')
// } else {
//     alert('Siz voyaga yetmagan shaxs siz')
// }

// let name = prompt('Ismingizni kiriting')
// let birthyear = prompt('Tugilgan yilingizni kiriting')
// let age = 2025 - `${birthyear}`
// alert(age)

// let id = Math.floor(Math.random() * 1000)

// let pot
// if (age < 18) {
//     pot = 'Voyaga yetmagan shaxs'
// } else if (age > 18) {
//     pot = 'Voyaga yetgan shaxs'
// } else {
//   pot = 'Qari yoshli'
// }  
// alert(` \n ism: ${name} \n Yil: ${birthyear} \n Yosh: ${pot} \n id: ${id}`)



let name = prompt(' Ismingizni kiriting ')
let adress = prompt(' Shaharingizni kiriting ')
let birthyear = prompt(' Tugilgan yilingizni kiriting ')

let age = 2025 - `${birthyear}`
alert(`Salom ${name} sizning yoshingiz ${age}`.trim())
let id = Math.floor(Math.random() * 1000)
console.log(` \n ism: ${name} \n Yil: ${birthyear} \n Shahar: ${adress} \n id: ${id}`);
