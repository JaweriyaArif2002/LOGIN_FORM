var list1 = [];
		var list2 = [];
		var list3 = [];
		

		var n = 1;
		var x = 0;

        function addition(oNumber,oName,oPath)
        {
            this.oNumber=oNumber,
            this.oName=oName,
            this.oPath=oPath
        }

		function AddRow(){

			
            var oNumber = document.getElementById("oNumber").value;
            var oName = document.getElementById("oName").value;
            var oPath = document.getElementById("oPath").value;

			
			var opptionalForms=new addition(oNumber,oName,oPath);
			// console.log(opptionalForms);
            firebase.database().ref('optionalForm').push(opptionalForms);
           
            // console.log(firebase.database);
		
        }
        
        
            firebase.database().ref('optionalForm').on('child_added',function(data)
            {
                console.log(data.val())
                 var AddRown = document.getElementById('show');
                 var NewRow = AddRown.insertRow(n);
                 list1[x] = data.val().oNumber;
			     list2[x] = data.val().oName;
			     list3[x] = data.val().oPath;

                 var cel1 = NewRow.insertCell(0);
			     var cel2 = NewRow.insertCell(1);
			     var cel3 = NewRow.insertCell(2);
			      cel1.innerHTML = list1[x];
			      cel2.innerHTML = list2[x];
			      cel3.innerHTML = list3[x];
                 n++;
                 x++;
            })
    