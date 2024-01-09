import React from 'react';
import './App.css';

function App() {
  return (
    <div className="clover">
      <header className='header'>
        <h1>January</h1>
        <h2>2019</h2>
      </header>
      <div className='main-container'>
        <div className='day'>
          <div>SUN</div>
          <div>MON</div>
          <div>TUE</div>
          <div>WED</div>
          <div>THU</div>
          <div>FRI</div>
          <div>SAT</div>
        </div>
        <section className='cal'>
          <article>
            <div className='week'>
              <div className='date'>1</div>
              <div className='date'>2</div>
              <div className='date'>3</div>
              <div className='date'>4</div>
              <div className='date'>5</div>
              <div className='date'>6</div>
              <div className='date'>7</div>
            </div>
            <div className='week'>
              <div className='date'>1</div>
              <div className='date'>2</div>
              <div className='date'>3</div>
              <div className='date'>4</div>
              <div className='date'>5</div>
              <div className='date'>6</div>
              <div className='date'>7</div>
            </div>
            <div className='week'>
              <div className='date'>1</div>
              <div className='date'>2</div>
              <div className='date'>3</div>
              <div className='date'>4</div>
              <div className='date'>5</div>
              <div className='date'>6</div>
              <div className='date'>7</div>
            </div>
            <div className='week'>
              <div className='date'>1</div>
              <div className='date'>2</div>
              <div className='date'>3</div>
              <div className='date'>4</div>
              <div className='date'>5</div>
              <div className='date'>6</div>
              <div className='date'>7</div>
            </div>
          </article>
        </section>
        <section className='notes'>
          <article className='choi'>
            <div className='notes-title'>
              <h2>NOTES</h2>
            </div>
            <div className='lines'>
              <div className='line'></div>
              <div className='line'></div>
              <div className='line'></div>
              <div className='line'></div>
              <div className='line'></div>
              <div className='line'></div>
              <div className='line'></div>
              <div className='line'></div>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}

export default App;
