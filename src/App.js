import { data } from './data';
import { useState } from 'react';
import { getSums } from './func'

function App() {
  const [value, setValue] = useState(0);
  return (
    <section>
      <h1>Анкета</h1>
      <input placeholder='ФИО' />
      <p>Внимательно прочтите каждое утверждение. Оцените в баллах его значимость,
        распределив 11 баллов между четырьмя предложенными в каждом пункте вариантами завершения предложения.
        Для оценки каждого из вариантов ( а, б, в, г ) в рамках приведенных утверждений используйте все 11 баллов.
        Впишите свои оценки в анкету, столбец "Баллы". Следите, чтобы все 11 баллов были распределены.
        На вопросы следует отвечать быстро, не раздумывая подолгу.
      </p>
      {data.map(ind => {
        return (
          <div>
            <h2>{ind.title}</h2>
            {ind.cases.map(k => {
              return (
                <ul>
                  <li>{k.question}</li>
                  <input type="number" max="11" min="0" id={k.category} onChange={(event) => {
                    setValue(k.points = +event.target.value)
                    
                  }} />
                </ul>
              )
            })}
          </div>
        )
      })}
      <button onClick={() => getSums(data)}>Get</button>
      <span>Your sum is: 0</span>
    </section>
  );
}

export default App;
