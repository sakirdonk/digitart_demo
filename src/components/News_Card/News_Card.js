import styles from "./News_Card.module.css";
import news1 from "../../assets/news1.png";
import news2 from "../../assets/news2.png";
import news3 from "../../assets/news3.png";

function News_Card(props){
    return(
        <div className={styles.news__card}>
            <img className={styles.news__pict} src={props.link==='news1'? news1 : props.link==='news2'? news2 : news3} alt="news picture" />
            <div className={styles.news__desc}>
                <p className={styles.news__source}>{props.source} - <span className={styles.news__date}>{props.date}</span></p>
                <h5 className={styles.news__title}>{props.title}</h5>
            </div>
        </div>
    )
}

export default News_Card;