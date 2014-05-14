
  var indexCount = 1;

  var createTaskRow = function(task, count){
       indexCount = indexCount + 1;
       var template = 
        '<tr class="rowstyle" onClick="removeRow(' + count + ')" id="row-'+count+'" data-task="'+ task + '" data-index="'+ indexCount +'">'
      + ' <td class="col-md-4  " >' + '<h5>' + "Task: " + count  + '</h5>' + '</td>'
      + ' <td class="col-md-4  " >' + '<h5>' + task + '</p>'  + '</h5>'
      + '</tr>'
      ;

      return $(template);
  };

  var removeRow = function(count){
    var tmp = '#row-' + count;
    var rowNumber = parseInt(indexCount);
    $(tmp).remove();
    indexCount = indexCount - 1;
    
  };


$(document).ready( function() {
  $('form').on('submit', function(event){
    event.preventDefault();
    
    
    $.ajax('', {
      type: 'POST',
      data: {"task": $('#task').val(), "indexCount":indexCount},
      success: function(){        
        var tmp = $('#task').val();

        if (tmp == ''){
          alert("Please enter a task..");
        }
        else{
          var $tmpRow = createTaskRow(tmp, indexCount.toString());
          $('.task-table').prepend($tmpRow);
          $('#task').val('');
         }
      }
    })
  });
});






