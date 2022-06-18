import '../styles/_frontpage.scss';
import A1 from '../img/A1.jpg';
import A2 from '../img/A2.jpg';

function ArticleCard(props) {
    return (
        <>
            <div className="article_card">
                <a href={props.href}>
                    <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 article_img">
                            <img src={props.img} alt="..." />
                        </div>
                        <div className="flex-grow-1 ms-3 d-flex flex-wrap article_text">
                            <h3 className="">
                                {props.title}
                            </h3>
                            <div className="line" />
                            <p>{props.body}</p>
                        </div>
                    </div>
                </a>
            </div>
        </>
    )
}

export default ArticleCard;
