
$ ->
	console.log 'in app.coffee'

	# $.sidr 'toggle', 'sidr'
	$("#simple-menu").sidr()

	$(".imenu").click (e) ->
		$.sidr 'toggle'