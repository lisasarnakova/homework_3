function showFamily(family) { // создаем функцию
    if (family.length === 0) { // првоеряем условие, есть ли в массиве какие-то значения
        return 'Семья пуста' // если массив пустой, выводим сообщение
    } 
    else { // в других случаях выводим сообщение, из каких людей состоит семья
        const message = 'Семья состоит из: ' + family.join(' ') // используем .join 
        return message
    }
}
const family1 = ['Аня', 'Костя', 'Люба', 'Маша']
console.log(showFamily(family1))
  
const family2 = []
console.log(showFamily(family2))