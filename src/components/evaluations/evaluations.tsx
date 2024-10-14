import { evaluationsList } from "../../data/evaluationsList";



const Evaluation = () => {

    return (
      <div>

  {evaluationsList.length > 0}
  <ul>
    {evaluationsList.map(product =>
    <li>{product.title} - {product.productName}
    </li>)}
  </ul>
  
  
      </div>
  
  
    );
  }
  
  export default Evaluation
