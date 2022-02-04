const account = document.querySelector(".fa-user");

const accountDrawerLogin = document.querySelector(".login-drawer");
const accountDrawerSignup = document.querySelector(".signup-drawer");
const passwordDrawer = document.querySelector(".password-drawer");

const closeBtnSignup = document.querySelector(".drawer-close-signup");
const closeBtnLogin = document.querySelector(".drawer-close-login");
const closeBtnPassword = document.querySelector(".drawer-close-password");

const createAccountLink = document.querySelector(".signup-link");
const signupLink = document.querySelector(".signup-link-login");
const loginLink = document.querySelector(".login-link");
const passwordLink = document.querySelector(".password-link");

const displayLoginDrawer = () => {
  accountDrawerLogin.style.width = "25rem";
  accountDrawerLogin.style.transition = "transition: 0.5s";
  accountDrawerLogin.style.boxShadow = "-5px 8px 20px 4px gray";
  closeSignupDrawer();
};

const displaySignupDrawer = () => {
  accountDrawerSignup.style.width = "25rem";
  accountDrawerSignup.style.transition = "transition: 0.5s";
  accountDrawerSignup.style.boxShadow = "-5px 8px 20px 4px gray";

  closeLoginDrawer();
  closePasswordDrawer();
};
const displayPasswordDrawer = () => {
  passwordDrawer.style.width = "25rem";
  passwordDrawer.style.transition = "0.5s";
  passwordDrawer.style.boxShadow = "-5px 8px 20px 4px gray";
  closeLoginDrawer();
};

const closeLoginDrawer = () => {
  accountDrawerLogin.style.width = "0";
  accountDrawerLogin.style.transition = "transition: 0.5s";
  accountDrawerLogin.style.boxShadow = "none";
};

const closeSignupDrawer = () => {
  accountDrawerSignup.style.width = "0";
  accountDrawerSignup.style.transition = "transition: 0.5s";
  accountDrawerSignup.style.boxShadow = "none";
};

const closePasswordDrawer = () => {
  passwordDrawer.style.width = "0";
  passwordDrawer.style.transition = "0.5s";
  passwordDrawer.style.boxShadow = "none";
};
account.addEventListener("click", displayLoginDrawer);

closeBtnLogin.addEventListener("click", closeLoginDrawer);

closeBtnSignup.addEventListener("click", closeSignupDrawer);

closeBtnPassword.addEventListener("click", closePasswordDrawer);

createAccountLink.addEventListener("click", displaySignupDrawer);

loginLink.addEventListener("click", displayLoginDrawer);

passwordLink.addEventListener("click", displayPasswordDrawer);

signupLink.addEventListener("click", () => {
  displaySignupDrawer();
  closeLoginDrawer();
});
