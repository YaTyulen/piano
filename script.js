let keyList = document.querySelectorAll('.piano-key') // Получаем список клавиш

keyList.forEach((key, index) => {
    // итерируемся по списку клавиш и переводим index клавиши в строку
    index = String(index + 1).length === 1 ? '0'+ (index + 1) : index + 1;

    // если index меньше 24, то добавляем обработчик событий этой клавише
    Number(index) <= 24 && key.addEventListener('click', (event) => {
        event.stopPropagation(); 
        playNote(index)
    })
})

// Функция воспроизведения звука, в засисимости от index клавиши
function playNote(index) {
    return new Audio(`audio/key${index}.mp3`).play();
}