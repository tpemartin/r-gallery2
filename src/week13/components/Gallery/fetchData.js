import axios from "axios";

const dataUrl = "https://script.google.com/macros/s/AKfycbyIZNwTCjqHQr5oOjlOrBWIpfZJ1suttwiSa3Z7_DyEq_unO3X-3KhhVItf3z-ruEVDKw/exec"

export function create_dataObjects_from_data(data){

  // 取出第一個元素，並且將其餘元素放入data （data比之前少一個元素）
  const keys = data.shift()

  // 功能：將data的每一個元素轉換成物件
  function create_data_object(value){
    const obj = Object()
    value.forEach((v,i)=>{
        obj[keys[i]] = v
    })
    return obj
  }

  // Array.map is to create a new array with the results of 
  // calling a function for every array element.
  const dataObjects = data.map((value)=>{
    return create_data_object(value)
  })
   
  return dataObjects
}

export async function fetchData() {
  try {
    const response = await axios.get(dataUrl);
    return create_dataObjects_from_data(response.data);
  } catch (error) {
    console.log(error);
  }
}

