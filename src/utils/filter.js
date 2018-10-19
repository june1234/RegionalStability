import Vue from 'vue'
import moment from 'moment'

Vue.filter('timeFormat', function (data, formatString) {
  formatString = formatString || 'YYYY-MM-DD'
  return moment(data).format(formatString)
})

//格式化时间 年-月-日-时-分-秒
export function formatterDate(val){
	var date=new Date(val)   
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  var hour=date.getHours()
  var minute=date.getMinutes()
  var second=date.getSeconds()
  if(month < 10){ /*月份小于10,在前面加个0*/
    month = String(String(0) + String(month));
  }
  if(day < 10){ /*日期小于10,在前面加个0*/
    day = String(String(0) + String(day));
  }
  return String(year) +'-'+ String(month) +'-'+ String(day) +' '+ String(hour) +':'+ String(minute) +':'+ 
  String(second)
}

//格式化时间 年-月-日
export function formatterDateStr(val){
  var date=new Date(val)   
  var year = date.getFullYear()
  var month = date.getMonth()+1
  var day = date.getDate()
  if(month < 10){ /*月份小于10,在前面加个0*/
    month = String(String(0) + String(month));
  }
  if(day < 10){ /*日期小于10,在前面加个0*/
    day = String(String(0) + String(day));
  }
  return String(year) +'-'+ String(month) 
  +'-'+ String(day) 
}
export function formatterMonthStr(val){
  var date=new Date(val)   
  var year = date.getFullYear()
  var month = date.getMonth()+1
  var day = date.getDate()
  if(month < 10){ /*月份小于10,在前面加个0*/
    month = String(String(0) + String(month));
  }
  // if(day < 10){ /*日期小于10,在前面加个0*/
  //   day = String(String(0) + String(day));
  // }
  return String(year) +'-'+ String(month) 
  // +'-'+ String(day) 
}





