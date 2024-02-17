import React from "react";
import person1 from "../images/user-icon-1.svg";
import person2 from "../images/user-icon-2.svg";
import person3 from "../images/user-icon-3.svg";
import person4 from "../images/user-icon-4.svg";
import "./Main.css";

const Main = () => {
  return (
    <main className="Main">
      <section className="todaysBDays">
        <h3>сьогодні святкують</h3>

        <card className="person">
          <img src={person2} alt="person's name" />
          <div className="personInfo">
            <div className="personDescription">
              <div className="personName">Василь Стус</div>
              <div className="personDate">6 січня 1938 </div>
            </div>
          </div>
        </card>

        <card className="person">
          <img src={person2} alt="person's name" />
          <div className="personInfo">
            <div className="personDescription">
              <div className="personName">Павло Тичина</div>
              <div className="personDate">23 січня 1891</div>
            </div>
          </div>
        </card>

        <card className="person">
          <img src={person4} alt="person's name" />
          <div className="personInfo">
            <div className="personDescription">
              <div className="personName">Леся Українка</div>
              <div className="personDate">25 лютого 1871</div>
            </div>
          </div>
        </card>
      </section>

      <section className="upcoming">
        <h3>березень 2024</h3>

        <card className="person">
          <img src={person2} alt="person's name" />
          <div className="personInfo">
            <div className="personDescription">
              <div className="personName">Тарас Шевченко</div>
              <div className="personDate">9 березня 1814</div>
            </div>

            <div className="deadline deadlineSoon">
              <div className="deadlineNumber">23</div>
              <div className="deadlineText">днів</div>
            </div>
          </div>
        </card>

        <card className="person">
          <img src={person1} alt="person's name" />
          <div className="personInfo">
            <div className="personDescription">
              <div className="personName">Ліна Костенко</div>
              <div className="personDate">9 березня 1930</div>
            </div>

            <div className="deadline deadlineSoon">
              <div className="deadlineNumber">23</div>
              <div className="deadlineText">днів</div>
            </div>
          </div>
        </card>
      </section>

      <section className="upcoming">
        <h3>квітень 2024</h3>

        <card className="person">
          <img src={person2} alt="person's name" />
          <div className="personInfo">
            <div className="personDescription">
              <div className="personName">Олесь Гончар</div>
              <div className="personDate">3 квітня 1918</div>
            </div>

            <div className="deadline deadlineSoon">
              <div className="deadlineNumber">46</div>
              <div className="deadlineText">днів</div>
            </div>
          </div>
        </card>

        <card className="person">
          <img src={person2} alt="person's name" />
          <div className="personInfo">
            <div className="personDescription">
              <div className="personName">Сергій Жадан</div>
              <div className="personDate">23 серпня 1974</div>
            </div>

            <div className="deadline deadlineNext">
              <div className="deadlineNumber">75</div>
              <div className="deadlineText">днів</div>
            </div>
          </div>
        </card>

        <card className="person">
          <img src={person2} alt="person's name" />
          <div className="personInfo">
            <div className="personDescription">
              <div className="personName">Іван Франко</div>
              <div className="personDate">27 серпня 1856</div>
            </div>

            <div className="deadline deadlineNext">
              <div className="deadlineNumber">80</div>
              <div className="deadlineText">днів</div>
            </div>
          </div>
        </card>

        <card className="person">
          <img src={person3} alt="person's name" />
          <div className="personInfo">
            <div className="personDescription">
              <div className="personName">Оксана Забужко</div>
              <div className="personDate">19 вересня 1960</div>
            </div>

            <div className="deadline deadlineNext">
              <div className="deadlineNumber">90</div>
              <div className="deadlineText">днів</div>
            </div>
          </div>
        </card>
      </section>
    </main>
  );
};

export default Main;
