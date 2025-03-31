let currentVolume = 0.5

let helpList = document.querySelectorAll('.help') // Получаем подписи-подсказки
let switchCheckbox = document.querySelector('.piano-help-switch')
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

//добавляем обработчик по кнопке клавиатуры
document.addEventListener('keydown', (event) => {
    if(event.code == 'KeyZ') playNote('01')
    if(event.code == 'KeyX') playNote('02')
    if(event.code == 'KeyC') playNote('03')
    if(event.code == 'KeyV') playNote('04')
    if(event.code == 'KeyB') playNote('05')
    if(event.code == 'KeyN') playNote('06')
    if(event.code == 'KeyM') playNote('07')
    if(event.code == 'KeyA') playNote('08')
    if(event.code == 'KeyW') playNote('09')
    if(event.code == 'KeyS') playNote('10')
    if(event.code == 'KeyE') playNote('11')
    if(event.code == 'KeyD') playNote('12')
    if(event.code == 'KeyF') playNote('13')
    if(event.code == 'KeyT') playNote('14')
    if(event.code == 'KeyG') playNote('15')
    if(event.code == 'KeyY') playNote('16')
    if(event.code == 'KeyH') playNote('17')
    if(event.code == 'KeyU') playNote('18')
    if(event.code == 'KeyJ') playNote('19')
    if(event.code == 'KeyK') playNote('20')
    if(event.code == 'KeyO') playNote('21')
    if(event.code == 'KeyL') playNote('22')
    if(event.code == 'KeyP') playNote('23')
    if(event.code == 'Key;') playNote('24')
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

// обработчик включения и отключения подсказок клавиш
switchCheckbox.addEventListener('change', (event) => {
    console.log(event.target.checked);
    if(event.target.checked) { 
        console.log(event.target.checked);
        helpList.forEach(key => key.classList.remove('help'))
    } else {
        helpList.forEach(key => key.classList.add('help'))
    }
})
