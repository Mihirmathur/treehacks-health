
$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
  $('#post').click(function(){
var quest= $('#message-text').val();
var t1=$('#tg1').val();
var t2=$('#tg2').val();
$('#tg1').val("");
$('#tg2').val("");
$('#message-text').val("");
	console.log(quest);
	modal.toggle();
	

var Question = React.createClass({
	getDefaultProps : function() {
		return {question : quest,
			tag1: t1,
			tag2: t2};
	},
	render: function(){
		return <li>
				<div className="votes"><a className="uparrow">&uarr;</a><div>1010</div></div>
					<div className="element">
						<a>{this.props.question}</a>
						<div>
							<a>asked by {this.props.user}</a>
							<a>discuss</a>
							<a>save</a>
							<a>share</a>
							<ul className="tags">
								<li><a>#{this.props.tag1}</a></li>
								<li><a>#{this.props.tag2}</a></li>
								
							</ul>
					</div>
				</div>
		</li>;
	}
});

	ReactDOM.render(<ul id='questions'>
	<Question user="Mihir"/> 
	</ul>, document.getElementById('question')); 
});

});