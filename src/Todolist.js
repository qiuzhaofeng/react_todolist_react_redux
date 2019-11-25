// import React, {Component} from "react"
import React from "react"
import { connect } from "react-redux"
import { handleInputChangeAction, handleBtnClickAction, handleTtemDelAction } from "./store/actionCreator.js"

const Todolist = (props) => {
  const { inputValue, list, handleInputChange, handleBtnClick, handleTtemDel } = props
  return (
    <div>
      <div>
        <input value={inputValue} onChange={(e)=>{handleInputChange(e)}}/>
        <button onClick={()=>{handleBtnClick()}}>提交</button>
      </div>
      <ul>
        {
          list.map((item,index)=>(
            <li key={index} onClick={()=>{handleTtemDel(index)}}>{item}</li>
          ))
        }
      </ul>
    </div>
  )
}
// 将此UI组件改写成无状态组件提升性能，（里面不需要执行react的生命周期钩子等等）
// class Todolist extends Component {
//   render() {
//     const { inputValue, list, handleInputChange, handleBtnClick, handleTtemDel } = this.props
//     return (
//       <div>
//         <div>
//           <input value={inputValue} onChange={(e)=>{handleInputChange(e)}}/>
//           <button onClick={()=>{handleBtnClick()}}>提交</button>
//         </div>
//         <ul>
//           {
//             list.map((item,index)=>(
//               <li key={index} onClick={()=>{handleTtemDel(index)}}>{item}</li>
//             ))
//           }
//         </ul>
//       </div>
//     )
//   }
// }
const mapStateToProps=(state)=>{
  return {
    inputValue:state.inputValue,
    list:state.list
  }
}
// store.dispatch=>props
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange(e) {
      const action = handleInputChangeAction(e.target.value)
      dispatch(action)
    },
    handleBtnClick() {
      const action = handleBtnClickAction()
      dispatch(action)
    },
    handleTtemDel(index) {
      const action = handleTtemDelAction(index)
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todolist);