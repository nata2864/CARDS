export const createGameMenu = () => {

    const title = document.createElement('h2')
    // Находим здесь контейнер
        const gameSection = document.querySelector('.modal')
    // Чистим результат и прошедший выбор и ресуем первую страницу
        gameSection.innerHTML = ''
        title.textContent = 'Выбери сложность'
        title.classList.add('title')
    
        const level1 = document.createElement('button')
    // Здесь присвоили класс кнопке
        level1.classList.add('levelnumber', 'levelnumbers')
    // Здесь написали ее номер
        level1.textContent = 1
    
        const level2 = document.createElement('button')
        level2.classList.add('levelnumber', 'levelnumbers')
        level2.textContent = 2
    
        const level3 = document.createElement('button')
        level3.classList.add('levelnumber', 'levelnumbers')
        level3.textContent = 3
    
        const buttonStart = document.createElement('button')
        buttonStart.classList.add('startbtn')
        buttonStart.textContent = 'Старт'
    // Аппендим 
        gameSection.append(title, level1, level2, level3, buttonStart)
    
    // Здесь задается класс нажатой или не нажатой кнопке
    // Если кнопка нажата то она выделяется и наоборот
    const chooseDifficult = document.querySelectorAll(
        '.levelnumber'
    )
    for (const chooseButtonElement of chooseDifficult) {
        chooseButtonElement.addEventListener('click', () => {
            chooseDifficult.forEach((el) =>
                el.classList.remove('startbtn_checked')
            )
            chooseButtonElement.classList.add(
                'startbtn_checked'
            )
    
            const difficult = chooseButtonElement.textContent
            buttonStart.addEventListener('click', () => console.log('HI'))
        })
    }
      
}