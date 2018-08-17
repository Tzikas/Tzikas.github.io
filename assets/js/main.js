/*
	Big Picture by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$all = $body.add($header);

	// Breakpoints.
		breakpoints({
			xxlarge: [ '1681px',  '1920px' ],
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '1001px',  '1280px' ],
			medium:  [ '737px',   '1000px' ],
			small:   [ '481px',   '736px'  ],
			xsmall:  [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			console.log('window loaded')
			setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Touch mode.
		if (browser.mobile)
			$body.addClass('is-touch');

		breakpoints.on('<=small', function() {
			$body.addClass('is-touch');
		});

		breakpoints.on('>small', function() {
			$body.removeClass('is-touch');
		});

	// Fix: IE flexbox fix.
		if (browser.name == 'ie') {

			var $main = $('.main.fullscreen'),
				IEResizeTimeout;

			$window
				.on('resize.ie-flexbox-fix', function() {

					clearTimeout(IEResizeTimeout);

					IEResizeTimeout = setTimeout(function() {

						var wh = $window.height();

						$main.each(function() {

							var $this = $(this);

							$this.css('height', '');

							if ($this.height() <= wh)
								$this.css('height', (wh - 50) + 'px');

						});

					});

				})
				.triggerHandler('resize.ie-flexbox-fix');

		}

	// Gallery.
		$window.on('load', function() {

			/*var $gallery = $('.gallery');
	
			$gallery.poptrox({
				baseZIndex: 10001,
				useBodyOverflow: false,
				usePopupEasyClose: false,
				overlayColor: '#1f2328',
				overlayOpacity: 0.65,
				usePopupDefaultStyling: false,
				usePopupCaption: true,
				popupLoaderText: '',
				windowMargin: 50,
				usePopupNav: true
			});

			// Hack: Adjust margins when 'small' activates.
				breakpoints.on('>small', function() {
					$gallery.each(function() {
						$(this)[0]._poptrox.windowMargin = 50;
					});
				});

				breakpoints.on('<=small', function() {
					$gallery.each(function() {
						$(this)[0]._poptrox.windowMargin = 5;
					});
				});
		*/
		});


		let s = .25;
		$(".green:after").each(function(index){
			 $(this).css({
				  'transition-delay' : s*(1+index) + 's'
			 });
		 });

		$('.gallery').on('click', 'article', function(){
			//console.log(this);
			$(this).find('iframe').addClass('active')
		})


		$('form').submit(function(e){
			e.preventDefault();			
			//https://mysterious-brushlands-12496.herokuapp.com/sendEmail
			$('form').append(`<i class="msg" style="color:lightgreen";>Sending... Just a moment</i>`)
			//
			$.get(`https://mysterious-brushlands-12496.herokuapp.com/sendEmail?${ $( this ).serialize() }`, function(data){
				console.log('success',data) 
				$('textarea, input[name=name], input[name=email]').val('') 
				$('.msg').remove() 
				$('form').append(`<i class="msg" style="color:green";>Your message was successfully sent!</i>`)
			}).fail(function(err) {
				console.log('err',err) 
			
				$('textarea, input[name=name], input[name=email]').val('') 
				$('.msg').remove() 			
				$('form').append(`<i class="msg" style="color:red";>Something went wrong :(.  Try emailing niko.tzikas@gmail.com</i>`)
			
			})
		})

		$(window).on('wheel', function(event) {
			if($(window).scrollTop() < 10) {
				$('#right, #left').addClass('shoot');
			}
		})
	// Section transitions.
		if (browser.canUse('transition')) {

			var on = function() {

				// Galleries.
					$('.gallery')
						.scrollex({
							top:		'30vh',
							bottom:		'30vh',
							delay:		50,
							initialize:	function() { $(this).addClass('inactive'); },
							terminate:	function() { $(this).removeClass('inactive'); },
							enter:		function() { $(this).removeClass('inactive'); },
							leave:		function() { $(this).addClass('inactive'); }
						});

				// Generic sections.
					$('.main.style1')
						.scrollex({
							mode:		'middle',
							delay:		100,
							initialize:	function() { $(this).addClass('inactive'); },
							terminate:	function() { $(this).removeClass('inactive'); },
							enter:		function() { $(this).removeClass('inactive'); },
							leave:		function() { $(this).addClass('inactive'); }
						});

					$('.main.style2')
						.scrollex({
							mode:		'middle',
							delay:		100,
							initialize:	function() { $(this).addClass('inactive'); },
							terminate:	function() { $(this).removeClass('inactive'); },
							enter:		function() { $(this).removeClass('inactive'); },
							leave:		function() { $(this).addClass('inactive'); }
						});

				// Contact.
					$('#contact')
						.scrollex({
							top:		'50%',
							delay:		50,
							initialize:	function() { $(this).addClass('inactive'); },
							terminate:	function() { $(this).removeClass('inactive'); },
							enter:		function() { $(this).removeClass('inactive'); },
							leave:		function() { $(this).addClass('inactive'); }
						});

			};

			var off = function() {

				// Galleries.
					$('.gallery')
						.unscrollex();

				// Generic sections.
					$('.main.style1')
						.unscrollex();

					$('.main.style2')
						.unscrollex();

				// Contact.
					$('#contact')
						.unscrollex();

			};

			breakpoints.on('<=small', off);
			breakpoints.on('>small', on);

		}

	// Events.
		var resizeTimeout, resizeScrollTimeout;

		$window
			.on('resize', function() {

				// Disable animations/transitions.
					$body.addClass('is-resizing');

				clearTimeout(resizeTimeout);

				resizeTimeout = setTimeout(function() {

					// Update scrolly links.
						$('a[href^="#"]').scrolly({
							speed: 1500,
							offset: $header.outerHeight() - 1
						});

					// Re-enable animations/transitions.
						setTimeout(function() {
							$body.removeClass('is-resizing');
							$window.trigger('scroll');
						}, 0);

				}, 100);

			})
			.on('load', function() {
				$window.trigger('resize');
			});


	$('.gallery').on('click', 'article', function(){
	    console.log(this) 
		$(this).find('.description').toggleClass('show')
		
		$(this).find('iframe')[0].scrolling = 'yes'
	})
	$('.gallery').on('click', 'article', function(){

		window.t = this; 
		console.log(this) 
		console.log(this.scrolling);
		this.scrolling = 'yes'
	})

