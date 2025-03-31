let currentVolume = 0.5

let keyList = document.querySelectorAll('.piano-key') // Получаем список клавиш

keyList.forEach((key, index) => {
    // итерируемся по списку клавиш и переводим index клавиши в строку
    index = String(index + 1).length === 1 ? '0'+ (index + 1) : index + 1;

    // если index меньше 24, то добавляем обработчик событий этой клавише
    Number(index) <= 24 && key.addEventListener('click', (event) => {
        event.stopPropagation(); 
        playNote(index)
    })

    // если index меньше 24, то добавляем обработчик событий этой клавише
    Number(index) <= 24 && key.addEventListener('touchstart', (event) => {
        event.stopPropagation(); 
        playNote(index)
    })
})

// Функция воспроизведения звука, в засисимости от index клавиши
function playNote(index) {
    let audio = new Audio(`audio/key${index}.mp3`);
    audio.volume = currentVolume;
    return audio.play();
}



let range = document.querySelector('input[type="range"].piano-volume-slider'); // получаем слайдер громкости

range.addEventListener('input', (event) => handlerVolumePiano(event.target.value)) // навешиваем обработчик изменения громкости на input[type="range"]

// Функция обработки изменения громкости
function handlerVolumePiano(volume) {
    currentVolume = volume
}
