const account = document.querySelector(".fa-user");

const accountDrawerLogin = document.querySelector(".login-drawer");
const accountDrawerSignup = document.querySelector(".signup-drawer");
const passwordDrawer = document.querySelector(".password-drawer");

const closeBtnSignup = document.querySelector(".drawer-close-signup");
const closeBtnLogin = document.querySelector(".drawer-close-login");
const closeBtnPassword = document.querySelector(".drawer-close-password");

const createAccountLink = document.querySelector(".signup-link");
const loginLink = document.querySelector(".login-link");
const passwordLink = document.querySelector(".password-link");

account.addEventListener("click", () => {
  accountDrawerLogin.style.width = "30rem";
  accountDrawerLogin.style.transition = "transition: 0.5s";
  accountDrawerLogin.style.boxShadow = "-5px 8px 20px 4px gray";
});

closeBtnLogin.addEventListener("click", () => {
  accountDrawerLogin.style.width = "0";
  accountDrawerLogin.style.transition = "transition: 0.5s";
  accountDrawerLogin.style.boxShadow = "none";
});

closeBtnSignup.addEventListener("click", () => {
  accountDrawerSignup.style.width = "0";
  accountDrawerSignup.style.transition = "transition: 0.5s";
  accountDrawerSignup.style.boxShadow = "none";
});

closeBtnPassword.addEventListener("click", () => {
  passwordDrawer.style.width = "0";
  passwordDrawer.style.transition = "0.5s";
  passwordDrawer.style.boxShadow = "none";
});

createAccountLink.addEventListener("click", () => {
  accountDrawerSignup.style.width = "25rem";
  accountDrawerSignup.style.transition = "transition: 0.5s";
  accountDrawerSignup.style.boxShadow = "-5px 8px 20px 4px gray";

  accountDrawerLogin.style.width = "0";
  accountDrawerLogin.style.transition = "transition: 0.5s";
  accountDrawerLogin.style.boxShadow = "none";
});

loginLink.addEventListener("click", () => {
  accountDrawerLogin.style.width = "25rem";
  accountDrawerLogin.style.transition = "transition: 0.5s";
  accountDrawerLogin.style.boxShadow = "-5px 8px 20px 4px gray";

  accountDrawerSignup.style.width = "0";
  accountDrawerSignup.style.transition = "transition: 0.5s";
  accountDrawerSignup.style.boxShadow = "none";
});

passwordLink.addEventListener("click", () => {
  passwordDrawer.style.width = "25rem";
  passwordDrawer.style.transition = "0.5s";
  passwordDrawer.style.boxShadow = "-5px 8px 20px 4px gray";

  accountDrawerLogin.style.width = "0";
  accountDrawerLogin.style.transition = "transition: 0.5s";
  accountDrawerLogin.style.boxShadow = "none";
});
