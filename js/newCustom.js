class ngComponentList extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' }); 
    }
    connectedCallback() {
      this.shadowRoot.innerHTML = 
      `
            <style>
                ul {
                    list-style: none;
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                    position: relative;
                    counter-reset: item; 
                }

                li {
                    background: rgba(0, 102, 255, 0.2); 
                    padding: 15px 15px 15px 60px; 
                    border-radius: 10px;
                    border: 1px solid rgba(0, 255, 255, 0.3); 
                    box-shadow: 0 0 10px rgba(0, 255, 255, 0.3), 0 0 20px rgba(0, 255, 255, 0.2); 
                    font-size: 1.2rem;
                    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
                    color: #fff;
                    backdrop-filter: blur(5px); 
                    position: relative;
                    min-width: 200px; 
                    margin-top: 5%;
                }

                /* Нумерация в квадратиках слева */
                li::before {
                    content: counter(item); 
                    counter-increment: item; 
                    position: absolute;
                    left: 15px;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 30px;
                    height: 30px;
                    background: rgba(0, 102, 255, 0.3); 
                    border: 2px solid #0ff; 
                    border-radius: 5px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 1rem;
                    color: #0ff; 
                    box-shadow: 0 0 10px rgba(0, 255, 255, 0.3); 
                }


                li::after {
                    content: '';
                    position: absolute;
                    bottom: -20px; 
                    left: 50%;
                    transform: translateX(-50%);
                    width: 0;
                    height: 0;
                    border-left: 10px solid transparent;
                    border-right: 10px solid transparent;
                    border-top: 15px solid rgba(0, 255, 255, 0.5); 
                    opacity: 0.7;
                }


                li:last-child::after {
                    display: none;
                }

        
                li:hover {
                    transform: scale(1.05);
                    box-shadow: 0 0 20px rgba(0, 255, 255, 0.5), 0 0 30px rgba(0, 255, 255, 0.4), 0 0 40px rgba(0, 255, 255, 0.3);
                    background: rgba(0, 102, 255, 0.3); 
                }

                @media (max-width: 768px) {
                    body {
                        padding: 15px;
                    }

                    li {
                        font-size: 1rem;
                        padding: 12px 12px 12px 50px; 
                    }

                    li::before {
                        width: 25px;
                        height: 25px;
                        font-size: 0.9rem;
                    }
                }

                @media (max-width: 480px) {
                    body {
                        padding: 10px;
                    }

                    li {
                        font-size: 0.9rem;
                        padding: 10px 10px 10px 45px; 
                    }

                    li::before {
                        width: 20px;
                        height: 20px;
                        font-size: 0.8rem;
                    }
                }
            </style>
                <div>
                    <ul>
                        <li>Только актуальные технологии</li>
                        <li>Элемент 2</li>
                        <li>Элемент 3</li>
                        <li>Элемент 4</li>
                        <li>Элемент 5</li>
                    </ul>
                </div>`;}
   }
