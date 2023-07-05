import ExpenseDate from './ExpenseDate'
import Card from './Card'
import './ExpenseItem.css';

// component is just js function
// 从app.js <ExpenseItem></ExpenseItem>那里获得参数，这个参数是个object
// props stands for property

function ExpenseItem(props) {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();
    // the first pair of <div> </div> is the root element
    // other elements should be in the root element
    // dynamic place holder {}

  // 如果component tag之间没有内容需要填充，可以直接用self-closing: <ExpenseDate/>
  // 需要将date的data重新pass进ExpenseDate（child component）<ExpenseDate date={props.date}/>
  // 为了让css能用，记得加className 
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>{props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
