hideAll();


$("#dashbord").css('display', 'block');

$('#viewDashBoard').click(function () {
    hideAll();
    $("#dashbord").css('display', 'block');
    $("#nav")
    $("#side")
});
//
$('#viewCustomer').click(function () {
    $("#tblCustome").focus();
    hideAll();
    $("#customerForm").css('display', 'block');

});

$('#viewDrivers').click(function () {
    $("#driverTable").focus();
    hideAll();
    $("#driverForm").css('display', 'block');

});

$('#viewCars').click(function () {
    // $("#tblCustomerApprove").focus();
    hideAll();
    $("#carForm").css('display', 'block');

});
$('#viewrequest').click(function () {
     $("#tblCustomerApprove").focus();
    hideAll();
    $("#request").css('display', 'block');

});
function hideAll() {
    $("#customerForm,#dashbord,#driverForm,#carForm,#request").css('display', 'none');

}




// function  for backend

           // *driver

$("#btnSaveDrivers").click(function () {
    let driverID=$("#driverId").val();
    let driverName=$("#driverName").val();
    let driverAddress=$("#driverAddress").val();
    let driverContact=$("#driverContact").val();
    let driverNic=$("#driverNic").val();
    let driverLicence=$("#driverLicence").val();
    let driverUserName=$("#driverUserName").val();
    let driverPassword=$("#driverPassword").val();

    $.ajax({
        method:"POST",
        url:"http://localhost:8080/Car_Rental_System_back_end_war_exploded/api/v1/driver",
        contentType: 'application/json',
        async: true,
        data:JSON.stringify({
            id:driverID,
            name:driverName,
            address:driverAddress,
            contact:driverContact,
            nicNo:driverNic,
            drivinglicenceNo:driverLicence,
            userName:driverUserName,
            password :driverPassword,
        }),
        success:function (data) {
            console.log(data);
            loadAllDrivers();
            clearDriverFeild();
        }
    })
})
loadAllDrivers();
function loadAllDrivers(){
    $("#tbldriver").empty();
    $.ajax({
        url:"http://localhost:8080/Car_Rental_System_back_end_war_exploded/api/v1/driver",
        method:"GET",
        async:true,
        dataType:"json",
        success:function (data,textState,xhr) {
            for (let i of data.data){
                var row=`<tr><td>${i.id}</td><td>${i.name}</td><td>${i.address}</td><td>${i.contact}</td>
<td>${i.nicNo}</td><td>${i.drivinglicenceNo}</td><td>${i.userName}</td><td>${i.password}</td></tr>`;
          $("#tbldriver").append(row)
            }

        }
    })
}
$("#btnRemoveDrivers").click(function () {
    alert("done")
    let driverID= $("#driverId").val();

    $.ajax({
        method: "DELETE",
        url:"http://localhost:8080/Car_Rental_System_back_end_war_exploded/api/v1/driver?id="+driverID,
        contentType: 'application/json',
        async: true,
        success:function (data,textState,xhr) {
            console.log(data);
            loadAllDrivers();



        }

    })

})
$("#btnUpdateDrivers").click(function () {
    let driverID=$("#driverId").val();
    let driverName=$("#driverName").val();
    let driverAddress=$("#driverAddress").val();
    let driverContact=$("#driverContact").val();
    let driverNic=$("#driverNic").val();
    let driverLicence=$("#driverLicence").val();
    let driverUserName=$("#driverUserName").val();
    let driverPassword=$("#driverPassword").val();

    $.ajax({
        method:"PUT",
        url:"http://localhost:8080/Car_Rental_System_back_end_war_exploded/api/v1/driver",
        contentType: 'application/json',
        async: true,
        data:JSON.stringify({
            id:driverID,
            name:driverName,
            address:driverAddress,
            contact:driverContact,
            nicNo:driverNic,
            drivinglicenceNo:driverLicence,
            userName:driverUserName,
            password :driverPassword,
        }),
        success:function (data) {
            console.log(data);
            loadAllDrivers();
        }
    })
})

function clearDriverFeild() {
    $("#driverId").val("");
   $("#driverName").val("");
   $("#driverAddress").val("");
   $("#driverContact").val("");
    $("#driverNic").val("");
   $("#driverLicence").val("");
   $("#driverUserName").val("");
  $("#driverPassword").val("");



}

