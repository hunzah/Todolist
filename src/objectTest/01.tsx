type CityType ={
    title: string
    country: string
}

type AddressType ={
    streetTitle: string
    city: CityType
}

type TechType = {
    id: number
    title: string
}

type StudentType ={
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    Technologies: Array<TechType>
}

const student: StudentType = {
    id: 1,
    name: 'Vladimir',
    age: 32,
    isActive: false,
    address: {
        streetTitle: "Surganova 2",
        city: {
            title: "Minsk",
            country: "Belarus"
        }

    },
    Technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {  id: 3,
            title: "React"
        },
    ]
}

console.log(student.age)
console.log(student.name)
console.log(student.address.city.title)
console.log(student.Technologies[2].title)