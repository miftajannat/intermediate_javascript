const student = [
    { Id: 1, Name: 'John' },
    { Id: 2, Name: 'Rahim' },
    { Id: 3, Name: 'Karim' },
    { Id: 4, Name: 'Rahima' }
];
const names = student.map(s => s.Name);
const ids = student.map(s => s.Id);
const bigger = student.filter(s => s.Id > 2);
const bigger1 = student.find(s => s.Id > 2);
console.log(names);
//[ 'John', 'Rahim', 'Karim', 'Rahima' ]
console.log(ids);
//[ 1, 2, 3, 4 ]
console.log(bigger);
//[ { Id: 3, Name: 'Karim' }, { Id: 4, Name: 'Rahima' } ]
console.log(bigger1);
//{ Id: 3, Name: 'Karim' }