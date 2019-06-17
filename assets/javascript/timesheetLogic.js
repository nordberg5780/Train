         var firebaseConfig = {
        apiKey: "AIzaSyCPz-V1LilFJiGglonoe1-5IvU6jpHQYuI",
        authDomain: "test-f4b50.firebaseapp.com",
        databaseURL: "https://test-f4b50.firebaseio.com",
        projectId: "test-f4b50",
        storageBucket: "test-f4b50.appspot.com",
        messagingSenderId: "549393597045",
        appId: "1:549393597045:web:864dea74dda60fd3"
      };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Create a variable to reference the database
var database = firebase.database();

//</script> Initial Values
var EmployeeName = "";
var Role = "";
var StartDate = "";
var MonthlyRate = "";

// Capture Button Click
$("#add-employee-btn").on("click", function (event) {
    // Don't refresh the page!
    event.preventDefault();

    // YOUR TASK!!!
    // Code in the logic for storing and retrieving the most recent user.
    // Don't forget to provide initial data to your Firebase database.
    EmployeeName = $("#employee-name-input").val().trim();
    Role = $("#role-input").val().trim();
    StartDate = $("#start-input").val().trim();
    MonthlyRate = $("#rate-input").val().trim();
    var EmployeeData = {
        EmployeeName: EmployeeName,
        Role: Role,
        StartDate: StartDate,
        MonthlyRate: MonthlyRate,
    };
        database.ref().push(
            EmployeeData
        );

});

// Firebase watcher + initial loader HINT: .on("value")
database.ref().on("value", function (snapshot) {
    var sv = snapshot.val();
    // Log everything that's coming out of snapshot
    console.log(snapshot.val());
    console.log(snapshot.val().EmployeeName);
    console.log(snapshot.val().Role);
    console.log(snapshot.val().StartDate);
    console.log(snapshot.val().MonthlyRate);

    // Change the HTML to reflect
    $("#EmployeeName-display").text(snapshot.val().EmployeeName);
    $("#Role-display").text(snapshot.val().Role);
    $("#StartDate-display").text(snapshot.val().StartDate);
    $("#MonthlyRate-display").text(snapshot.val().MonthlyRate);

    // Handle the errors
}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});
database.ref().on("child_added",function(childSnapshot){
    console.log(childSnapshot.val().EmployeeName);
    console.log(childSnapshot.val().Role);
    console.log(childSnapshot.val().StartDate);
    console.log(childSnapshot.val().MonthlyRate);
});