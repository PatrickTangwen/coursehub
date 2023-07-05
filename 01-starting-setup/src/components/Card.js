import './Card.css';

// Card用来reduce code重复率
// wrapper component
function Card(props){
    const classes = 'card ' + props.className;
    // 始终记得用props.children 来表示app里的component
    return <div className={classes}>{props.children}</div>
}

export default Card;