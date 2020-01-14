import React from "react";
import styles from "./HotelView.module.scss";
import Hotel1 from "../../assets/img/hotel-1.jpg";
import Hotel2 from "../../assets/img/hotel-2.jpg";
import Hotel3 from "../../assets/img/hotel-3.jpg";
import User3 from "../../assets/img/user-3.jpg";
import User4 from "../../assets/img/user-4.jpg";
import User5 from "../../assets/img/user-5.jpg";
import User6 from "../../assets/img/user-6.jpg";
import Icon from "../../assets/img/sprite.svg";
function HotelView() {
  const gallery = React.useState([
    { id: 1, src: Hotel1 },
    { id: 2, src: Hotel2 },
    { id: 3, src: Hotel3 }
  ])[0];
  const starRate = React.useState(["one", "two", "three", "four", "five"])[0];
  return (
    <React.Fragment>
      <div className={styles["gallery"]}>
        {gallery.map(item => (
          <figure className={styles["gallery__item"]} key={item.id}>
            <img
              src={item.src}
              alt={item.id}
              className={styles["gallery__photo"]}
            />
          </figure>
        ))}
      </div>
      <div className={styles["overview"]}>
        <h1 className={styles["overview__heading"]}>Hotel Las Palmas</h1>
        <div className={styles["overview__stars"]}>
          {starRate.map(item => (
            <svg className={styles["overview__icon-star"]} key={item}>
              <use xlinkHref={`${Icon}#icon-star`} />
            </svg>
          ))}
        </div>
        <div className={styles["overview__location"]}>
          <svg className={styles["overview__icon-location"]}>
            <use xlinkHref={`${Icon}#icon-location-pin`} />
          </svg>
          <button className={styles["btn-inline"]}>Albuferira, Portugal</button>
        </div>
        <div className={styles["overview__rating"]}>
          <div className={styles["overview__rating-average"]}>8.6</div>
          <div className={styles["overview__rating-count"]}>429 votes</div>
        </div>
      </div>
      <div className={styles["detail"]}>
        <div className={styles["description"]}>
          <p className={styles["paragraph"]}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi
            dignissimos debitis ratione sapiente saepe. Accusantium cumque,
            quas, ut corporis incidunt deserunt quae architecto voluptate.
          </p>
          <p className={styles["paragraph"]}>
            Accusantium cumque, quas, ut corporis incidunt deserunt quae
            architecto voluptate delectus, inventore iure aliquid aliquam.
          </p>
          <ul className={styles["list"]}>
            <li className={styles["list__item"]}>Close to the beach</li>
            <li className={styles["list__item"]}>Breakfast included</li>
            <li className={styles["list__item"]}>Free airport shuttle</li>
            <li className={styles["list__item"]}>Free wifi in all rooms</li>
            <li className={styles["list__item"]}>
              Air conditioning and heating
            </li>
            <li className={styles["list__item"]}>Close to the beach</li>
            <li className={styles["list__item"]}>Close to the beach</li>
            <li className={styles["list__item"]}>Close to the beach</li>
          </ul>
          <div className={styles["recommend"]}>
            <p className={styles["recommend__count"]}>
              Lucy and 3 other friends recomment this hotel.
            </p>
            <div className={styles["recommend__friends"]}>
              <img
                src={User3}
                alt="Friend 1"
                className={styles["recommend__photo"]}
              />
              <img
                src={User4}
                alt="Friend 2"
                className={styles["recommend__photo"]}
              />
              <img
                src={User5}
                alt="Friend 3"
                className={styles["recommend__photo"]}
              />
              <img
                src={User6}
                alt="Friend 4"
                className={styles["recommend__photo"]}
              />
            </div>
          </div>
        </div>
        <div className={styles["user-reviews"]}>
          <figure className={styles["review"]}>
            <blockquote className={styles["review__text"]}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              doloremque architecto dicta animi, totam, itaque officia ex.
            </blockquote>
            <figcaption className={styles["review__user"]}>
              <img
                src={User3}
                alt="user 1"
                className={styles["review__photo"]}
              />
              <div className={styles["review__user-box"]}>
                <p className={styles["review__user-name"]}>Nick Smith</p>
                <p className={styles["review__user-date"]}>Feb 23rd, 2017</p>
              </div>
              <div className={styles["review__rating"]}>7.8</div>
            </figcaption>
          </figure>
          <figure className={styles["review"]}>
            <blockquote className={styles["review__text"]}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              doloremque architecto dicta animi.
            </blockquote>
            <figcaption className={styles["review__user"]}>
              <img
                src={User4}
                alt="user 4"
                className={styles["review__photo"]}
              />
              <div className={styles["review__user-box"]}>
                <p className={styles["review__user-name"]}>Mary Thomas</p>
                <p className={styles["review__user-date"]}>Feb 23rd, 2017</p>
              </div>
              <div className={styles["review__rating"]}>7.8</div>
            </figcaption>
          </figure>
          <button className={styles["btn-inline"]}>
            Show all <span>&rarr;</span>
          </button>
        </div>
      </div>
      <div className={styles["cta"]}>
        <h2 className={styles["cta__book-now"]}>
          Good news! we have 4 free rooms for your selected dates!
        </h2>
        <button className={styles["btn"]}>
          <span className={styles["btn__visible"]}>Book now</span>
          <span className={styles["btn__invisible"]}>Only 4 rooms</span>
        </button>
      </div>
    </React.Fragment>
  );
}
export default HotelView;
