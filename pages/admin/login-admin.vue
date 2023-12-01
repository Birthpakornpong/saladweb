<template>
    <div
        class="container-login fixed-top d-flex align-items-center justify-content-center"
    >
        <b-card class="form-signin p-5">
            <form>
                <div>
                    <img
                        src="~/static/images/home/Logo_Holis.svg"
                        alt="Porto Logo"
                        class="img-custom-login"
                    />
                </div>

                <div class="mt-3 mb-1 fw-normal">Holis by SCGP</div>
                <p>Please sign-in to your account and start the adventure</p>
                <div class="form-floating">
                    <label for="floatingInput">Email</label>
                    <input
                        type="email"
                        class="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                    />
                </div>
                <div class="form-floating mt-2">
                    <div class="d-flex justify-content-between">
                        <label for="floatingPassword">Password</label>
                        <nuxt-link
                            to="/pages/forgot-password"
                            style="color: #007bff; font-size: 12px"
                        >
                            Forgot Password?
                        </nuxt-link>
                    </div>
                    <input
                        type="password"
                        class="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                    />
                </div>

                <div class="form-check text-start my-3">
                    <input
                        class="form-check-input"
                        type="checkbox"
                        value="remember-me"
                        id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                        &nbsp;&nbsp;Remember
                    </label>
                </div>
                <button class="btn btn-primary w-100 py-2" type="submit">
                    Login
                </button>
            </form>
        </b-card>
    </div>
</template>
<script>
export default {
    layout: 'default-manual',
};
</script>

<style>
body {
    height: 100%;
}

.container-login {
    bottom: 0px;
    overflow-y: auto;
    background-color: rgb(248 247 250);
}

.form-signin {
    padding: 1rem;
    max-width: 480px;
    background-color: white;
    box-shadow: 2px 2px 2px 2px #888888;
}

.form-signin .img-custom-login {
    height: 50px;
    max-width: none;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.form-signin .form-floating:focus-within {
    z-index: 2;
}

.form-signin input[type='email'] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}

.form-signin input[type='password'] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
.fw-normal {
    color: rgba(0, 0, 0, 0.564);
    font-weight: bolder;
    font-size: 2rem;
}
</style>
