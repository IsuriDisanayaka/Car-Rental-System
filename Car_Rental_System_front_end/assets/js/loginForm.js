$("#btncreate").click(function(){
    if (checkvalidationCustomer()) {
        var fileObject1 = $("#inputNicPhotos")[0].files[0];//access file object from input field
        var fileName1 = $("#inputNicPhotos")[0].files[0].name; //get file name
        var data1 = new FormData(); //setup form data object to send file data
        data1.append("myFile", fileObject1, fileName1); //append data
        $.ajax({
            url: "http://localhost:8080/Car_Rental_System_back_end_war_exploded/api/v1/customer",
            method: 'post',
            async: true,
            processData: false, //stop processing data of request body
            contentType: false, // stop setting content type by jQuery
            data: data1,
            success: function () {


                var fileObject2 = $("#inputDrivingLicencePhotos")[0].files[0];//access file object from input field
                var fileName2 = $("#inputDrivingLicencePhotos")[0].files[0].name; //get file name
                var data2 = new FormData(); //setup form data object to send file data
                data2.append("myFile", fileObject2, fileName2); //append data
                $.ajax({
                    url: "http://localhost:8080/Car_Rental_System_back_end_war_exploded/api/v1/customer",
                    method: 'post',
                    async: true,
                    processData: false, //stop processing data of request body
                    contentType: false, // stop setting content type by jQuery
                    data: data2,
                    success: function () {


                        let customerID=$("#inputID").val();
                        let customerName = $("#inputName").val();
                        let customerContact = $("#inputContactNo").val();
                        let customerEmail = $("#inputEmail").val();
                        let customerAddress = $("#inputAddress").val();
                        let customerDrivingLicenceNo = $("#inputDrivingLicence").val();
                        let customerDrivingPhoto=$("#inputDrivingLicencePhotos").val();
                        let customerNic = $("#inputNIC").val();
                        let customerNicPhoto=$("#inputNicPhotos").val();
                        let customerUserName= $("#inputUserName").val();
                        let customerPassword= $("#inputPassword").val();

                        $.ajax({
                            method: "POST",
                            url: "http://localhost:8080/Car_Rental_System_back_end_war_exploded/api/v1/customer",
                            contentType: 'application/json',
                            async: true,
                            data: JSON.stringify({
                               id:customerID,
                                name:customerName,
                               contact:customerContact,
                                email:customerEmail,
                                address:customerAddress,
                                drivinglicenceNo:customerDrivingLicenceNo,
                                drivingphoto:customerDrivingPhoto,
                                nicNo:customerNic,
                                nicphotos:customerNicPhoto,
                                userName:customerUserName,
                                password:customerPassword,
                            }),
                            success: function (data) {
                                console.log(data);
                               clearRegFeild();
                                alert("Sucess!")
                            }
                        });
                    }

                });
            }
        });
    }
});

 loadAllCustomer();

function checkvalidationCustomer() {

    let name = $('#inputName').val();
    let contact = $('#inputContactNo').val();
    let email = $('#inputEmail').val();
    let address = $('#inputAddress').val();
    let drivingLicenceNo = $('#inputDrivingLicence').val();
    let nic = $('#inputNIC').val();
    let userName = $('#inputUserName').val();
    let password = $('#inputPassword').val();

    if (name!=""){
        if (contact!=""){
            if(email!=""){
                if (address!=""){
                    if (drivingLicenceNo!=""){
                        if (nic!=""){

                                    return true;
                                }else{
                                    alert("Please Enter Password");
                                    return false;
                                }
                            }else{
                                alert("Please Enter Username");
                                return false;
                            }
                        }else{
                            alert("Please Enter NIC");
                            return false;
                        }
                    }else{
                        alert("Please Enter Driving Licence No");
                        return false;
                    }
                }else{
                    alert("Please Enter Address");
                    return false;
                }
            }else{
                alert("Please Enter Email Address");
                return false;
            }



}

$('#login').click(function () {
    let userName = $('#uname').val();
    let password = $('#password').val();
    if (userName == ""){
        alert('Enter User Name..!');
    }else if(password == ""){
        alert('Enter Password..!');
    }else if(userName=="isuri" ,password=="1234"){
    alert("welcome Admin!")  ;
       window.location.replace("adminDashboard.html")
    }


});

function clearRegFeild() {
 $("#inputID").val("");
   $("#inputName").val("");
   $("#inputContactNo").val("");
    $("#inputEmail").val("");
     $("#inputAddress").val("");
    $("#inputDrivingLicence").val("");
    $("#inputDrivingLicencePhotos").val("");
    $("#inputNIC").val("");
   $("#inputNicPhotos").val("");
    $("#inputUserName").val("");
     $("#inputPassword").val("");

}
function loadAllCustomer() {
    $("#tblCustomerApprove") .empty();
    $.ajax({
        url:"http://localhost:8080/Car_Rental_System_back_end_war_exploded/api/v1/customer",
        method:"GET",
        async:true,
        dataType:"json",
        success:function (data,textState,xhr) {
            for (let i of  data.data) {
                var row = `<tr><td>${i.id}</td><td>${i.name}</td><td>${i.contact}</td><td>${i.email}</td><td>${i.address}</td><td>${i.drivinglicenceNo}</td><td>${i.drivingphoto}</td><td>${i.nicNo}</td><td>${i.nicphotos}</td><td>${i.userName}</td><td>${i.password}</td></tr>`;

                $("#tblCustomerApprove").append(row)
                $('#tblCustomerApprove tr').off('click');

                $('#tblCustomerApprove tr').on('click', function () {
                    let custid = $($(this).children().get(0)).text();
                    $('#custidRE').val(custid);
                });
            }

        }
    })


}
//
// $("#login").click(function () {
//     let data = $("#loginForm").serializeArray();
//     $.ajax({
//         url: "http://localhost:8080/Car_Rental_System_back_end_war_exploded/api/v1/login/${data[0].value}/${data[1].value}",
//     method: "GET",
//         success:function (data) {
//           pageload(data);
//         }
//
//
// });
// });
//
// function pageload(result) {
//     if (result.data == "CUSTOMERDETAILRIGHT") {
//         sessionStorage.setItem("result", "success");
//         window.location.replace("../customerForm.html");
//     }
//
//     if (result.data == "CUSTOMERDETAILWRONG") {
//         //console out
//     }
//
//     if (result.data == "CUSTOMERNOTFOUND") {
//         //console out
//     }
// }


