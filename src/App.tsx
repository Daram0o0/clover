import React from 'react';
import './App.css';

function App() {
  return (
    <div className="clover">
      <header className='header'>
        <h2>2019</h2>
        <h1>January</h1>
      </header>
      <div className='main-container'>
        <div className='day'>
          <div className='red'>SUN</div>
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
              <div className='date red'><p>1</p></div>
              <div className='date'><p>2</p></div>
              <div className='date'><p>3</p></div>
              <div className='date'><p>4</p></div>
              <div className='date'><p>5</p></div>
              <div className='date'><p>6</p></div>
              <div className='date'><p>7</p></div>
            </div>
            <div className='week'>
              <div className='date red'><p>1</p></div>
              <div className='date'><p>2</p></div>
              <div className='date'><p>3</p></div>
              <div className='date'><p>4</p></div>
              <div className='date'><p>5</p></div>
              <div className='date'><p>6</p></div>
              <div className='date'><p>7</p></div>
            </div>
            <div className='week'>
              <div className='date red'><p>1</p></div>
              <div className='date'><p>2</p></div>
              <div className='date'><p>3</p></div>
              <div className='date'><p>4</p></div>
              <div className='date'><p>5</p></div>
              <div className='date'><p>6</p></div>
              <div className='date'><p>7</p></div>
            </div>
            <div className='week'>
              <div className='date red'><p>1</p></div>
              <div className='date'><p>2</p></div>
              <div className='date'><p>3</p></div>
              <div className='date'><p>4</p></div>
              <div className='date'><p>5</p></div>
              <div className='date'><p>6</p></div>
              <div className='date'><p>7</p></div>
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
