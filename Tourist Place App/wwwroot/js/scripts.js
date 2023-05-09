var srcData = null;
var noImage = "data:image/png;base64,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";
var srch = ""
var sort = ""
var thisPicture = null;
var httpCreateRequest = new XMLHttpRequest();
var httpUpdateRequest = new XMLHttpRequest();
var httpDeleteRequest = new XMLHttpRequest();
var httpSearchAndSortRequest = new XMLHttpRequest();
var httpGetTouristPlaceRequest = new XMLHttpRequest();

$(document).ready(function () {

   $("#img").change(function (event) {
      let reader = new FileReader();
      let f = event.target.files[0];

      reader.onloadend = function () {
         srcData = reader.result
         $("#loaded_image").attr("src", srcData);
         $("#img").hide();
         console.log(srcData);
         $("#picked_image").show();
      }
      reader.readAsDataURL(f);
   });

   $("#choose_again").click(function () {
      ChooseAgain();
   });

   function ChooseAgain() {
      $("#img").show();
      $("#img").val(null);
      srcData = null;
      thisPicture = null;
      $("#picked_image").hide();
   }

   $("#Submit").click(function () {
      let pos = $(this).data("id");
      let searchbar = $("#searchbar");
      let isValid = CheckValidation();
      if (isValid) {
         searchbar.val("");
         AddList(pos);
         ResetForm();
      } else {
         ShowError();
      }   
   });

   function ShowError() {
      if ($("#name").val() == "") {
         $("#name_field").css("borderRadius", "5px");
         $("#name_field").css("border", "1px solid red");
         $("#name_required").css("display", "block");
      }
      if ($("#address").val() == "") {
         $("#address_field").css("borderRadius", "5px");
         $("#address_field").css("border", "1px solid red");
         $("#address_required").css("display", "block");
      }
      if (($("#rating").val() > 5) || $("#rating").val() < 1) {
         $("#rating_field").css("borderRadius", "5px");
         $("#rating_field").css("border", "1px solid red");
         $("#rating_required").css("display", "block");
      }
   }

   function CheckValidation() {
      if ($("#name").val() != "" && $("#address").val() != "" && ($("#rating").val() >= 1 && $("#rating").val() <= 5)) {
         return true;
      } else {
         return false;
      }
   }

   function ValidField() {
      $("#name_field").css("border", "0px");
      $("#name_required").css("display", "none");
      $("#address_field").css("border", "0px");
      $("#address_required").css("display", "none");
      $("#rating_field").css("border", "0px");
      $("#rating_required").css("display", "none");
   }

   function makeRearchAndSortRequest(url, data) {
      httpSearchAndSortRequest.onreadystatechange = alertSearchSortContents;
      httpSearchAndSortRequest.open('POST', url, false);
      httpSearchAndSortRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      httpSearchAndSortRequest.send(data);
   }

   function alertSearchSortContents() {
      if (httpSearchAndSortRequest.readyState === XMLHttpRequest.DONE) {
         if (httpSearchAndSortRequest.status === 200) {
            $("#tourist_place_table").html(this.response)
         } else {
            alert("There was a problem with the request.");
         }
      }
   }

   function makeDeleteRequest(url, data) {
      httpDeleteRequest.onreadystatechange = alertDeleteContents;
      httpDeleteRequest.open('POST', url, true);
      httpDeleteRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      httpDeleteRequest.send(data);
   }

   function alertDeleteContents() {
      if (httpDeleteRequest.readyState === XMLHttpRequest.DONE) {
         if (httpDeleteRequest.status === 200) {
            $("#tourist_place_table").html(this.response);
         } else {
            alert("There was a problem with the request.");
         }
      }
   }

   function AddList(pos) {
      var url;
  
      if (pos == "0") {
         url = "https://localhost:7176/TouristPlaces/Create";
         var data = new FormData();
         data.append('Id', 0);
         data.append('Name', $("#name").val());
         data.append('Address', $("#address").val());
         data.append('Rating', $("#rating").val());
         data.append('Type', $("#type").val());
         if (srcData != undefined || srcData != null) {
            data.append('Picture', srcData);
            srcData = null;
         } else {
            data.append('Picture', noImage);
         }

         var xhr = new XMLHttpRequest();
         xhr.open('POST', url, true);
         xhr.onload = function () {
            $("#tourist_place_table").html(this.response)
            window.location.replace("#create");
         };
         xhr.send(data);
      } else {
         url = "https://localhost:7176/TouristPlaces/Edit";
         var data = new FormData();
         data.append('Id', pos);
         data.append('Name', $("#name").val());
         data.append('Address', $("#address").val());
         data.append('Rating', $("#rating").val());
         data.append('Type', $("#type").val());
         if (srcData != undefined || srcData != null) {
            data.append('Picture', srcData);
            srcData = null;
         } else if (thisPicture != null) {
            data.append('Picture', thisPicture);  
         } else {
            data.append('Picture', noImage);
         }

         var xhr = new XMLHttpRequest();
         xhr.open('POST', url, true);
         xhr.onload = function () {

            $("#tourist_place_table").html(this.response)
            window.location.replace("#"+pos);
         };
         xhr.send(data);
         
         var submit_button = $("#Submit");
         submit_button.val("Submit");
         submit_button.data("id", "0"); 
      }
   }

   function ResetForm() {
      $("#name").val(null);
      $("#address").val(null);
      $("#type").val("Beach");
      $("#rating").val(1);
      $("#img").val(null);
      $("#form_header").html("<b>Add a New Tourist Place</b>");
      ChooseAgain();
      ValidField();
   }
   
   function UpdateForm() {
      if (httpGetTouristPlaceRequest.readyState === XMLHttpRequest.DONE) {
         if (httpGetTouristPlaceRequest.status === 200) {
            const myObj = JSON.parse(this.responseText);
            $("#name").val(myObj.name);
            $("#address").val(myObj.address);
            $("#rating").val(myObj.rating);
            $("#type").val(myObj.type);
            if (myObj.picture != null && myObj.picture != noImage && myObj.picture != "") {
               $("#loaded_image").attr("src", myObj.picture);
               thisPicture = myObj.picture;
               $("#img").hide();
               $("#picked_image").show();
            }
         } else {
            alert("There was a problem with the request.");
         }
      }
      window.location.replace("#form_header");
   }

   $(document).on("click", ".update_button", function () {
      let row = $(this).closest("tr");
      let submit_button = $("#Submit");
      submit_button.val("Update");
      submit_button.data("id", row.attr("id"));
      $("#form_header").html("<b>Update Tourist Place</b>");
      GetTouristPlaceRequest(row.attr("id"));
   });

   function GetTouristPlaceRequest(id) {
      let url = "https://localhost:7176/TouristPlaces/GetTouristPlace?id="+id;
      httpGetTouristPlaceRequest.onreadystatechange = UpdateForm;
      httpGetTouristPlaceRequest.open('GET', url);
      httpGetTouristPlaceRequest.send();
   }

   $(document).on("click", ".delete_button", function () {
      let confirmation = confirm("Are you sure to delete this row?");

      if (confirmation) {
         let ID = $(this).closest('tr').attr("id");
         let url = "https://localhost:7176/TouristPlaces/DeleteConfirmed";
         let data = "id="+ID;
         makeDeleteRequest(url, data);
      }
   });

   $("#searchbar").keyup(function () {
      input_value = $(this).val();
      srch = input_value;
      SearchAndSort();
   });

   $(document).on("click", "#dsc", function () {
      sort = "dsc";
      SearchAndSort();
   });

   $(document).on("click", "#asc", function () {
       sort = "asc";
      SearchAndSort();
   });

   function SearchAndSort() {
      let url = "https://localhost:7176/TouristPlaces/SearchAndSort"
      var data = "sortOrder=" + sort + "&srchKey=" + srch;
      makeRearchAndSortRequest(url, data);
   }

   $("#Reset").click(function () {
      var submit_button = $("#Submit");
      submit_button.val("Submit");
      submit_button.data("id", "0");
      $("#form_header").html("<b>Add a New Tourist Place</b>");
      ChooseAgain();
      ValidField();
   });

   $("#icon").click(function () {
      let items = $(".navigation_box");
      items.css("display" , "flex");
   });
});