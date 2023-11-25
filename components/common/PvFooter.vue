<template>
	<footer class="footer">
		<div class="container-fluid">
			<div class="row">
				<div class="col-5 mt-2">
					<a href="javascript:;">
						<img
							class="logo logo-header ml-4 mt-2 mb-2"
							src="~/static/images/home/Logo_Holis_Footer.svg"
							alt="Porto Logo"
						>
					</a>
					<div class="row">
						<div class="custom-color-text col-10 ml-4">
							<div>บริษัท อินวีนิค จำกัด </div>
							<div>1 ถนนปูนซีเมนต์ไทย </div>
							<div>แขวงบางซื่อ เขตบางซื่อ กรุงเทพมหานคร 10800</div>
						</div>
					</div>
				</div>
				<div class="col-2">
					<div class="widget">
						<h4 class="widget-title">Sitemap</h4>
						<div class="row link-lg link-parts">
							<div class="col-12 link-part">
								<ul class="links mb-0">
									<li><a href="javascript:;">Home</a></li>
									<li><a href="javascript:;">Products</a></li>
									<li><a href="javascript:;">News & Activities</a></li>
									<li><a href="javascript:;">Our Story</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<!-- <div class="col-1"></div>
				<div class="col-2">
					<div class="widget">
						<h4 class="widget-title">ประเภทสินค้า</h4>
						<div class="row">
							<div class="col-12">
								<ul class="links mb-0">
									<li><a href="javascript:;">Immunity</a></li>
									<li><a href="javascript:;">Brain</a></li>
									<li><a href="javascript:;">Cholesterol</a></li>
									<li><a href="javascript:;">DigestiveSystem</a></li>
									<li>
										<a href="javascript:;">Skin Health</a>
									</li>
									<li><a href="javascript:;">Relaxation</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div> -->
				<div class="col-2">
					<div class="widget">
						<h4 class="widget-title">Category</h4>
						<div class="row">
							<div class="col-sm-6">
								<ul class="links mb-0">
									<li><a href="javascript:;">Immunity</a></li>
									<li><a href="javascript:;">Brain</a></li>
									<li><a href="javascript:;">Cholesterol</a></li>
									<li><a href="javascript:;">Digestive System</a></li>
									<li><a href="javascript:;">Skin Health</a></li>
									<li><a href="javascript:;">Relaxation</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div class="col-3">
					<div class="widget">
						<h4 class="widget-title">Contact Channel</h4>
						<div class="row">
							<div class="col-sm-6">
								<ul class="links mb-0">
									<!-- <li>
										<nuxt-link to="/pages/about-us">About Porto</nuxt-link>
									</li> -->
									<li><a style="color: white;" href="javascript:;">Email :</a></li>
									<li><a href="javascript:;">scgphealthcare@gmail.com</a></li>
									<li><a style="color: white;" href="javascript:;">Phone :</a></li>
									<li><a href="javascript:;">+662 586 555</a></li>
									<li>
									</li>
									<br/>
									<li><a class="pb-1" style="color: white;">Follow us : 
										<i class="icon-facebook pr-1"></i>
										<i class="bi bi-line pr-1"></i>
										<i class="bi bi-tiktok"></i>
									</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<!-- <div class="col-lg-6 col-xl-2">
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
				</div> -->
			</div>
		</div>

		<div class="footer-bottom-custom pt-3 pb-3">
			<div class="d-flex justify-content-center">
				<div class="footer-left">
					<span class="footer-copyright">© Copyright 2023 by SCG Packaging Co.Ltd. All Right Reserved.</span>
				</div>
			</div>
		</div>
	</footer>
</template>

<style>
.footer .container-fluid {
	background:  linear-gradient(to right, #800000, #942626, #942626, #800000);
	color: #d18e8a;
	border-bottom: 4px solid;
  	border-image: linear-gradient(to right, #800000, #ff0000, #ff0000, #800000) 1;
	font-size: 1.5rem;
	padding-top: 5px;
    padding-bottom: 5px;
}

.footer .footer-bottom-custom{
	background:  linear-gradient(to right, #640b0d, #8b1317f3, #8b1317, #640b0d);
	color: #d18e8a;
	font-size: 1.5rem;
	border-bottom: 4px solid;
	border-image: linear-gradient(to right, #800000, #ff0000, #ff0000, #800000) 1;
}

.footer .container-fluid .custom-color-text {
	color: white;
}

.footer .container-fluid .logo-header{
	height: 70px;
	max-width: 100%
}

.widget .widget-title {
	color: white;
	margin-top: 3rem;
}

</style>