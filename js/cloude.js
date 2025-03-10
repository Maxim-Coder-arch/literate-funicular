const vantaEffect = VANTA.CLOUDS({
    el: "#vanta-background", // Элемент, в котором будет отображаться фон
    mouseControls: true,     // Включить управление мышью
    touchControls: true,     // Включить управление на сенсорных устройствах
    gyroControls: false,     // Отключить управление гироскопом
    minHeight: 200.00,       // Минимальная высота
    minWidth: 200.00,        // Минимальная ширина
    skyColor: 0x000000,      // Цвет неба (чёрный)
    cloudColor: 0x001122,    // Цвет облаков (тёмный синий)
    cloudShadowColor: 0x000000, // Цвет теней облаков (ещё темнее)
    sunColor: 0x002244,      // Цвет "солнца" (тёмный синий)
    sunGlareColor: 0x001133, // Цвет бликов (тёмный синий)
    sunlightColor: 0x002255, // Цвет света (тёмный синий)
    speed: 0.5,              // Скорость анимации
    zoom: 1.0                // Масштаб
});