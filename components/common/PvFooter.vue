<template>
	<footer class="footer">
		<div class="footer-middle">
			<div class="container-fluid">
				<div class="row">
					<div class="col-lg-6 col-xl-4">
						<a href="javascript:;">
							<img
								class="logo mb-3"
								src="~/static/images/home/logo.png"
								alt="Porto Logo"
								width="113"
								height="48"
							>
						</a>

						<div class="row">
							<div class="col-sm-6 pr-sm-0">
								<div class="contact-widget m-b-3">
									<h4 class="widget-title font2">ADDRESS:</h4>
									<a href="javascript:;">123 Street Name, City, England</a>
								</div>
							</div>
							<div class="col-sm-6 pl-sm-0">
								<div class="contact-widget m-b-3">
									<h4 class="widget-title font2">PHONE:</h4>
									<a href="javascript:;">Toll Free (123) 456-7890</a>
								</div>
							</div>
							<div class="col-sm-6 pr-sm-0">
								<div class="contact-widget m-b-3">
									<h4 class="widget-title font2">EMAIL:</h4>
									<a href="mailto:mail@example.com">mail@example.com</a>
								</div>
							</div>
							<div class="col-sm-6 pl-sm-0">
								<div class="contact-widget m-b-3">
									<h4 class="widget-title font2">
										WORKING DAYS/HOURS:
									</h4>
									<a href="javascript:;">Mon - Sun / 9:00AM - 8:00PM</a>
								</div>
							</div>
						</div>
						<div class="social-icons mt-1 mb-3">
							<a
								href="javascript:;"
								class="social-icon social-facebook"
								
							><i class="fab fa-facebook-f"></i></a>
							<a
								href="javascript:;"
								class="social-icon social-twitter"
								
							><i class="fab fa-twitter"></i></a>
							<a
								href="javascript:;"
								class="social-icon social-linkedin"
								
							><i class="fab fa-linkedin-in"></i></a>
						</div>
					</div>
					<div class="col-lg-6 col-xl-2">
						<div class="widget">
							<h4 class="widget-title">Account</h4>
							<div class="row link-lg link-parts">
								<div class="col-6 link-part">
									<ul class="links mb-0">
										<li>
											<nuxt-link to="/pages/account">My Account</nuxt-link>
										</li>
										<li><a href="javascript:;">Track Your Order</a></li>
										<li><a href="javascript:;">Payment Methods</a></li>
										<li><a href="javascript:;">Shipping Guide</a></li>
										<li><a href="javascript:;">FAQs</a></li>
										<li><a href="javascript:;">Product Support</a></li>
										<li><a href="javascript:;">Privacy</a></li>
									</ul>
								</div>
								<div class="col-6 link-part">
									<ul class="links mb-0">
										<li>
											<a href="javascript:;">Orders History</a>
										</li>
										<li><a href="javascript:;">Advanced Search</a></li>
										<li><a href="javascript:;">Affiliate Program</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-6 col-xl-4">
						<div class="widget">
							<h4 class="widget-title">About</h4>
							<div class="row">
								<div class="col-sm-6">
									<ul class="links mb-0">
										<li>
											<nuxt-link to="/pages/about-us">About Porto</nuxt-link>
										</li>
										<li><a href="javascript:;">Our Guarantees</a></li>
										<li><a href="javascript:;">Terms And Conditions</a></li>
										<li><a href="javascript:;">Privacy policy</a></li>
										<li><a href="javascript:;">Return Policy</a></li>
										<li>
											<a href="javascript:;">Intellectual Property Claims</a>
										</li>
										<li><a href="javascript:;">Site Map</a></li>
									</ul>
								</div>

								<div class="col-sm-6">
									<ul class="links mb-0">
										<li>
											<a href="javascript:;">Site Index</a>
										</li>
										<li><a href="javascript:;">Porto for the Press</a></li>
										<li><a href="javascript:;">Business Accounts</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-6 col-xl-2">
						<div class="widget">
							<h4 class="widget-title">Newsletter</h4>
							<div class="widget-newsletter">
								<div class="widget-newsletter-info">
									<p class="widget-newsletter-content m-b-4">Get all the latest
										information on
										Events, Sales and Offers. Sign up for newsletter today</p>
								</div>
								<form action="#">
									<div class="footer-submit-wrapper d-flex">
										<input
											type="email"
											class="form-control mb-0"
											placeholder="Email Address"
											size="40"
											required
										>
										<button
											type="submit"
											class="btn btn-primary btn-sm ls-0"
										>Subscribe</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="footer-bottom">
			<div class="container-fluid d-sm-flex align-items-center">
				<div class="footer-left">
					<span class="footer-copyright">© Porto eCommerce. 2021. All Rights Reserved</span>
				</div>

				<div class="footer-right ml-auto mt-1 mt-sm-0">
					<img
						src="~/static/images/home/payment-icon.png"
						alt="payment"
					>
				</div>
			</div>
		</div>
	</footer>
</template>