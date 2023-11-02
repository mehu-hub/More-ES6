const person = [
    {
        id: 1,
        name: 'Mehedi',
        job: 'doctor'
    }
]

// console.log(users[0].name)

const data = {
    count: 5000,
    data: [
        {
            id: 1, 
            name: 'Mehedi',
            job: 'Leader'
        },
        {
            id: 2,
            name: 'Hasan',
            job: 'Team Manager'
        }
    ]
}

// console.log(data.data[1].name)


const users = {
    id: 2001,
    name: 'Mehedi Hasan',
    address: {
        street: {
            first: '5/A2 Atipara',
            second: '2nd floor',
            third: 'Right Side'
        },
        postOffice: 'Faydabat',
        city: 'Dhaka'
    }
}


console.log(users?.address?.street?.third)