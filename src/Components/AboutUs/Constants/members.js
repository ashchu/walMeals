export const leadership = [
    {
        name: 'Name1',
        img:  null,
        role: 'Dev Director',
      }
]

export const projectLeaders = [
    {
        name: 'Name 2',
        img:  null,
        role: 'Project Manager',
    }
]

const a = [
    {
        name: 'Name 3',
        img:  null,
        role: 'Dev Member',
    },
 ];

function compare(a, b) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    let comparison = 0;
    if (nameA > nameB) {
        comparison = 1;
    } else if (nameA < nameB) {
        comparison = -1;
    }
    return comparison;
}

const insertImg = (persons) => {
    for(let i = 0; i < persons.length; i++) {
        var obj = persons[i];
        const first = obj.name.split(" ")[0].toLowerCase() + (obj.hasOwnProperty('repeat') ? obj.repeat : '')
        console.log(first);
        try {
            obj.img = require('./images/' + 'people/' + first + '.jpg');
        } catch {
            obj.img = require('./images/people/default.png');
        }
    }
}

a.sort(compare);
insertImg(leadership);
insertImg(projectLeaders);
insertImg(a);
export const actives = a;
