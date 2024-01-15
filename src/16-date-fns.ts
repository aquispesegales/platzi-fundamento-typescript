import {subDays,format} from 'date-fns';
const date = new Date(1988,1,28); // 0=enero, 1= febrero etc.
const rta = subDays(date,30);
const str = format(rta,'yyy/MM/dd');
console.log(str);