customElements.define('ng-component-list', ngComponentList);
class wailSectionComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
    }
    connectedCallback() {
        this.shadowRoot.innerHTML = `
        <style>
        .putton{
        position:absolute;
        width:100%;
        height:50vh;
        display:flex;
        align-items: center;
        }
        .punk1{
            width: 100%;
            height: 100vh;
            display: flex;
            
            align-items: center;
            }

            .timeline1 {
            position: relative;
            width: 4px;
            background-color: rgba(72, 115, 157, 0.8);
            height: 50%;
            box-shadow: 0 0 10px rgba(72, 115, 157, 1), 0 0 20px rgba(72, 115, 157, 0.6);
            right: 50px; /* Перемещаем на правую сторону */
            }

            .point1 {
            position: absolute;
            right: 50%; /* Используем right вместо left */
            transform: translateX(50%); /* Для выравнивания по правой стороне */
            width: 50px;
            height: 50px;
            background: radial-gradient(circle, rgba(72, 115, 157, 1) 40%, rgba(0, 0, 0, 0.8) 90%);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 25px;
            font-weight: bold;
            color: rgba(255, 255, 255, 0.8);
            text-shadow: 
                0 0 5px #00c6ff, 
                0 0 10px #00c6ff, 
                0 0 15px #00c6ff, 
                0 0 20px #0072ff,
                0 0 30px #0072ff,
                0 0 40px #ff00f0, 
                0 0 50px #ff00f0;
            box-shadow: 0 0 15px rgba(72, 115, 157, 1), 0 0 30px rgba(72, 115, 157, 0.6);
            }

            .point1:nth-child(1) { top: 0%; }
            .point1:nth-child(2) { top: 50%; transform: translate(50%, -50%); }
            .point1:nth-child(3) { bottom: 0%; }

            .point1::after {
            content: "";
            position: absolute;
            top: 50%;
            right: 100%; /* Изменяем на right для правильного выравнивания */
            width: 50px;
            height: 4px;
            background-color: rgba(72, 115, 157, 0.8);
            box-shadow: 
                0 0 5px #00c6ff, 
                0 0 10px #00c6ff, 
                0 0 15px #00c6ff, 
                0 0 20px #0072ff,
                0 0 30px #0072ff,
                0 0 40px #ff00f0, 
                0 0 50px #ff00f0;
            }

            .label1 {
            position: absolute;
            top: 50%;
            right: calc(100% + 60px); /* Перемещаем на правую сторону */
            transform: translateY(-50%);
            white-space: nowrap;
            font-size: 25px;
            color: rgba(255, 255, 255, 0.8);
            text-shadow: 
                0 0 5px #00c6ff, 
                0 0 10px #00c6ff, 
                0 0 15px #00c6ff, 
                0 0 20px #0072ff,
                0 0 30px #0072ff,
                0 0 40px #ff00f0, 
                0 0 50px #ff00f0;
            }

            @media (max-width: 1024px) {
            .point1 {
                width: 40px;
                height: 40px;
                font-size: 20px;
            }
            .point1::after {
                width: 30px;
            }
            .label1 {
                font-size: 20px;
            }
            }

            @media (max-width: 768px) {
            .timeline1 {
                width: 3px;
            }
            .point1 {
                width: 30px;
                height: 30px;
                font-size: 16px;
            }
            .point1::after {
                width: 20px;
            }
            .label1 {
                font-size: 16px;
                right: calc(100% + 40px);
            }
        }
    </style>
    <div class="putton">
        <div class="punk1">
            <div class="timeline1">
                <div class="point1" id="q1"><span class="label1">Разработка на Python и Data Science</span>1</div>
                <div class="point1" id="q2"><span class="label1">Кибербезопасность и защита данных</span>2</div>
                <div class="point1" id="q3"><span class="label1">Игровая разработка</span>3</div>
            </div>
        </div>
    </div>
        `
    }
}
customElements.define('wail-section-component', wailSectionComponent);
class setCompatLainerComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
    }
    connectedCallback() {
        this.shadowRoot.innerHTML = `
        <style>
        .puttonset{
        position:absolute;
        width:100%;
        height:50vh;
        display:flex;
        align-items: center;
        }
        .punkinElementCol {
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            }

            .timelinesSectionSetPunk {
            position: relative;
            width: 4px;
            background-color: rgba(72, 115, 157, 0.8);
            height: 50%;
            box-shadow: 0 0 10px rgba(72, 115, 157, 1), 0 0 20px rgba(72, 115, 157, 0.6);
            left: 50px; /* Перемещаем на левую сторону */
            }

            .pointEvealSet {
            position: absolute;
            left: 50%; /* Используем left вместо right */
            transform: translateX(-50%); /* Для выравнивания по левой стороне */
            width: 50px;
            height: 50px;
            background: radial-gradient(circle, rgba(72, 115, 157, 1) 40%, rgba(0, 0, 0, 0.8) 90%);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 25px;
            font-weight: bold;
            color: rgba(255, 255, 255, 0.8);
            text-shadow: 
                0 0 5px #00c6ff, 
                0 0 10px #00c6ff, 
                0 0 15px #00c6ff, 
                0 0 20px #0072ff,
                0 0 30px #0072ff,
                0 0 40px #ff00f0, 
                0 0 50px #ff00f0;
            box-shadow: 0 0 15px rgba(72, 115, 157, 1), 0 0 30px rgba(72, 115, 157, 0.6);
            }

            .pointEvealSet:nth-child(1) { top: 0%; }
            .pointEvealSet:nth-child(2) { top: 50%; transform: translate(-50%, -50%); }
            .pointEvealSet:nth-child(3) { bottom: 0%; }

            .pointEvealSet::after {
            content: "";
            position: absolute;
            top: 50%;
            left: 100%; /* Изменяем на left для правильного выравнивания */
            width: 50px;
            height: 4px;
            background-color: rgba(72, 115, 157, 0.8);
            box-shadow: 
                0 0 5px #00c6ff, 
                0 0 10px #00c6ff, 
                0 0 15px #00c6ff, 
                0 0 20px #0072ff,
                0 0 30px #0072ff,
                0 0 40px #ff00f0, 
                0 0 50px #ff00f0;
            }

            .labelsFortran {
            position: absolute;
            top: 50%;
            left: calc(100% + 60px); /* Перемещаем на левую сторону */
            transform: translateY(-50%);
            white-space: nowrap;
            font-size: 25px;
            color: rgba(255, 255, 255, 0.8);
            text-shadow: 
                0 0 5px #00c6ff, 
                0 0 10px #00c6ff, 
                0 0 15px #00c6ff, 
                0 0 20px #0072ff,
                0 0 30px #0072ff,
                0 0 40px #ff00f0, 
                0 0 50px #ff00f0;
            }

            @media (max-width: 1024px) {
            .pointEvealSet {
                width: 40px;
                height: 40px;
                font-size: 20px;
            }
            .pointEvealSet::after {
                width: 30px;
            }
            .labelsFortran {
                font-size: 20px;
            }
            }

            @media (max-width: 768px) {
            .timelinesSectionSetPunk {
                width: 3px;
            }
            .pointEvealSet {
                width: 30px;
                height: 30px;
                font-size: 16px;
            }
            .pointEvealSet::after {
                width: 20px;
            }
            .labelsFortran {
                font-size: 16px;
                left: calc(100% + 40px);
            }
            }
        </style>
    <div class="puttonset">
        <div class="punkinElementCol">
            <div class="timelinesSectionSetPunk">
                <div class="pointEvealSet" id="q1classesSet"><span class="labelsFortran">Разработка мобильных приложений</span>1</div>
                <div class="pointEvealSet" id="q2classesSet"><span class="labelsFortran">Искусственный интеллект</span>2</div>
                <div class="pointEvealSet" id="q3classesSet"><span class="labelsFortran">Веб-разработка и дизайн</span>3</div>
            </div>
        </div>
    </div>
        `
    }
}
customElements.define('set-compat-lainer-component', setCompatLainerComponent);
  






