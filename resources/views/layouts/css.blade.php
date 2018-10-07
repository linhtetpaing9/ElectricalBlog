
<style>
	@import url('https://mmwebfonts.comquas.com/fonts/?font=pyidaungsu');
	@import url('https://mmwebfonts.comquas.com/fonts/?font=zawgyi');
	
	#Zawgyi {
	    font-family: "Zawgyi-One" !important;
	}
	html,body
	{
		width: 100%;
		margin: 0px;
		padding: 0px;
		overflow-x: hidden;
		font-family: "Pyidaungsu","MON3 Anonta 1" !important;
	}
	h1,h2,h3,h4,h5,h6, li{
		font-family: "Pyidaungsu","MON3 Anonta 1" !important;
	}
	input{
		font-family: "Zawgyi-One" !important;
	}
	.scrollToTop{
	    text-align:center; 
	    background: transparent;
	    font-weight: bold;
	    color: #444;
	    text-decoration: none;
	    position:fixed;
	    top:205px;
	    right:50px;
	    display:none;
	}
	.scrollToTop:hover{
	    text-decoration:none;
	}

	.bc-icons-2 .breadcrumb-item + .breadcrumb-item::before {
	    content: none; }
	.bc-icons-2 .breadcrumb-item.active {
	    color: #455a64; }
</style>
<link href="{{ asset('css/main-page.css') }}" rel="stylesheet">

@yield('css')