import './filter.css'
import FilterImg from './filter.png'
function Filter() {
    return (
     <div className="filterDiv">
      <h1>Latest Posts</h1>
      <span class="span">
        <img src ={FilterImg} width="40px" height="40px"></img>
        <h3 className="filterHd">Filter by Category</h3>
      </span>
      <ul className="ul">
        <li><div className='liBtn'>All</div></li>
        <li><div className='liBtn'>Artificial Intelligence</div></li>
        <li><div className='liBtn'>Cloud Computing</div></li>
        <li><div className='liBtn'>DevOps</div></li>
        <li><div className='liBtn'>Programming Languages</div></li>
        <li><div className='liBtn'>Mobile Application Development</div></li>
        <li><div className='liBtn'>Technology and Tools</div></li>
        <li><div className='liBtn'>Get a Job in a Tech Company</div></li>
        <li><div className='liBtn'>Others</div></li>
        
      </ul>
      </div>
    )
  }
  
  export default Filter;