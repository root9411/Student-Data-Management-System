

$('#download_btn').click(function(){
    

    let comment = "Do You Want to Download Data"
    if(confirm(comment) == true){
        fetch('http://localhost:3000/api/users')
        .then(res => res.json())
        .then(data => handle(data))
    }else{
        alert("File Not Downloaded")
        console.log("file Not Downloaded")
    }

    function handle(inputData){
        const headers = Object.keys(inputData[0]).toString();
        
        const main = inputData.map((item)=>{
            return Object.values(item).toString();
        })

        const csv = [headers, ...main].join('\n');
        startCSVDownload(csv);
        alert("File Download Successfuly")
    }

    function startCSVDownload(input){

        const blob = new Blob([input], {type :'application/csv'});
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.download = 'test-csv.csv';
        a.href = url;
        a.style.display = 'none';

        document.body.appendChild(a);

        a.click();

        a.remove();
        URL.revokeObjectURL(url);


    }
});

$("#add_user").submit(function(event){
    alert("Data Inserted Successfully!");
    document.location.href="/";
})

$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })


    var request = {
        "url" : `http://localhost:3000/api/users/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Data Updated Successfully!");
    })

})

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:3000/api/users/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Do you really want to delete this record?")){
            $.ajax(request).done(function(response){
                alert("Data Deleted Successfully!");
                location.reload();
            })
        }

    })
}