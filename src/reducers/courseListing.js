var courses = [
   {id:4624,code:"A02C0110",title:"Theory",school:"No Offerings",program:"No Offerings",programId:0},
   {id:4623,code:"A02C0120",title:"Trade Math",school:"No Offerings",program:"No Offerings",programId:0},
   {id:4625,code:"A02C0130",title:"Blueprint Reading",school:"No Offerings",program:"No Offerings",programId:0},
   {id:4622,code:"A02C0140",title:"Shop",school:"No Offerings",program:"No Offerings",programId:0},
   {id:4975,code:"A02C0210",title:"Theory",school:"No Offerings",program:"No Offerings",programId:0},
   {id:4976,code:"A02C0220",title:"Trade Math",school:"No Offerings",program:"No Offerings",programId:0},
   {id:4977,code:"A02C0230",title:"Blueprint Reading",school:"No Offerings",program:"No Offerings",programId:0},
   {id:4978,code:"A02C0240",title:"Shop",school:"No Offerings",program:"No Offerings",programId:0},
   {id:4990,code:"A02C0310",title:"Theory",school:"No Offerings",program:"No Offerings",programId:0},
   {id:4991,code:"A02C0320",title:"Trade Math",school:"No Offerings",program:"No Offerings",programId:0},
   {id:4992,code:"A02C0330",title:"Blueprint Reading",school:"No Offerings",program:"No Offerings",programId:0},
   {id:4993,code:"A02C0340",title:"Shop",school:"No Offerings",program:"No Offerings",programId:0}];

   const courseListing = (state= courses, action) => {
   	switch(action.type){
   		// case 'SELECT_COURSE_PACK_YEAR':
   		// 	return  {...state,  selectedYearId: action.yearId};
       //
   		default:
   			return state;
   	}
   }
   export default courseListing;
