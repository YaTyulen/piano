let currentVolume = 0.5

let helpList = document.querySelectorAll('.help') // Получаем подписи-подсказки
let switchCheckbox = document.querySelector('.piano-help-switch')
let keyList = document.querySelectorAll('.piano-key') // Получаем список клавиш

keyList.forEach((key, index) => {
    //добавляем обработчик по кнопке клавиатуры этой клавише
    key.addEventListener('keydown', (event) => {
        if(event.code == 'KeyZ' && index === 1) playNote(index)
        if(event.code == 'KeyX' && index === 2) playNote(index)
        if(event.code == 'KeyC' && index === 3) playNote(index)
        if(event.code == 'KeyV' && index === 4) playNote(index)
        if(event.code == 'KeyB' && index === 5) playNote(index)
        if(event.code == 'KeyN' && index === 6) playNote(index)
        if(event.code == 'KeyM' && index === 7) playNote(index)
        if(event.code == 'KeyA' && index === 8) playNote(index)
        if(event.code == 'KeyW' && index === 9) playNote(index)
        if(event.code == 'KeyS' && index === 10) playNote(index)
        if(event.code == 'KeyE' && index === 11) playNote(index)
        if(event.code == 'KeyD' && index === 12) playNote(index)
        if(event.code == 'KeyF' && index === 13) playNote(index)
        if(event.code == 'KeyT' && index === 14) playNote(index)
        if(event.code == 'KeyG' && index === 15) playNote(index)
        if(event.code == 'KeyY' && index === 16) playNote(index)
        if(event.code == 'KeyH' && index === 17) playNote(index)
        if(event.code == 'KeyU' && index === 18) playNote(index)
        if(event.code == 'KeyJ' && index === 19) playNote(index)
        if(event.code == 'KeyK' && index === 20) playNote(index)
        if(event.code == 'KeyO' && index === 21) playNote(index)
        if(event.code == 'KeyL' && index === 22) playNote(index)
        if(event.code == 'KeyP' && index === 23) playNote(index)
        if(event.code == 'Key;' && index === 24) playNote(index)
    })

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
