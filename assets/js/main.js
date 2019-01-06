
(function($) {



	let workLoaded = false; 

    $(window).scroll(function(e){
		
		


        let s = this.scrollY -  window.innerHeight + 200; 
        let yo = window.innerHeight - this.scrollY + 300
        $('#one').css({backgroundSize:s+'px'})
        //$('.cube').css({transform:"scale("+i/1000+")"})
        
        $('#two').css({backgroundPosition:s+'px'})
        $('#intro').css({backgroundSize:yo+'px'})
        $('#intro .content').css({transform:"scale("+yo/1000+")"})
        $('#contact').css({backgroundSize:s-1700+'px'})
        //$('.cube').css({top:this.scrollY+'px', transform:"rotateY("+i+"deg)"})
    })



var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
	}
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
				//$body.removeClass('is-preload');
				$('.gallery').removeClass('is-preload')
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
		$window.on('load', function() {$.get(`https://mysterious-brushlands-12496.herokuapp.com/sendEmail?message=someone`, function(data){})});


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

        /*$(window).on('wheel', function(event) {
			if($(window).scrollTop() < 10) {
				$('#right, #left').addClass('shoot');
			}
        })*/
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
		if(isMobile){
			$(this).find('iframe')[0].scrolling = 'yes'
		}
	})

	/*
	$('.gallery').on('click', 'article', function(){

		window.t = this; 
		console.log(this) 
		console.log(this.scrolling);
		this.scrolling = 'yes'
	})*/

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