/*
			let my = $('.white');

			var objTop = my.offset().top,
				objLeft = my.offset().left,
				objWidth = my.width(),
				objHeight = my.height();			

			$('.fixed').each(function(e){
				var self = $(this),
					selfLeft = self.offset().left,
					selfTop = self.offset().top,
					selfWidth = self.width(),
					selfHeight = self.height();

				self.css('background','black');					

				if((objLeft + objWidth) > selfLeft && objLeft < (selfLeft + selfWidth) && (objTop + objHeight) > selfTop && objTop < (selfTop + selfHeight)){
					self.css('background','blue');
				}

			});

*/







	$('.gallery').on('click', 'button#load', function(){
		$('#loading').remove();

		$('.gallery').append(`
							<div id="loading" style="display:block">Loading More...</div>
							
							<article class="from-right">
								<p class="description">
									<i class="fa fa-cog"></i>
									<span class="details">
										Time to see how well you did in your Fantasy League last year. Head over to FFR2017 to play now.
										<a href="https://sharp-nightingale-21d173.netlify.com/" target="_blank"><i class="fas fa-desktop"></i>Live</a>
										<a href="https://github.com/thinkful-niko/FantasyFootball-Ranker" target="_blank"><i class="fab fa-github-square"></i>Repo</a>
										<span><strong>Built with:</strong></span>
										<span>react</span>
										<span>react-motion</span>
										<span>netlify</span>
									</span>
								</p>
								
									<iframe  title="Fantasy Football" onload="loading(this)" src="https://sharp-nightingale-21d173.netlify.com/"></iframe>  

							</article>
							<article class="from-left">
								<p class="description">
									<i class="fa fa-cog"></i>
									<span class="details">
										Ravens is a chatting app where the rooms have a limited idle time (currently set to 15 minutes), once the time is up, the chatroom will self-delete.
										<a href="https://ravens-app.herokuapp.com/" target="_blank"><i class="fas fa-desktop"></i>Live</a>
										<a href="https://github.com/thinkful-niko/Ravens" target="_blank"><i class="fab fa-github-square"></i>Repo</a>
										<span><strong>Built with:</strong></span>
										<span>node</span>
										<span>mongo</span>
										<span>socket.io</span>
										<span>three.js</span>
										<span>handlebars</span>
									</span>
								</p>
								
									<iframe title="Ravens" onload="loading(this)" src="https://ravens-app.herokuapp.com/"></iframe>  
							</article>
							<article class="from-left">
								<p class="description">
									<i class="fa fa-cog"></i>
									<span class="details">
										Band Together is an app for musicians looking to jam. View other's profiles and click like on your favorite ones. If they like your profile, it's a match! A personal chatroom is created and you can set up your next jam sesh in real time. Demo account credentials: email - demo@demo. password - demo. You can also create your own account for the full user experience (there is an introduction for first time users).
										<a href="https://bandtogether-app.herokuapp.com/" target="_blank"><i class="fas fa-desktop"></i>Live</a>
										<a href="https://github.com/thinkful-niko/BandTogether" target="_blank"><i class="fab fa-github-square"></i>Repo</a>
										<span><strong>Built with:</strong></span>
										<span>node</span>
										<span>mongo</span>
										<span>mongoose</span>
										<span>social-auth</span>
										<span>socket.io</span>
										<span>ejs</span>
									</span>
								</p>
								
									<iframe title="Band Together" onload="loading(this)" src="https://bandtogether-app.herokuapp.com/"></iframe>  
							</article>
							
							<button id="loadMore">Load Even More</button> 
							
`)



})



















	$('.gallery').on('click', 'button#loadMore', function(){
		$('#loading').remove();

		$('.gallery').append(`	
							<div id="loading" style="display:block">Loading Even More!</div>
		
							<article class="from-right">
								<p class="description">
									<i class="fa fa-cog"></i>
									<span class="details">
											CiTYSCENE gives you a quick glimpse at what is going on in a major city near you. Curious where to grab coffee? What kind of events are coming up? What's in the news, or even what people are saying on Twitter? CitYSCENE answers all your questions at a glance.
										<a href="https://cityscene-app.herokuapp.com/" target="_blank"><i class="fas fa-desktop"></i>Live</a>
										<a href="https://github.com/thinkful-niko/cityscene" target="_blank"><i class="fab fa-github-square"></i>Repo</a>
										<span><strong>Built with:</strong></span>
										<span>node</span>
										<span>mongo</span>
										<span>mongoose</span>
										<span>jquery</span>
									</span>
								</p>
								
									<iframe title="CityScene" onload="loading(this)" src="https://cityscene-app.herokuapp.com/"></iframe>  

							</article>
							<article class="from-left">
								<p class="description">
									<i class="fa fa-cog"></i>
									<span class="details">
										This project utilizes launchlibrary.net API and WebGL Earth API to create an environment where the user can explore future scheduled space missions.
										<a href="https://devtrader.github.io/RocketFinder/" target="_blank"><i class="fas fa-desktop"></i>Live</a>
										<a href="https://github.com/thinkful-niko/RocketFinder" target="_blank"><i class="fab fa-github-square"></i>Repo</a>
										<span><strong>Built with:</strong></span>
										<span>webGL</span>
										<span>three.js</span>
										<span>google maps</span>
									</span>
								</p>
								
									<iframe title="Rocket Finder" onload="loading(this)" src="https://devtrader.github.io/RocketFinder/"></iframe>  

							</article>
							<article class="from-right">
								<p class="description">
									<i class="fa fa-cog"></i>
									<span class="details">
										Let's Play is a MERN stack app that matches users to one another based on shared lists of video games for the purposes of meeting new gaming friends. The site allows a user to search the Internet Gaming Database (IGDB.com) for video games they like to play and add them to a list. They can view the game title, rating, year released, box art, and description. When other users add the same game to their list, the two users will be matched as potential gaming friends and can send an email initiating contact to arrange a meeting to play.
										<a href="https://letsplayapp.herokuapp.com/" target="_blank"><i class="fas fa-desktop"></i>Live</a>
										<a href="https://github.com/thinkful-niko/letsplay-fullstack" target="_blank"><i class="fab fa-github-square"></i>Repo</a>
										<span><strong>Built with:</strong></span>
										<span>react</span>
										<span>redux</span>
										<span>mongo</span>
										<span>express</span>
										<span>mocha/chai</span>
										<span>webpack</span>
										<span>travis</span>
										<span>passport</span>
										
									</span>
								</p>
								
									<iframe title="LetsPlay" onload="loading(this)" src="https://letsplayapp.herokuapp.com/"></iframe>  

							</article>
							<article class="from-left">
								<p class="description">
									<i class="fa fa-cog"></i>
									<span class="details">
										Moodful is way for you to track and analyze your moods while using some basic mindfulness principles
										<a href="https://mymoodful.herokuapp.com/" target="_blank"><i class="fas fa-desktop"></i>Live</a>
										<a href="https://github.com/thinkful-niko/Moodful" target="_blank"><i class="fab fa-github-square"></i>Repo</a>
										<span><strong>Built with:</strong></span><span>node</span><span>mongo</span><span>express</span><span>mocha/chai</span>
									</span>
								</p>
								
									<iframe title="Moodful" onload="loading(this)" src="https://mymoodful.herokuapp.com/"></iframe>  

							</article>
							<article class="from-right">
								<p class="description">
									<i class="fa fa-cog"></i>
									<span class="details">
										Real Estate website for Long Wharf Capital
			
										<a href="https://longwharf.com/" target="_blank"><i class="fas fa-desktop"></i>Live</a>
										<span><strong>Built with:</strong></span><span>php</span><span>jquery</span><span>wordpress</span>									</span>

								</p>
								
									<iframe title="LongWharf" onload="loading(this)" src="https://longwharf.com/"></iframe>  

							</article>
							<article class="from-left">
								<p class="description">
									<i class="fa fa-cog"></i>
									<span class="details">
										Calculate nutrition totals based on user selected items
										<a href="https://mactotal.netlify.com/" target="_blank"><i class="fas fa-desktop"></i>Live</a>
										<a href="https://github.com/thinkful-niko/thinkful-react-project" target="_blank"><i class="fab fa-github-square"></i>Repo</a>
										<span><strong>Built with:</strong></span><span>php</span><span>jquery</span><span>wordpress</span>									</span>
								</p>
									<iframe title="MacTotal" onload="loading(this)" src="https://mactotal.netlify.com/"></iframe>  

							</article>
							<article class="from-right">
								<p class="description">
									<i class="fa fa-cog"></i>
									<span class="details">
						    			Create and interact with soccer formations and tactics
										<a href="https://soccertactics.herokuapp.com/" target="_blank"><i class="fas fa-desktop"></i>Live</a>
										<a href="https://github.com/thinkful-niko/thinkful-fullstack-capstone" target="_blank"><i class="fab fa-github-square"></i>Repo</a>
										<span><strong>Built with:</strong></span><span>node</span><span>mongo</span><span>mongoose</span><span></span>
									</span>
								</p>
								
									<iframe title="Soccer Tactics" onload="loading(this)" src="https://soccertactics.herokuapp.com/"></iframe>  

							</article>
`)



	})









})(jQuery);
