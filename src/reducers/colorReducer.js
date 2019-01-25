
const colorReducer = (state = {color:'AAA'} , action) => {
//state는 기본 상태값. 만약 todolist라면 배열을 잡아놓는 것처럼.

    console.log("colorReducer....")
    console.log(action)

    if(action.data){
        return action.data
    }
        return {color:'AAA'}
}

export default colorReducer