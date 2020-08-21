import React from "react";

import "./CardList.css";

export default function CardList(props) {
  return (
    <div className="root">
      <section className="cardlist">
        <div className="card">
          <div claassName="user">
            <div claassName="userimage">
              <img src="image/サラリーマン.jpeg" alt="画像です" />
              <h1 className="userName">田代</h1>
            </div>
          </div>
          <div className="textItem">
            <p className="text">よろしくおねがいします</p>
            <p>お勧めの酒: 作 恵乃智</p>
            <p>お勧めの魚: いわし</p>
          </div>
        </div>
      </section>
    </div>
  );
}