// Car
$("#btnSaveCars").click(function () {

    var fileObject1=$("#inputPhotos")[0].files[0];
    var fileName1=$("#inputPhotos")[0].files[0].name;
    var data1 =new FormData();
    data1.append("myFile",fileObject1,fileName1);

    $.ajax({
        url:"http://localhost:8080/Car_Rental_System_back_end_war_exploded/api/v1/car",
        method: 'post',
        async:true,
        processData:false,
        contentType:false,
        data:data1,
        success:function () {
            alert("Photo Uploaded")

            let  carID= $("#carID").val();
            let  carbrand = $("#brand").val();
            let cartype = $("#type").val();
            let carphoto = $("#inputPhotos").val();
            let carcolor = $("#color").val();
            let carpassengers = $("#passengers").val();
            let cartransmission = $("#transmission").val();
            let carfuel = $("#fuel").val();
            let cardailyRate = $("#dailyRate").val();
            let carfreeKmForDay = $("#freeKmForDay").val();
            let carmonthlyRate = $("#monthlyRate").val();
            let carfreeKmForMonth = $("#freeKmForDay").val();
            let carpriceForExtraKM = $("#priceForExtraKM").val();
            let carregNumber = $("#regNumber").val();
            let carQuntity = $("#carQuntity").val();

            $.ajax({
                method: "POST",
                url: "http://localhost:8080/Car_Rental_System_back_end_war_exploded/api/v1/car",
                contentType: 'application/json',
                async: true,
                data: JSON.stringify({
                    carID:carID,
                    brand:carbrand,
                    type:cartype,
                    photo:carphoto,
                    color:carcolor,
                    passengers:carpassengers,
                    transmission:cartransmission,
                    fuel:carfuel,
                    dailyRate:cardailyRate,
                    freeKmForDay:carfreeKmForDay,
                    monthlyRate:carmonthlyRate,
                    freeKmForMonth:carfreeKmForMonth,
                    priceForExtraKM:carpriceForExtraKM,
                    regNumber:carregNumber,
                    carQuntity:carQuntity,
                }),
                success:function (data) {
                    console.log(data);
                  loardAllCars();
                }
            });

        }
    });

});
$("#btnRemoveCars").click(function () {
    alert("Done")
    let carID=$("#carID").val();

    $.ajax({
        method:"DELETE",
        url:"http://localhost:8080/Car_Rental_System_back_end_war_exploded/api/v1/car?id="+carID,
        contentType: 'application/json',
        async:true,
        success:function (data,textState,xhr) {
            console.log(data);
            loardAllCars();

        }
    })

});
loardAllCars();
function loardAllCars(){
    $("#tblCar").empty();
    $.ajax({
        url:"http://localhost:8080/Car_Rental_System_back_end_war_exploded/api/v1/car",
        method:"GET",
        async:true,
        dataType:"json",
        success:function (data,textState,xhr) {
            for (let i of data.data){
                var row=`<tr><td>${i.carID}</td><td>${i.brand}</td><td>${i.type}</td><td>${i.photo}</td><td>${i.color}</td><td>${i.passengers}</td><td>${i.transmission}</td><td>${i.fuel}</td><td>${i.dailyRate}</td>
<td>${i.freeKmForDay}</td><td>${i.monthlyRate}</td><td>${i.freeKmForMonth}</td><td>${i.priceForExtraKM}</td><td>${i.regNumber}</td><td>${i.carQuntity}</td></tr>`
          $("#tblCar").append(row)
            }
        }
    })
}




// Customer

$("#btnRemoveCustomer").click(function () {

    let cr_customerID= $("#InputIdN").val();

    $.ajax({
        method: "DELETE",
        url:"http://localhost:8080/Car_Rental_System_back_end_war_exploded/api/v1/customer?id="+cr_customerID,
        contentType: 'application/json',
        async: true,
        success:function (data,textState,xhr) {
            console.log(data);
            loadAllCustomer();
            alert("done")
            $("#InputIdN").val("");


        }

    })

})
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



    });

}

$("#btnApprove").click(function () {
loadAllCustomerApproved();
})
function loadAllCustomerApproved() {
    $("#tblCustomer") .empty();
    $.ajax({
        url:"http://localhost:8080/Car_Rental_System_back_end_war_exploded/api/v1/customer",
        method:"GET",
        async:true,
        dataType:"json",
        success:function (data,textState,xhr) {
            for (let i of  data.data) {
                var row = `<tr><td>${i.id}</td><td>${i.name}</td><td>${i.contact}</td><td>${i.email}</td><td>${i.address}</td><td>${i.drivinglicenceNo}</td><td>${i.drivingphoto}</td><td>${i.nicNo}</td><td>${i.nicphotos}</td><td>${i.userName}</td><td>${i.password}</td></tr>`;

                $("#tblCustomer").append(row)

            }

        }
    })

}