$('#loadWork').click(function(){
	$('#work .content header').append("<p>A collection of some of my work I've recently created.  <br><i>Click button to view.  Click the icon to see details</i></p>")

	$(this).replaceWith('<b style="margin:auto;width:100%;">Loading... <span>0</span> out  of 14</b><br>')
	addWork()
})
function addWork() {
        $('.gallery').append(

							   `
							<pre class="disclaimer">Iframes don't work on mobile. Must click gear icon and navigate to actual site</pre>

						    <article>
								<p class="description">
									<i class="fa fa-cog"></i>
									<span class="details">
										A reminder app featuring time-progress alerts, email notifications, and speech recognition (set reminder by speech)
										
										<a href="https://reminder-ai.herokuapp.com/" target="_blank"><i class="fas fa-desktop"></i>Live</a>
										<a href="https://github.com/by12380/Reminder-ai" target="_blank"><i class="fab fa-github-square"></i>Repo</a>
										<span><strong>Built with:</strong></span><span>node</span><span>mongo</span><span>mongoose</span><span>socket.io</span>
									</span>
								</p>
									
									<iframe title="Reminder-AI" onload="loading(this)" src="https://reminder-ai.herokuapp.com/"></iframe>
															
								
							</article>
							<article>
								<p class="description">
								
									<i class="fa fa-cog"></i>
									<span class="details">
										Battleship Online is a lightweight and casual game of battleship for 2 players. The idea behind the app was to get players to play the game with as little extra steps as possible. That is why players do not have to register, come up with smart and funny username or even draw battleships on the grid. All that stuff is randomly generated so players can just play.
										<a href="https://carabus-battleship.herokuapp.com" target="_blank"><i class="fas fa-desktop"></i>Live</a>
										<a href="https://github.com/thinkful-niko/battleship-online" target="_blank"><i class="fab fa-github-square"></i>Repo</a>
										<span><strong>Built with:</strong></span><span>node</span><span>mongo</span><span>mongoose</span><span>socket.io</span>
									</span>
								</p>

								
									<iframe title="Battleship" onload="loading(this)" src="https://carabus-battleship.herokuapp.com/"></iframe>  

							</article>




							<article >
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



							<article>
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
							<article>
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

							<article >
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
<article class=" ">
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
							<article class=" ">
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
							<article class=" ">
								<p class="description">
									<i class="fa fa-cog"></i>
									<span class="details">
										Miner can find his way through a random maze
										<a href="https://tzikas.github.io/miner/" target="_blank"><i class="fas fa-desktop"></i>Live</a>
										<a href="https://gist.github.com/Tzikas/2bd045f3285727a5dac9f75fe10231bb" target="_blank"><i class="fab fa-github-square"></i>Repo</a>
										<span><strong>Built with:</strong></span><span>javascript</span><span>es7^</span>
									</span>
								</p>


								
									<iframe  title="Miner" onload="loading(this)"src="https://tzikas.github.io/miner/"></iframe>  

							</article>
							<article class=" ">
								<p class="description">
									<i class="fa fa-cog"></i>
									<span class="details">
										CryptoFolio is a portfolio value tracker for cryptocurrencies, it tracks the 100 most popular cryptocurrencies and users can add the coins they own on the dashboard. After adding coins, a chart will show teh historical value of the coins they added and breakdown the total value of their portfolio throughout time.
										<a href="https://cryoptofolio.netlify.com/" target="_blank"><i class="fas fa-desktop"></i>Live</a>
										<a href="https://github.com/thinkful-niko/CryptoFolio" target="_blank"><i class="fab fa-github-square"></i>Repo</a>
										<span><strong>Built with:</strong></span>
										<span>node</span>
										<span>mongo</span>
										<span>mongoose</span>
										<span>react</span>
										<span>redux</span>										
									</span>
								</p>

								
									<iframe title="Cryptofolio" onload="loading(this)" src="https://cryoptofolio.netlify.com/"></iframe>  

							</article>
        
<article class=" ">
								<p class="description">
									<i class="fa fa-cog"></i>
									<span class="details">
										Real Estate website for Long Wharf Capital
			
										<a href="https://longwharf.com/" target="_blank"><i class="fas fa-desktop"></i>Live</a>
										<span><strong>Built with:</strong></span><span>php</span><span>jquery</span><span>wordpress</span>									</span>

								</p>
								
									<iframe title="LongWharf" onload="loading(this)" src="https://longwharf.com/"></iframe>  

							</article>
								<article class=" ">
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



							<article class=" ">
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
							<article class=" ">
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

    }


        /*


	$('.gallery').on('click', 'button#load', function(){
		$('#loading, button#load').remove();
		
		$('.gallery').append(`
							<div id="loading" style="display:block">Loading More...</div>
							
							<article class=" ">
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
							<article class=" ">
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
							<article class=" ">
								<p class="description">
									<i class="fa fa-cog"></i>
									<span class="details">
										Miner can find his way through a random maze
										<a href="https://tzikas.github.io/miner/" target="_blank"><i class="fas fa-desktop"></i>Live</a>
										<a href="https://gist.github.com/Tzikas/2bd045f3285727a5dac9f75fe10231bb" target="_blank"><i class="fab fa-github-square"></i>Repo</a>
										<span><strong>Built with:</strong></span><span>javascript</span><span>es7^</span>
									</span>
								</p>


								
									<iframe  title="Miner" onload="loading(this)"src="https://tzikas.github.io/miner/"></iframe>  

							</article>
							<article class=" ">
								<p class="description">
									<i class="fa fa-cog"></i>
									<span class="details">
										CryptoFolio is a portfolio value tracker for cryptocurrencies, it tracks the 100 most popular cryptocurrencies and users can add the coins they own on the dashboard. After adding coins, a chart will show teh historical value of the coins they added and breakdown the total value of their portfolio throughout time.
										<a href="https://cryoptofolio.netlify.com/" target="_blank"><i class="fas fa-desktop"></i>Live</a>
										<a href="https://github.com/thinkful-niko/CryptoFolio" target="_blank"><i class="fab fa-github-square"></i>Repo</a>
										<span><strong>Built with:</strong></span>
										<span>node</span>
										<span>mongo</span>
										<span>mongoose</span>
										<span>react</span>
										<span>redux</span>										
									</span>
								</p>

								
									<iframe title="Cryptofolio" onload="loading(this)" src="https://cryoptofolio.netlify.com/"></iframe>  

							</article>

							
							<button id="loadMore">Load Even More</button> 
							
`)



})



















	$('.gallery').on('click', 'button#loadMore', function(){
		$('#loading, button#loadMore').remove();

		$('.gallery').append(`	
							<div id="loading" style="display:block">Loading Even More!</div>
		
							<article class=" ">
								<p class="description">
									<i class="fa fa-cog"></i>
									<span class="details">
										Real Estate website for Long Wharf Capital
			
										<a href="https://longwharf.com/" target="_blank"><i class="fas fa-desktop"></i>Live</a>
										<span><strong>Built with:</strong></span><span>php</span><span>jquery</span><span>wordpress</span>									</span>

								</p>
								
									<iframe title="LongWharf" onload="loading(this)" src="https://longwharf.com/"></iframe>  

							</article>
								<article class=" ">
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



							<article class=" ">
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
							<article class=" ">
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
*/


    $('.gallery').on('click', 'button', function(){
        console.log(this)
		$('.gallery article').removeClass('show')
		$('.gallery img').remove()
        $(`iframe[title="${$(this).text()}"]`).parent().addClass('show');
    })






var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;		
});

        /*


  
console.log(canvas.width)


 ctx.strokeStyle = 'rgba(0,0,255, .5)'

 ctx.fillStyle ='rgba(0,0,255, .5)'

// variable to hold how many frames have elapsed in the animation
var t = 1;

// define the path to plot
var vertices = [];
vertices.push({
    x: 0,
    y: 0
});
vertices.push({
    x: 0,
    y: 100
});
vertices.push({
    x: 80,
    y: 100
});
vertices.push({
    x: 80,
    y: 10
});
vertices.push({
    x: 200,
    y: 10
});

// set some style
ctx.lineWidth = 2;
ctx.strokeStyle = "blue";
// calculate incremental points along the path
var points = calcWaypoints(vertices);
// extend the line from start to finish with animation
animate(points);


// calc waypoints traveling along vertices
function calcWaypoints(vertices) {
    var waypoints = [];
    for (var i = 1; i < vertices.length; i++) {
        var pt0 = vertices[i - 1];
        var pt1 = vertices[i];
        var dx = pt1.x - pt0.x;
        var dy = pt1.y - pt0.y;
        for (var j = 0; j < 100; j+=1) {
            var x = pt0.x + dx * j / 100;
            var y = pt0.y + dy * j / 100;
            waypoints.push({
                x: x,
                y: y
            });
        }
    }
    return (waypoints);
}
var u = 1;


function animate() {
    console.log('animate')
    if (t < points.length - 1) {
        requestAnimationFrame(animate);
    } else {
        clear()

    }
    //ctx.clearRect(0,0,canvas.width,canvas.height)
    // draw a line segment from the last waypoint
    // to the current waypoint
    ctx.beginPath();
    ctx.moveTo(points[t - 1].x, points[t - 1].y);
    ctx.lineTo(points[t].x, points[t].y);
    ctx.stroke();
    // increment "t" to get the next waypoint
    t++;
}
    console.log(points)

    
function clear() {
    console.log('clear')
    if (u < points.length - 1) {
        requestAnimationFrame(clear);
    }    
    ctx.strokeStyle = 'white';        
    ctx.strokeWidth = '5px';        
    
    //ctx.clearRect(points[u].x, points[u].y, 1,1)
    ctx.beginPath();
    ctx.moveTo(points[u - 1].x, points[u - 1].y);
    ctx.lineTo(points[u].x, points[u].y);
    ctx.stroke();
    // increment "t" to get the next waypoint
    u++;
}


*/
















            /*                var canvas = document.querySelector('canvas');
            var ctx = canvas.getContext('2d');

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            window.addEventListener("resize", function() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;		
            });

	
			var particles = [];
			for( var i = 0; i < 10; i++ ) {
				particles.push( { 
					x:Math.random()*window.innerWidth, 
					y:Math.random()*window.innerHeight, 
					vx:(Math.random()*2)-1, 
					vy:(Math.random()*2-1),
					history: [],
					size: 4+Math.random()*6,
					color: Math.random() > .5 ? "#000000" : Math.random() > .5 ? "#FF0000" : "#FFFF00"
				} );
			}
			
			var mouse = { x: 0, y: 0 };
			
			
			if (canvas && canvas.getContext) {
				var context = canvas.getContext('2d');
				
				Initialize();
			}
			
			function Initialize() {
				canvas.addEventListener('mousemove', MouseMove, false);
				window.addEventListener('resize', ResizeCanvas, false);
				setInterval( TimeUpdate, 20 );
				
				context.beginPath();
				
				ResizeCanvas();
			}
			
			function TimeUpdate(e) {
				
				context.clearRect(0, 0, window.innerWidth, window.innerHeight);
				
				for( var i = 0; i < particles.length; i++ ) {
					particles[i].x += particles[i].vx;
					particles[i].y += particles[i].vy;
					
					if( particles[i].x > window.innerWidth ) {
						particles[i].vx = -1-Math.random();
					}
					else if ( particles[i].x < 0 ) {
						particles[i].vx = 1+Math.random();
					}
					else {
						particles[i].vx *= 1 + (Math.random()*0.005);
					}
					
					if( particles[i].y > window.innerHeight ) {
						particles[i].vy = -1-Math.random();
					}
					else if ( particles[i].y < 0 ) {
						particles[i].vy = 1+Math.random();
					}
					else {
						particles[i].vy *= 1 + (Math.random()*0.005);
					}
					
					context.strokeStyle = particles[i].color;
					context.beginPath();
					for( var j = 0; j < particles[i].history.length; j++ ) {
						context.lineTo( particles[i].history[j].x, particles[i].history[j].y );
					}
					context.stroke();
					
					particles[i].history.push({	x: particles[i].x, y: particles[i].y });
					if( particles[i].history.length > 45 ) {
						particles[i].history.shift();
					}
					
					var distanceFactor = DistanceBetween( mouse, particles[i] );
					distanceFactor = Math.max( Math.min( 15 - ( distanceFactor / 10 ), 10 ), 1 );
					
					context.fillStyle = particles[i].color;
					context.beginPath();
					context.arc(particles[i].x,particles[i].y,particles[i].size*distanceFactor,0,Math.PI*2,true);
					context.closePath();
					context.fill();
					
				}
			}
			
			function MouseMove(e) {
				mouse.x = e.layerX;
				mouse.y = e.layerY;
				
				//context.fillRect(e.layerX, e.layerY, 5, 5);
				//Draw( e.layerX, e.layerY );
			}
			
			function Draw( x, y ) {
				context.strokeStyle = '#ff0000';
				context.lineWidth = 4;
				context.lineTo(x, y);
				context.stroke();
			}
			
			function ResizeCanvas(e) {
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
			}
			
			function DistanceBetween(p1,p2) {
				var dx = p2.x-p1.x;
				var dy = p2.y-p1.y;
				return Math.sqrt(dx*dx + dy*dy);
            }
 */

       
})(jQuery);






