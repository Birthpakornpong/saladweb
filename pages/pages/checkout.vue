<template>
	<main class="main main-test">
		<div class="container checkout-container">
			<ul class="checkout-progress-bar d-flex justify-content-center flex-wrap">
				<li>
					<nuxt-link to="/pages/cart">Shopping Cart</nuxt-link>
				</li>
				<li class="active">
					<nuxt-link to="/pages/checkout">Checkout</nuxt-link>
				</li>
				<li class="disabled">
					<a href="javascript:;">Order Complete</a>
				</li>
			</ul>

			<template v-if="cartList.length > 0">
				<div class="login-form-container">
					<h4>
						Returning customer?
						<button
							data-toggle="collapse"
							data-target="#collapseOne"
							aria-expanded="true"
							aria-controls="collapseOne"
							class="btn btn-link btn-toggle"
							@click="loginOpened = !loginOpened"
						>Login</button>
					</h4>

					<vue-slide-toggle :open="loginOpened">
						<div class="login-section feature-box">
							<div class="feature-box-content">
								<form
									action="#"
									id="login-form"
								>
									<p>
										If you have shopped with us before, please enter your details below. If you are
										a new customer, please proceed to the Billing & Shipping section.
									</p>

									<div class="row">
										<div class="col-md-6">
											<div class="form-group">
												<label class="mb-0 pb-1">
													Username or email
													<span class="required">*</span>
												</label>
												<input
													type="email"
													class="form-control"
													required
												/>
											</div>
										</div>

										<div class="col-md-6">
											<div class="form-group">
												<label class="mb-0 pb-1">
													Password
													<span class="required">*</span>
												</label>
												<input
													type="password"
													class="form-control"
													required
												/>
											</div>
										</div>
									</div>

									<button
										type="submit"
										class="btn"
									>LOGIN</button>

									<div class="form-footer mb-1">
										<div class="custom-control custom-checkbox mb-0 mt-0">
											<input
												type="checkbox"
												class="custom-control-input"
												id="lost-password"
											/>
											<label
												class="custom-control-label mb-0"
												for="lost-password"
											>
												Remember
												me
											</label>
										</div>

										<nuxt-link
											to="/pages/forgot-password"
											class="forget-password"
										>Lost your password?</nuxt-link>
									</div>
								</form>
							</div>
						</div>
					</vue-slide-toggle>
				</div>

				<div class="checkout-discount">
					<h4>
						Have a coupon?
						<button
							data-toggle="collapse"
							data-target="#collapseTwo"
							aria-expanded="true"
							aria-controls="collapseOne"
							class="btn btn-link btn-toggle"
							@click="codeOpened = !codeOpened"
						>ENTER YOUR CODE</button>
					</h4>

					<vue-slide-toggle :open="codeOpened">
						<div class="feature-box">
							<div class="feature-box-content">
								<p>If you have a coupon code, please apply it below.</p>

								<form action="#">
									<div class="input-group">
										<input
											type="text"
											class="form-control form-control-sm w-auto"
											placeholder="Coupon code"
											required
										/>
										<div class="input-group-append">
											<button
												class="btn btn-sm mt-0"
												type="submit"
											>Apply Coupon</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</vue-slide-toggle>
				</div>

				<div class="row">
					<div class="col-lg-7">
						<ul class="checkout-steps">
							<li>
								<h2 class="step-title">Billing details</h2>

								<form
									action="#"
									id="checkout-form"
								>
									<div class="row">
										<div class="col-md-6">
											<div class="form-group">
												<label>
													First name
													<abbr
														class="required"
														title="required"
													>*</abbr>
												</label>
												<input
													type="text"
													class="form-control"
													required
												/>
											</div>
										</div>

										<div class="col-md-6">
											<div class="form-group">
												<label>
													Last name
													<abbr
														class="required"
														title="required"
													>*</abbr>
												</label>
												<input
													type="text"
													class="form-control"
													required
												/>
											</div>
										</div>
									</div>

									<div class="form-group">
										<label>Company name (optional)</label>
										<input
											type="text"
											class="form-control"
										/>
									</div>

									<div class="select-custom">
										<label>
											Country / Region
											<abbr
												class="required"
												title="required"
											>*</abbr>
										</label>
										<select
											name="orderby"
											class="form-control"
										>
											<option
												value
												selected="selected"
											>Vanuatu</option>
											<option value="1">Brunei</option>
											<option value="2">Bulgaria</option>
											<option value="3">Burkina Faso</option>
											<option value="4">Burundi</option>
											<option value="5">Cameroon</option>
										</select>
									</div>

									<div class="form-group mb-1 pb-2">
										<label>
											Street address
											<abbr
												class="required"
												title="required"
											>*</abbr>
										</label>
										<input
											type="text"
											class="form-control"
											placeholder="House number and street name"
											required
										/>
									</div>

									<div class="form-group">
										<input
											type="text"
											class="form-control"
											placeholder="Apartment, suite, unite, etc. (optional)"
											required
										/>
									</div>

									<div class="form-group">
										<label>
											Town / City
											<abbr
												class="required"
												title="required"
											>*</abbr>
										</label>
										<input
											type="text"
											class="form-control"
											required
										/>
									</div>

									<div class="select-custom">
										<label>
											State / County
											<abbr
												class="required"
												title="required"
											>*</abbr>
										</label>
										<select
											name="orderby"
											class="form-control"
										>
											<option
												value
												selected="selected"
											>NY</option>
											<option value="1">Brunei</option>
											<option value="2">Bulgaria</option>
											<option value="3">Burkina Faso</option>
											<option value="4">Burundi</option>
											<option value="5">Cameroon</option>
										</select>
									</div>

									<div class="form-group">
										<label>
											Postcode / Zip
											<abbr
												class="required"
												title="required"
											>*</abbr>
										</label>
										<input
											type="text"
											class="form-control"
											required
										/>
									</div>

									<div class="form-group">
										<label>
											Phone
											<abbr
												class="required"
												title="required"
											>*</abbr>
										</label>
										<input
											type="tel"
											class="form-control"
											required
										/>
									</div>

									<div class="form-group">
										<label>
											Email address
											<abbr
												class="required"
												title="required"
											>*</abbr>
										</label>
										<input
											type="email"
											class="form-control"
											required
										/>
									</div>

									<div class="form-group mb-1">
										<div class="custom-control custom-checkbox">
											<input
												type="checkbox"
												class="custom-control-input"
												id="create-account"
											/>
											<label
												class="custom-control-label"
												data-toggle="collapse"
												data-target="#collapseThree"
												aria-controls="collapseThree"
												for="create-account"
												@click="accountOpened = !accountOpened"
											>Create an account?</label>
										</div>
									</div>

									<vue-slide-toggle :open="accountOpened">
										<div class="form-group">
											<label>
												Create account password
												<abbr
													class="required"
													title="required"
												>*</abbr>
											</label>
											<input
												type="password"
												placeholder="Password"
												class="form-control"
												required
											/>
										</div>
									</vue-slide-toggle>

									<div class="form-group">
										<div class="custom-control custom-checkbox mt-0">
											<input
												type="checkbox"
												class="custom-control-input"
												id="different-shipping"
											/>
											<label
												class="custom-control-label"
												data-toggle="collapse"
												data-target="#collapseFour"
												aria-controls="collapseFour"
												for="different-shipping"
												@click="addressOpened = !addressOpened"
											>
												Ship to a
												different
												address?
											</label>
										</div>
									</div>

									<vue-slide-toggle :open="addressOpened">
										<div class="shipping-info">
											<div class="row">
												<div class="col-md-6">
													<div class="form-group">
														<label>
															First name
															<abbr
																class="required"
																title="required"
															>*</abbr>
														</label>
														<input
															type="text"
															class="form-control"
															required
														/>
													</div>
												</div>

												<div class="col-md-6">
													<div class="form-group">
														<label>
															Last name
															<abbr
																class="required"
																title="required"
															>*</abbr>
														</label>
														<input
															type="text"
															class="form-control"
															required
														/>
													</div>
												</div>
											</div>

											<div class="form-group">
												<label>Company name (optional)</label>
												<input
													type="text"
													class="form-control"
												/>
											</div>

											<div class="select-custom">
												<label>
													Country / Region
													<span class="required">*</span>
												</label>
												<select
													name="orderby"
													class="form-control"
												>
													<option
														value
														selected="selected"
													>Vanuatu</option>
													<option value="1">Brunei</option>
													<option value="2">Bulgaria</option>
													<option value="3">Burkina Faso</option>
													<option value="4">Burundi</option>
													<option value="5">Cameroon</option>
												</select>
											</div>

											<div class="form-group mb-1 pb-2">
												<label>
													Street address
													<abbr
														class="required"
														title="required"
													>*</abbr>
												</label>
												<input
													type="text"
													class="form-control"
													placeholder="House number and street name"
													required
												/>
											</div>

											<div class="form-group">
												<input
													type="text"
													class="form-control"
													placeholder="Apartment, suite, unit, etc. (optional)"
													required
												/>
											</div>

											<div class="form-group">
												<label>
													Town / City
													<abbr
														class="required"
														title="required"
													>*</abbr>
												</label>
												<input
													type="text"
													class="form-control"
													required
												/>
											</div>

											<div class="select-custom">
												<label>
													State / County
													<abbr
														class="required"
														title="required"
													>*</abbr>
												</label>
												<select
													name="orderby"
													class="form-control"
												>
													<option
														value
														selected="selected"
													>NY</option>
													<option value="1">Brunei</option>
													<option value="2">Bulgaria</option>
													<option value="3">Burkina Faso</option>
													<option value="4">Burundi</option>
													<option value="5">Cameroon</option>
												</select>
											</div>

											<div class="form-group">
												<label>
													Postcode / ZIP
													<abbr
														class="required"
														title="required"
													>*</abbr>
												</label>
												<input
													type="text"
													class="form-control"
													required
												/>
											</div>
										</div>
									</vue-slide-toggle>

									<div class="form-group">
										<label class="order-comments">Order notes (optional)</label>
										<textarea
											class="form-control"
											placeholder="Notes about your order, e.g. special notes for delivery."
											required
										></textarea>
									</div>
								</form>
							</li>
						</ul>
					</div>

					<div class="col-lg-5">
						<div class="order-summary">
							<h3>YOUR ORDER</h3>

							<table class="table table-mini-cart">
								<thead>
									<tr>
										<th colspan="2">Product</th>
									</tr>
								</thead>
								<tbody v-if="cartList.length > 0">
									<tr
										v-for="(product, index) in cartList"
										:key="'cart-product-' + index"
									>
										<td class="product-col">
											<h2 class="product-title">
												{{product.name}} ×
												<span class="product-qty">{{product.qty}}</span>
											</h2>
										</td>

										<td class="price-col">
											<span>${{product.price | priceFormat}}</span>
										</td>
									</tr>
								</tbody>
								<tbody v-else>
									<p class="cart-empty-text ml-3">No products in the cart.</p>
								</tbody>
								<tfoot>
									<tr class="cart-subtotal">
										<td>
											<h4>Subtotal</h4>
										</td>

										<td class="price-col">
											<span>${{ totalPrice | priceFormat }}</span>
										</td>
									</tr>
									<tr class="order-shipping">
										<td
											class="text-left"
											colspan="2"
										>
											<h4 class="m-b-sm">Shipping</h4>

											<div class="form-group form-group-custom-control">
												<div class="custom-control custom-radio d-flex">
													<input
														type="radio"
														class="custom-control-input"
														name="radio"
														checked
													/>
													<label class="custom-control-label">Local Pickup</label>
												</div>
											</div>

											<div class="form-group form-group-custom-control mb-0">
												<div class="custom-control custom-radio d-flex mb-0">
													<input
														type="radio"
														name="radio"
														class="custom-control-input"
													/>
													<label class="custom-control-label">Flat Rate</label>
												</div>
											</div>
										</td>
									</tr>

									<tr class="order-total">
										<td>
											<h4>Total</h4>
										</td>
										<td>
											<b class="total-price">
												<span>${{ totalPrice | priceFormat }}</span>
											</b>
										</td>
									</tr>
								</tfoot>
							</table>

							<div class="payment-methods">
								<h4 class>Payment methods</h4>
								<div class="info-box with-icon p-0">
									<p>
										Sorry, it seems that there are no available
										payment methods for your state. Please
										contact us if you require assistance or wish
										to make alternate arrangements.
									</p>
								</div>
							</div>

							<button
								type="submit"
								class="btn btn-dark btn-place-order"
								form="checkout-form"
							>Place order</button>
						</div>
					</div>
				</div>
			</template>

			<div
				class="box-content"
				v-else
			>
				<table
					class="table-cart"
					data-pagination="no"
					data-per-page="5"
					data-page="1"
					data-id
					data-token
				>
					<thead class="d-none">
						<tr>
							<th class="product-thumbnail"></th>

							<th class="product-name">
								<span class="nobr">Product</span>
							</th>

							<th class="product-price">
								<span class="nobr">price</span>
							</th>

							<th class="product-stock-status">
								<span class="nobr">Stock status</span>
							</th>

							<th class="product-add-to-cart">
								<span class="nobr">Actions</span>
							</th>
						</tr>
					</thead>

					<tbody class="cart-items-wrapper">
						<tr class="border-0 py-0">
							<td
								colspan="6"
								class="px-3 py-2 text-center"
							>
								<p class="noproduct-msg mb-2">Checkout is not available while your cart is empty.</p>
								<i class="icon-bag-2 cart-empty"></i>
							</td>
						</tr>
						<tr class="border-0 py-0">
							<td
								colspan="6"
								class="px-3 py-2 text-center cart-empty"
							>
								No products added to the
								cart
							</td>
						</tr>
						<tr class="border-0 py-0">
							<td
								colspan="6"
								class="px-3 text-center"
							>
								<nuxt-link
									to="/shop"
									class="btn btn-go-shop"
								>RETURN TO SHOP</nuxt-link>
							</td>
						</tr>
					</tbody>
				</table>

				<div class="mb-6"></div>
			</div>
		</div>
	</main>
</template>

<script>
import { VueSlideToggle } from 'vue-slide-toggle';
import { mapGetters } from 'vuex';

export default {
	components: {
		VueSlideToggle
	},
	data: function () {
		return {
			loginOpened: false,
			codeOpened: false,
			accountOpened: false,
			addressOpened: false
		};
	},
	computed: {
		...mapGetters( 'cart', [ 'cartList', 'totalCount', 'totalPrice' ] )
	}
};
</script>