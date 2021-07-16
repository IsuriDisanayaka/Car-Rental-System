hideAll();


$("#dashbord").css('display', 'block');

$('#viewDashBoard').click(function () {
    hideAll();
    $("#dashbord").css('display', 'block');
    $("#nav")
    $("#side")
});
//
$('#viewMyDeatils').click(function () {
    $("#tblCustomerApprove").focus();
    hideAll();
    $("#customerForm").css('display', 'block');

});
$('#viewCars').click(function () {
    $("#tblcar").focus();
    hideAll();
    $("#carForm").css('display', 'block');

});
$('#viewOrders').click(function () {
    // $("#tblcar").focus();
    hideAll();
    $("#orderForm").css('display', 'block');

});

function hideAll() {
    $("#customerForm,#dashbord,#carForm,#orderForm").css('display', 'none');

}
// car

function loadSearchCars() {
    let tp = $('#carstype').find(":selected").text();
    $('#tblCarSerch').empty();
    $.ajax({
        url: 'http://localhost:8080/Car_Rental_System_back_end_war_exploded/api/v1/car/type/'+tp,
        method: 'GET',
        success: function (res) {
            let values = res.data;
            for (i in values) {
                let id = values[i].carID;
                let brand = values[i].brand;
                let cartype = values[i].type;
                let colour = values[i].color;
                let passengers = values[i].passengers;
                let transmision = values[i].transmission;
                let fuel = values[i].fuel;
                let dailyRate = values[i].dailyRate;
                let freeKmForDay = values[i].freeKmForDay;
                let monthlyRate = values[i].monthlyRate;
                let freeKmForMonth = values[i].freeKmForMonth;
                let priceForExtraKM = values[i].priceForExtraKM;
                let regNumber = values[i].regNumber;
                let carQuntity = values[i].carQuntity;


                $('#SearchtblCar').append(`<tr><th>${id}</th><td>${brand}</td><td>${cartype}</td><td>${colour}</td><td>${passengers}</td><td>${transmision}</td><td>${fuel}</td>
<td>${dailyRate}</td><td>${freeKmForDay}</td><td>${monthlyRate}</td><td>${freeKmForMonth}</td><td>${priceForExtraKM}</td>
<td>${regNumber}</td><td>${carQuntity}</td><td><button class="btn btn-secondary">View Image</button></td></tr>`)

                $('#SearchtblCar tr').off('click');

                $('#SearchtblCar tr').on('click', function () {
                    let carid = $($(this).children().get(0)).text();
                    $('#carid').val(carid);
                });
            }
        }
    });
}
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
$("#btnSearchCar").click(function () {
    loadSearchCars();
});



// customer
$("#btnSearchCustomer").click(function () {
    loadSearchCustomer();
});

function loadSearchCustomer() {
    let tp = $('#inputcustomerName').val();
    $.ajax({
        url: 'http://localhost:8080/Car_Rental_System_back_end_war_exploded/api/v1/customer/name/'+tp,
        method: 'GET',
        success: function (res) {
            let values = res.data;
            for (i in values) {
                let id = values[i].id;
                let name = values[i].name;
                let contact = values[i].contact;
                let email = values[i].email;
                let address= values[i].address;
                let nicNo = values[i].nicNo;
                let drivinglicenceNo = values[i].drivinglicenceNo;

          id= $("#custId").val();
          name=$("#custname").val();
          contact=$("#custContact").val();
          email=$("#custEmail").val();
          address=$("#custAddress").val();
          nicNo=$("#custnic").val();
          drivinglicenceNo=$("#custDriving").val();



            }
        }
    });
}




//order
$("#btnPlaceOrder").click(function(){
        var fileObject1 = $("#payment")[0].files[0];//access file object from input field
        var fileName1 = $("#payment")[0].files[0].name; //get file name
        var data1 = new FormData(); //setup form data object to send file data
        data1.append("myFile", fileObject1, fileName1); //append data
        $.ajax({
            url: "http://localhost:8080/Car_Rental_System_back_end_war_exploded/api/v1/order",
            method: 'post',
            async: true,
            processData: false, //stop processing data of request body
            contentType: false, // stop setting content type by jQuery
            data: data1,
            success: function () {
                       let bookingID=$("#orderid").val();
                        let carID = $("#carid").val();
                        let driver = $("#driverOrnot").val();
                        let pickUpdate = $("#pickupdate").val();
                        let returndate = $("#returndate").val();
                        let payment = $("#payment").val();

                        $.ajax({
                            method: "POST",
                            url: "http://localhost:8080/Car_Rental_System_back_end_war_exploded/api/v1/customer",
                            contentType: 'application/json',
                            async: true,
                            data: JSON.stringify({
                                bookingID:bookingID,
                                carID:carID,
                               driver:driver,
                                pickUpdate:pickUpdate,
                                returndate:returndate,
                                payment:payment,

                            }),
                            success: function (data) {
                                console.log(data);
                                alert("Sucess!")
                            }
                        });



            }
        });

});